import React from 'react';
import useUsers from '../Hooks/useUsers';
import Loading from '../Shared/Loading';
import AdminDashboardStatistic from './AdminDashboardStatistic';
import UserDashboardStatistic from './UserDashboardStatistic';

const DashboardHome = () => {
    const  [users, loading,refetch]=useUsers();
    
    if(loading)
        {
            return <Loading></Loading>
        }
        // console.log(users);
        return (
            <div>
     
                   <h2 className="text-3xl font-bold text-center mb-5">Welcome {users[0]?.name}</h2>
              
    
    
    
                {
                    users[0]?.role === 'user' ? (
                        <div>
                          <UserDashboardStatistic></UserDashboardStatistic>
                           
                        </div>
                    ):(
                        <>
                            <h2>Admin Dashboard</h2>
                            <AdminDashboardStatistic></AdminDashboardStatistic>
                        </>
                    ) 
                }
            </div>
        );
};

export default DashboardHome;