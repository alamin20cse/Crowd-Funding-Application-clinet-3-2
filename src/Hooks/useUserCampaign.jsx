import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContex } from "../Shared/AuthProvider";




// onlyl login user will show

const useUserCamagign = () => {
    const { user, loading: authLoading,logOut } = useContext(AuthContex);
   
   

    const {
        data: usercampaign = [], // Default to an empty array while loading
        isLoading: queryLoading,
    } = useQuery({
        queryKey: ['usercampaign', user?.email],
        queryFn: async () => {
            if (!user?.email) return []; // Avoid querying if email is not available
            // console.log("Fetching data for email:", user.email); // Debug log
            const res = await axios.get(`http://localhost:5000/mycampign?email=${user.email}`);
          
            
            return res.data;
        },
        enabled: !authLoading && !!user?.email, // Wait for AuthContext to finish loading
    });

    const loading = authLoading || queryLoading;
    return [usercampaign, loading];
};

export default useUserCamagign;