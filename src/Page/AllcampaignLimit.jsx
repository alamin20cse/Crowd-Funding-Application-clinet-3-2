import React, { useContext, useEffect, useState } from 'react';
import { data, NavLink } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { AuthContex } from '../Shared/AuthProvider';


const AllCampaignLimit = () => {
 
  const [campaigns, setCampaigns] = useState([]);
  
  const {user,loading}=useContext(AuthContex);

  useEffect(()=>{
    fetch('http://localhost:5000/allcampignlimit')
    .then(res=>res.json())
    .then(data=>setCampaigns(data))
  },[])

  console.log(campaigns)



 

  if(loading)
  {
      return <Loading></Loading>
  }

  // Sort functionality
  const sortCampaignsByMinDonation = () => {
    const sorted = [...campaigns].sort((a, b) => a.minimumDonation - b.minimumDonation);
    setCampaigns(sorted);
  };

  
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={sortCampaignsByMinDonation} className="btn btn-primary">
          Sort by Minimum Donation
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign, index) => (
          <div
            key={campaign._id || index}
            className="card bg-base-100 shadow-xl border"
          >
            <figure>
              <img
                src={campaign.thumbnail}
                alt={campaign.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">{campaign.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{campaign.description}</p>
              <div className="text-sm mt-2">
                <p><strong>Minimum Donation:</strong> ${campaign.minimumDonation}</p>
                <p><strong>Deadline:</strong> {campaign.deadline}</p>
                <p className="hidden lg:block"><strong>Organizer:</strong> {campaign.name}</p>
              </div>
              <div className="card-actions mt-4">
                <NavLink to={`/detailsCampain/${campaign._id}`} className="btn btn-primary w-full">
                  See More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllCampaignLimit;
