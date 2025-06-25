import React from 'react';
import SliderPart from '../../Page/SliderPart';
import ExtraSection from '../../Page/ExtraSection';
import AllCampaignLimit from '../../Page/AllcampaignLimit';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>


<SliderPart></SliderPart>
<AllCampaignLimit></AllCampaignLimit>
<Link to='/allcampaign' className='btn btn-primary' >See more Campaign</Link>


<ExtraSection></ExtraSection>




            
           
            
        </div>
    );
};

export default Home;