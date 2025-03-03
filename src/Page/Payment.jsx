import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { AuthContex } from '../Shared/AuthProvider';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContex);
    
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('stripe'); // Default: Stripe

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
        title, thumbnail, description, type, minimumDonation, deadline,
        name, email, date, status, _id
    } = campaign;

    const handlePayment = (e) => {
        e.preventDefault();
        const totalprice = e.target.totalprice.value;

        const paymentInfo = {
            email: user?.email,
            name: user?.displayName,
            userPhoto: user?.photoURL,
            amount: totalprice,
            date: new Date().toISOString(),  
            campaignTitle: title,
            campaignId: _id,
            thumbnail: thumbnail,
        };

        console.log(paymentInfo);

        // Send to backend
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { "content-type": 'application/json' },
            body: JSON.stringify(paymentInfo),
        })
            .then(res => res.json())
            .then(result => {
                window.location.replace(result.url);
                console.log(result);
            });
    };

    return (
        <div className=" px-6 mx-auto">
            <h1 className='text-3xl text-center font-bold bg-slate-200 text-green-600'>
                Payment for Campaign
            </h1>

            {/* Campaign Details */}
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 my-5">
                <figure className="relative h-64 w-64 mx-auto">
                    <img src={thumbnail} alt={title} className="object-cover w-full h-full rounded-full" />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                        {status}
                    </div>
                </figure>

                <h2 className="text-2xl font-bold text-gray-800 mt-4">{title}</h2>
                <p className="text-lg text-gray-600">{type}</p>
                <p className="text-sm text-gray-500">{description}</p>

                <div className="space-y-2 text-gray-700 mt-3">
                    <p className="font-medium">👤 Organizer: {name}</p>
                    <p className="text-sm">📧 Contact: {email}</p>
                    <p className="font-semibold">
                        💰 Minimum Donation: <span className="text-green-600">${minimumDonation}</span>
                    </p>
                    <p>📅 Deadline: <span className="font-semibold">{new Date(deadline).toLocaleDateString()}</span></p>
                    <p>🕒 Created: {new Date(date).toLocaleDateString()}</p>
                </div>
            </div>

            {/* Payment Method Selection */}
            <div className="my-5 px-6">
                <label className="block text-lg font-semibold">Select Payment Method:</label>
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2 border rounded-md"
                >
                    <option value="stripe">Stripe</option>
                    <option value="sslc">SSLCOMMERZ</option>
                </select>
            </div>

          

          {/* card */}
          <div className='px-6'>
              {/* Stripe Payment */}
              {paymentMethod === 'stripe' && (
                <div className='py-8 bg-amber-100 rounded-lg'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm campaign={campaign} />
                    </Elements>
                </div>
            )}

            {/* SSLCOMMERZ Payment */}
            {paymentMethod === 'sslc' && (
                <div className='bg-orange-300 p-6 rounded-lg'>
                    <form onSubmit={handlePayment} className="space-y-4">
                        <input
                            type="number"
                            name="totalprice"
                            placeholder="Enter Amount (TK)"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
                            Pay with SSLCOMMERZ
                        </button>
                    </form>
                </div>
            )}
          </div>
        </div>
    );
};

export default Payment;
