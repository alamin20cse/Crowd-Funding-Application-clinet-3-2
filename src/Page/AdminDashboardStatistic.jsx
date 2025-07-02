import React from 'react';
import usericon from '../assets/usersicon.png'
import useAllUsers from '../Hooks/useAllUsers';
import { FcDonate } from 'react-icons/fc';

import useAllPaymentInfo from '../Hooks/useAllPaymentInfo';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const AdminDashboardStatistic = () => {
    const [allusers, loading, refetch]=useAllUsers()
    const [allPayments, loadingPayment] = useAllPaymentInfo()

    
    if(loadingPayment || loading)
    {
        return <Loading></Loading>
    }
    // console.log(allPayments);
    // console.log(allusers);
    const totalAmount = allPayments.reduce((total, item) => total + parseFloat(item.amount || 0), 0);
   
    return (
       <div>
        <Link className='btn btn-primary my-10' to='/dashboard/contact'>Get Loan</Link>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2">

{/* for all user */}
            <div className="flex bg-amber-200 p-4 gap-4 rounded-3xl items-center">
                {/* icon */}
                <div className="w-16 h-16 bg bg-yellow-100 rounded-2xl">
              <img src={usericon}></img>

                </div>
                {/* data and title */}
                <div>
                    <h1 className="text-3xl ">Total users</h1>
                    <h1 className="text-3xl text-red-600  font-bold ">{allusers.length}</h1>


                </div>

            </div>








{/* for  FUNDING */}
<div className="flex bg-amber-200 p-4 gap-4 rounded-3xl items-center">
                {/* icon */}
                <div className="w-16 h-16 bg bg-yellow-100 rounded-2xl">
              <FcDonate className="w-full h-full"></FcDonate>

                </div>
                {/* data and title */}
                <div>
                    <h1 className="text-3xl ">Total Funding</h1>
                    <h1 className="text-3xl text-red-600 font-bold ">${totalAmount}</h1>


                </div>

            </div>


            


            
        </div>
       </div>
    );
};

export default AdminDashboardStatistic;