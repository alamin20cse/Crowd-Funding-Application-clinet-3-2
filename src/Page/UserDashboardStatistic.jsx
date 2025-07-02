import React from 'react';
import useUserPayments from '../Hooks/useUserPayments';
import Loading from '../Shared/Loading';
import { FcDonate } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const UserDashboardStatistic = () => {
   
    const [userpayments, loading,refetch]=useUserPayments();
    if(loading)
    {
        return <Loading></Loading>
    }
    // console.log(userpayments);
    const totalAmount = userpayments.reduce((total, item) => total + parseFloat(item.amount || 0), 0);

    return (
        <div>
           <Link className='btn btn-primary my-10' to='/dashboard/contact'>Get Funded</Link>
          <div className="flex bg-amber-200 p-4 gap-4 rounded-3xl items-center">
                          {/* icon */}
                          <div className="w-16 h-16 bg bg-yellow-100 rounded-2xl">
                        <FcDonate className="w-full h-full"></FcDonate>
          
                          </div>
                          {/* data and title */}
                          <div>
                              <h1 className="text-3xl ">Your Total Donation</h1>
                              <h1 className="text-3xl text-red-600 font-bold ">${totalAmount}</h1>
                              <h1 className="text-3xl text-green-600 font-bold ">Thanks For Your Donation</h1>
          
          
                          </div>
          
                      </div>
          
            
        </div>
    );
};

export default UserDashboardStatistic;