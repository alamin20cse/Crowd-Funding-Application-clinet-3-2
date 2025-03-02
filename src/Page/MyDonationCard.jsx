import React from 'react';

const MyDonationCard = ({payment}) => {
    const {
        amount,campaignId,thumbnail, paidStatus,TranstionID,campaignTitle,email,name,date

        

        
    }=payment
    return (
        <div className="card bg-base-100  shadow-sm">
        <figure className='h-[200px]'>
          <img className='w-full h-full'
            src={thumbnail}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {campaignTitle}
            {
      paidStatus ? (
        <div className="badge badge-secondary">Paid</div>
      ) : (
        <div className="badge badge-warning">Unpaid</div>
      )
    }
          </h2>
          <h1 className='badge bg-lime-400'>
Amount: ${amount}</h1>
          <p className='font-bold'>TranstionID : {TranstionID}</p>
          <h1>
Email: {email}</h1>
<h1>Name: {name}</h1>
<div className='flex flex-row'>
   

</div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Payment Date :{date
            }</div>
           
          </div>
        </div>
      </div>
    );
};

export default MyDonationCard;