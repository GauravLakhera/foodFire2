import React from "react";

import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ConnectUs from "./components/ConnectUs";
import Error from "./components/Error";

//Default import=>
import HeadComponent from "./components/Header"; //imorting the default import from Header.js
import RestaurentMenu from "./components/RestaurentMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

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
    <Provider store={appStore}>

   
      <HeadComponent />
      <Outlet/>
      <Footer />
      </Provider>
    </>
  );
};
//Imported outled from the react-router-dom and added the childer to main rout 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ConnectUs />,
      },
      {
        path:"/restaurent/:Resid",
        element :<RestaurentMenu/>
      },{
        path:"/cart",
        element :<Cart/>

      }
    ],
    
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
