import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const { id } = useParams();
   
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:5000/allcampign/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch campaign details");
          return res.json();
        })
        .then((data) => {
          setCampaign(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [id]);
  
    if (loading)
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-600 text-lg">Loading campaign details...</p>
        </div>
      );
  
    if (error)
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-600 text-lg">Error: {error}</p>
        </div>
      );
  
    if (!campaign) return null;
  
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
  
  
    return (
      <div>
        {/* details */}<div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
        
        <h1 className='text-3xl text-center font-bold bg-slate-200 text-green-600'>Payment please for this Campaign</h1>

        
{/* Campaign Image */}
<figure className="relative h-64 w-64  mx-auto">
  <img 
    src={thumbnail}
    alt={title}
    className="object-cover w-full h-full rounded-full"
  />
  <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
    {status}
  </div>
</figure>

{/* Campaign Details */}
<div className="p-6 space-y-4">
  <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  <p className="text-lg text-gray-600 font-medium">{type}</p>
  <p className="text-sm text-gray-500">{description}</p>

  <div className="space-y-2 text-gray-700">
    <p className="font-medium">👤 Organizer: {name}</p>
    <p className="text-sm">📧 Contact: {email}</p>
    <p className="font-semibold">
      💰 Minimum Donation:{" "}
      <span className="text-green-600">${minimumDonation}</span>
    </p>
    <p>
      📅 Deadline:{" "}
      <span className="font-semibold">
        {new Date(deadline).toLocaleDateString()}
      </span>
    </p>
    <p>🕒 Created: {new Date(date).toLocaleDateString()}</p>
  </div>

  {/* Donate Button */}
 
</div>
</div>





{/* Payment part */}
<div className='py-16 bg-amber-100'>
  <Elements stripe={stripePromise}>
    <CheckoutForm campaign={campaign}></CheckoutForm>

  </Elements>
</div>


      </div>
    );
  };
  
export default Payment;