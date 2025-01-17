import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


const Router = createBrowserRouter([
{
    path:"/",
    element:<HomeLayout></HomeLayout>
},
{
    path:"/auth",
    element:<h1>Auth</h1>
},
{
    path:"/news",
    element:<h1>News</h1>
},
{
    path:"*",
    element:<h1>ERRORRRRRRRR</h1>
},

])

export default Router;