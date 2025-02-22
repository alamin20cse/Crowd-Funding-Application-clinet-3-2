import { createBrowserRouter } from "react-router-dom";
import HomeMain from "../Component/Home/HomeMain";
import Home from "../Component/Home/Home";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import AddNewCampaign from "../Page/AddNewCampaign";
import AllCampaign from "../Page/AllCampaign";
import DetailsCampaign from "../Page/DetailsCampaign";
import Payment from "../Page/Payment";


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
        path:'/addnewcampaign',
        element:<AddNewCampaign></AddNewCampaign>
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
      }
    ]
  },
]);
