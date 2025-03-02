import React from 'react';
import useUserCamagign from '../Hooks/useUserCampaign';
import Loading from '../Shared/Loading';
import MyCampaignCard from './MyCampaignCard';

const MyCampaign = () => {
    const [usercampaign, loading,refetch]=useUserCamagign()
    if(loading)
    {
        return <Loading></Loading>
    }
    console.log(usercampaign);
   
    return (
        <div>
            <h1>My Campaign</h1>
            <div className='grid  md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    usercampaign.map(campaign=><MyCampaignCard refetch={refetch} campaign={campaign} key={campaign._id}></MyCampaignCard>)
                }
            </div>
            
        </div>
    );
};

export default MyCampaign;