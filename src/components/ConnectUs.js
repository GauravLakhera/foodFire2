import React from "react";
import whatsapp from "../images/whatsapp.png";

const ConnectUs = () => {
  return (
    <div className="flex justify-center content-center items-center h-80 border m-10 shadow-md">
      <img className="w-20 h-22" src={whatsapp}></img>
      <h1 className="ml-5 font-semibold">+917906154013</h1>
    </div>
  );
};

export default ConnectUs;
