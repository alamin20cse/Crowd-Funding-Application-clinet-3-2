import React from 'react';
import { Link, useParams } from 'react-router-dom';
import pic from '../assets/payment.gif'

const PaymentSuccessed = () => {
    const {tranid}=useParams()
    // console.log(tranid);
    return (
        <div className='bg-sky-600'>
            <img className='mx-auto' src={pic} alt="" />

            <h1 className='text-3xl font-bold  p-5 text-center bg-blue-800 rounded-2xl'>Your Transtion Id : {tranid}</h1>
          
           <Link className='btn bg-amber-400 my-5' to='/'>Go back Home</Link>
        </div>
    );
};

export default PaymentSuccessed;