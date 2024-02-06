import { IMG_CDN_URL } from "../constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ResCatInfo = ({ item }) => {
  const dispatch = useDispatch();
  const AddToCart = (item) => {
    //dispatch an Action
    dispatch(addItems(item));
    //item goes as action and we retrive that in store using action.payload
   
  };

  return (
    <div className="flex  justify-between flex-col flex-wrap  my-4">
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="my-2 flex flex-row justify-between  p-2 border-blue-100 border-b-2"
        >
          {/* {console.log(item.card.info.name)} */}

          <div className="flex flex-col">
            <span className="flex mb-1">
              <h1 className="text-xl">{item.card.info.name}</h1>
              <h1 className="mx-2">₹ {item.card.info.price / 100}</h1>
            </span>

            <h1 className="text-sm font-serif">{item.card.info.description}</h1>
          </div>

          <div>
            <button
              className=" font-sans font-bold bg-slate-200 p-1 rounded-xl text-center w-6/12"
              onClick={() => AddToCart(item)}
            >
              Add +
            </button>
            <img
              className="w-24 h-24 rounded-sm object-fill md:w-36 md:h-24"
              src={IMG_CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResCatInfo;
