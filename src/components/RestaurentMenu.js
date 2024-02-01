import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemCrad from "./ResItemCard";
import useRestaurentMenuInfo from "../utils/useRestarentMenuInfo";
import star from "../images/star.png";
const RestaurentMenu = () => {
  const { Resid } = useParams(); //reading the Resid perameter send from the App.js

  const resInfo = useRestaurentMenuInfo(Resid);

  if (resInfo == null) return <Shimmer />;

  const {
    name,
    city,
    areaName,
    cuisines,
    avgRating,
    isOpen,
    costForTwoMessage,
  } = resInfo.cards[0].card.card.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(itemCards);



  return (
    

      <div className="flex flex-col justify-center">

      
      <h1 className="text-3xl text-center mt-2 p-2">{name}</h1>
      <div className="flex justify-center items-end ">

      <h1 className="text-2xl m-1">{city}</h1>
      <h1 className="text-slate-700 text-sm">{areaName}</h1>
      </div>

      {isOpen?<h1 className="ml-3 text-green-700">Open</h1>:<h1 className="ml-3 text-red-700">Close</h1>}
      <h3 className="text-center m-1">{costForTwoMessage}</h3>
      <div className="flex space-x-1 items-center border justify-center ">
      <h4 className=" font-semibold m-1 p-1 shadow-md">Rating {itemCards[0].card.info.ratings.aggregatedRating.rating}</h4>
        <img className="w-5 h-5" src={star}></img>
      </div>

     <div className="bg-slate-100 flex flex-row flex-wrap justify-around">

     



      {itemCards.map((item) => (
        <ItemCrad {...item.card.info} />
      ))}

</div>

      {/* <ul>
        {itemCards.map((item) => (
          <li key = {item.card}>{item.card.info.name} - {" Rs."}
          {item.card.info.price/100||item.card.info.defaultprice}</li>
          
))}
      </ul> */}
    </div>
  );
};

export default RestaurentMenu;
