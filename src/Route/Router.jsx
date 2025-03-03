import { createBrowserRouter } from "react-router-dom";
import HomeMain from "../Component/Home/HomeMain";
import Home from "../Component/Home/Home";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import AddNewCampaign from "../Page/AddNewCampaign";
import AllCampaign from "../Page/AllCampaign";
import DetailsCampaign from "../Page/DetailsCampaign";
import Payment from "../Page/Payment";
import PaymentSuccessed from "../Page/PaymentSuccessed";
import PaymentFail from "../Page/PaymentFail";
import Dashboard from "../Layout/Dashboard";
import Ex from "../Page/Ex";
import AllPaymentInfo from "../Page/AllPaymentInfo";
import AllUsers from "../Page/AllUsers";
import MyCampaign from "../Page/MyCampaign";
import DashboardHome from "../Page/DashboardHome";
import MyDonations from "../Page/MyDonations";
import UpdateCampaign from "../Page/UpdateCampaign";
import Profile from "../Page/Profile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allcampaign',
        element:<AllCampaign></AllCampaign>
      },
      {
        path:'/detailsCampain/:id',
        element:<DetailsCampaign></DetailsCampaign>

      },
      {
        path:'/payment/:id',
        element:<Payment></Payment>
      },
      {
        path:'/payment/success/:tranid',
        element:<PaymentSuccessed></PaymentSuccessed>
      },
      {
        path:'/payment/fail/:tranid',
        element:<PaymentFail></PaymentFail>
      },
      

    ]
  },
  // dashboard
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<DashboardHome></DashboardHome>

      },
      {
        path:'/dashboard/mydonations',
        element:<MyDonations></MyDonations>
      },
      {
        path:'/dashboard/ex',
        element:<Ex></Ex>
      },
      {
        path:'/dashboard/addnewcampaign',
        element:<AddNewCampaign></AddNewCampaign>
      },
      {
        path:'/dashboard/allpaymentinfo',
        element:<AllPaymentInfo></AllPaymentInfo>

      },
      {
        path:'/dashboard/allusers',
        element:<AllUsers></AllUsers>
      },
      {
        path:'/dashboard/mycampaign',
        element:<MyCampaign></MyCampaign>
      },
      {
        path:'/dashboard/updatecampaigns/:id',
        element:<UpdateCampaign></UpdateCampaign>
      },
      {
        path:'/dashboard/profile',
        element:<Profile></Profile>

      }
     

    ]



  }
]);
