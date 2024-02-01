import { IMG_CDN_URL } from "../constant";
import star from "../images/star.png"

const ResturraentCard = ({ name, cloudinaryImageId, cuisines, avgRating ,sla}) => {
  
    return (

      
      <div className="cardContainer">


      
      <div className="flex flex-col border m-3 shadow-xl  p-1 max-w-52 hover:scale-110  transition duration-300 ease-in-out hover:rounded-md">
        <img className="w-full h-56 object-cover rounded-t-lg   "
          src={IMG_CDN_URL+cloudinaryImageId}
          alt="Restaurant Image"
        />
        <h2 className="text-lg font-semibold text-center p-2">{name}</h2>
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap m-2">{cuisines.join(", ")}</h3>
       
        <div className="flex justify-around items-center p-2 border">
          <h1 className="text-ellipsis text-sm font-serif">{sla.slaString}</h1>

          <div className="flex justify-center items-center font-serif">
          <h4>{avgRating}</h4>
        <img className="w-4 h-4 ml-1 " src={star}></img>
          </div>

        </div>
      </div>
      </div>
    );
  };
  
  export default ResturraentCard