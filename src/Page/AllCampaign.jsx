import React, { useContext, useEffect, useState } from 'react';
import { data, NavLink } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { AuthContex } from '../Shared/AuthProvider';


const AllCampaign = () => {
 
  const [campaigns, setCampaigns] = useState([]);
  
  const {user,loading}=useContext(AuthContex);

  useEffect(()=>{
    fetch('http://localhost:5000/allcampign')
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
    <div className="p-4 pt-16">
      {/* Header Section */}
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold mb-4">All Campaigns: {campaigns.length}</h1>
        <button className="btn btn-primary" onClick={sortCampaignsByMinDonation}>
          Sort 
        </button>
      </div>

      {/* Campaigns Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Serial</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Image</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Title</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Amount</th>
              <th className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">Name</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Action</th>
              <th className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">Deadline</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {campaigns.map((campaign, indx) => (
              <tr key={campaign._id || indx} className="border-t">
                <th className="text-sm lg:text-base md:text-sm sm:text-xs">{indx + 1}</th>
                <td>
                  <img
                    className="rounded-full h-10 w-10"
                    src={campaign.thumbnail}
                    alt={campaign.title}
                  />
                </td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">{campaign.title}</td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">{campaign.minimumDonation}</td>
                <td className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">{campaign.name}</td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">
                  <NavLink className="btn btn-primary" to={`/detailsCampain/${campaign._id}`}>
                    See More
                  </NavLink>
                </td>
                <td className="text-sm hidden lg:table-cell lg:text-base md:text-sm sm:text-xs">
                  {campaign.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
