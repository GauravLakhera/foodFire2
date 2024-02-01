import veg from "../images/veg.png";
import bestseller from "../images/bestseller.png";
const ItemCrad = ({
  name,
  isVeg,
  imageId,
  inStock,
  isBestseller,
  price,
  ratings,
  showImage,
  description,
}) => {
  // console.log(name);
  // console.log(isVeg);
  // console.log(imageId);
  // console.log(inStock);
  // console.log(isBestseller);
  // console.log(price);
  // console.log(ratings.aggregatedRating.rating);
  // console.log(showImage);
  // console.log(description);

  return (
    <div className="flex flex-row justify-between space-x-1 border shadow-xl m-5 bg-[#f9f9f9] p-2 min-w-96 max-w-96">
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-xl text-wrap max-w-52">{name}</h1>
        <p className="bg-[#ebebeb] mt-1 mb-2 max-w-52 max-h-60 overflow-hidden text-wrap">
          {description}
        </p>

        <div className="flex flex-row items-center space-x-1 m-1">
          {isVeg ? <h4 className="text-xs">Veg</h4> : <h4>Non Veg</h4>}
          <img className="w-5 h-5" src={veg}></img>
        </div>

        <div className="flex items-center">
          {isBestseller ? (
            <>
              <h4 className="m-1 text-xs">BestSeller</h4>{" "}
              <img className="w-7 h-7" src={bestseller}></img>{" "}
            </>
          ) : (
            <h4></h4>
          )}
        </div>
      </div>

      <div className="item2">
        {showImage ? (
          <img
            className="w-52 h-52 object-cover min-w-52  hover:scale-150  transition duration-300 ease-in-out hover:rounded-md"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              imageId
            }
          ></img>
        ) : (
          <img></img>
        )}

        <h3 className="font-mono">{price / 100} &#8377;</h3>
        {inStock ? (
          <h4 className="text-green-700 text-sm mb-2">Avaliable</h4>
        ) : (
          <h4 className="text-red-600 text-sm mb-2">Not avaliable</h4>
        )}
      </div>
    </div>
  );
};

export default ItemCrad;
