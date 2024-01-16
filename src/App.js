import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer"
import Body from "./components/Body";


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



const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
