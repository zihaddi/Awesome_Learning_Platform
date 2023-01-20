import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Category from "../Pages/Category/Category/Category";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/News/News/News";
import PremiumAccess from "../Pages/PremiumAccess/PremiumAccess";
import Login from "../Pages/Shared/Login/Login/Login";
import Register from "../Pages/Shared/Login/Register/Register";
import StartHome from "../Pages/StartHome/StartHome";
import PrivateRoutes from "./PrivateRoutes";


export const routes = createBrowserRouter([
  
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',   
        element:<StartHome></StartHome>,
        loader:()=> fetch('https://learning-platform-server-eight.vercel.app/news'),
       },
      {
        path:'/news',
        element:<Home></Home>,
        loader:()=> fetch('https://learning-platform-server-eight.vercel.app/news')
      },
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader:({params})=> fetch(`https://learning-platform-server-eight.vercel.app/category/${params.id}`)
      },
      {
        path:'/news/:id',
        element:<News></News>,
        loader:({params})=> fetch(`https://learning-platform-server-eight.vercel.app/category/${params.id}`)
      },
      {
        path:'premium/:id',
        element:<PrivateRoutes><PremiumAccess></PremiumAccess></PrivateRoutes>,
        loader:({params})=> fetch(`https://learning-platform-server-eight.vercel.app/category/${params.id}`)
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/faq',
        element:<FAQ></FAQ>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
    ]
  },
  
 
])