import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Shared/AuthProvider";
import Swal from "sweetalert2";
// here clientSecret pay na jokhon tokhon error ase
const CheckoutForm = ({ campaign }) => {
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const { user } = useContext(AuthContex);
  const [transitionid,setTranstionid]=useState('')


  const handlePriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setTotalPrice(price);
  };


//   will get from payment.jsx
const {
    title,
    thumbnail,
    description,
    type,
    minimumDonation,
    deadline,
    name,
    email,
    date,
    status,
    _id
  } = campaign;






  useEffect(() => {
    if (!totalPrice || isNaN(totalPrice) || totalPrice <= 0) {
      setClientSecret(""); // Reset clientSecret when price is invalid
      return;
    }

    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          console.log("Client Secret:", data.clientSecret);
          setClientSecret(data.clientSecret);
        } else {
          console.error("No clientSecret received:", data);
        }
      })
      .catch((error) => console.error("Error fetching clientSecret:", error));
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (paymentMethodError) {
      console.log('Payment method error:', paymentMethodError);
      setError(paymentMethodError.message);
      return;
    } else {
      console.log('Payment method:', paymentMethod);
      setError('');
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName,
         
        },
      },
    });

    if (confirmError) {
      console.log("Confirm error", confirmError);
      setError(confirmError.message);
    } else {
      console.log(paymentIntent);
      setError('');
      if(paymentIntent.status==='succeeded')
      {
        console.log('trnastion id:',paymentIntent.id);
        setTranstionid(paymentIntent.id)


        // now Save the payment information in database
        const payment={
            email:user?.email,
            name:user?.displayName,
            userPhoto:user?.photoURL,
            amount: totalPrice,
            date: new Date(), //jtc date covert . use moment js
            campaignTitle: title,
            campaignId:_id,
            thumbnail:thumbnail,
            transitionid:paymentIntent.id,
            paidStatus:true,


        }


        fetch('http://localhost:5000/payments',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(payment),



        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);


            Swal.fire({
                title: "Success",
                text: "Successfully Payment",
                icon: "success"
              });
        })













      }
     
    }
  };

  return (
    <div className="px-6">
      <form onSubmit={handleSubmit}>
        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Taka </span>
          </label>
          <input
            type="number"
            name="taka"
            placeholder="EX: 10 tk"
            className="input input-bordered"
            value={totalPrice}
            onChange={handlePriceChange}
            required
            min="1"
            max="999999.99"
            step="0.01"
          />
        </div>

        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button className="btn rounded-xl my-4 btn-primary" type="submit" disabled={!stripe}>
          Pay
        </button>

        {error && <p className="text bg-red-600">{error}</p>}
      </form>
      {
        transitionid && <p>Your trnastion id : {transitionid}</p>
      }
    </div>
  );
};

export default CheckoutForm;
