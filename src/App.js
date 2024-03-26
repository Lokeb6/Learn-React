import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Grocery = lazy(()=> import("./components/Grocery"));
const Applayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children : [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> ,
            },
            {
                path: "/About",
                element: <About/>,
            },
            {
                path: "/Contact",
                element: <Contact/>,
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>,
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);