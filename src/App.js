import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer"
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs"
import ConnectUs from "./components/ConnectUs";
import Error from "./components/Error";


//Default import=>
import HeadComponent from "./components/Header";//imorting the default import from Header.js

//Named import=>
// import { Logo,Tital } from "./components/Header";//importing using the name of variable


/**
 * Header
 *   -logo
 *   -Nav items(right side)
 *   -cart
 * Body
 *   -Search bar
 *   -Resturent List
 *     -Reataurent Crad
 *        -images
 *        -names
 *        -rating
 *        -cusine
 * Footer
 *  -links
 *  -copyright
 *
 */

const AppLayout = () => {
  return (
    <>
      <HeadComponent />
      <Body />
      <Footer />
    </>
  );
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement : <Error/>
  },
  {
    path: "/about",
    element: <AboutUs/>,
    errorElement : <Error/>
  },
  {
    path:"/contact",
    element : <ConnectUs/>,
    errorElement : <Error/>
  }
]
)



const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> );
