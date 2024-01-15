import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-food-logo-png-image_8366720.png"
    />
  </a>
);

const HeadComponent = () => (
  <div className="header">
    <Title />
    <div className="nav_items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Connect</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const ResturraentCard = () => {
  return (
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P9yZcizqyLVO1a09I6Wq-2BJ_1cpwF7FWw&usqp=CAU" />
      <h2>Burger King</h2>
      <h3>Burgers , american</h3>
      <h4>4.2 Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <ResturraentCard />
      <h2>Body </h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h2>footer </h2>
    </div>
  );
};

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
