import ResCatInfo from "./ResCatInfo";
import dropDown from "../images/drop-down-arrow.png";
import { useState } from "react";
const RestaurentCategory = ({ data, showItem, setShowIndex }) => {
  // console.log(data);

  const handelClick = () => {
    setShowIndex();
  };
  return (
    <div className="bg-slate-50 rounded-md mt-2 flex flex-col w-11/12 mb-4 p-2 shadow-sm ">
      <div
        className=" cursor-pointer justify-between content-center
      flex "
        onClick={handelClick}
      >
        <h1 className="text-xl font-bold m-2">
          {data.title} ({data.itemCards.length})
        </h1>
        <img className="w-5 h-7 mx-2" src={dropDown}></img>
      </div>
      {showItem && <ResCatInfo item={data.itemCards} />}
    </div>
  );
};

export default RestaurentCategory;
