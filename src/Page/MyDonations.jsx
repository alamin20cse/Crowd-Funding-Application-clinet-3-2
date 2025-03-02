import React from 'react';
import useUserPayments from '../Hooks/useUserPayments';
import Loading from '../Shared/Loading';
import MyDonationCard from './MyDonationCard';

const MyDonations = () => {

   const  [userpayments, loading,refetch]=useUserPayments();
   if(loading)
   {
    return <Loading></Loading>
   }
   console.log(userpayments);
    return (
        <div>
            <h1>my donation </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    userpayments.map(payment=><MyDonationCard payment={payment} key={payment._id}></MyDonationCard>)
                }
            </div>
            
        </div>
    );
};

export default MyDonations;