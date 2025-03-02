import React from 'react';

const MyCampaignCard = ({campaign}) => {
    const {date,deadline,description,email,minimumDonation,name,status,thumbnail,title,type,_id}=campaign
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className='h-[200px] '>
          <img className='w-full h-full'
            src={thumbnail}
            alt="Shoes" />
        </figure>
        <div className="card w-full  p-4">
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className={`badge ${status === "active" ? "badge-success" : "badge-secondary"}`}>
                        {status}
                    </div>
                </h2>
                <p className="text-gray-700">{description}</p>
                <h1 className="text-lg font-semibold">Organizer: {name}</h1>
                <h1 className="text-xl">Email: {email}</h1>
                <p className="text-sm text-gray-500">Posted on: {new Date(date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(deadline).toLocaleDateString()}</p>
                <h3 className="text-md font-bold">Minimum Donation: ${minimumDonation}</h3>
                
                {/* Tags */}
                <div className="card-actions justify-end mt-3">
                    <div className="badge badge-outline">Type: {type || "General"}</div>
                  
                </div>
                <button className='btn btn-primary'>Edit</button>
            </div>
        </div>
      </div>
    );
};

export default MyCampaignCard;