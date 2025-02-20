import { createBrowserRouter } from "react-router-dom";
import HomeMain from "../Component/Home/HomeMain";
import Home from "../Component/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);
