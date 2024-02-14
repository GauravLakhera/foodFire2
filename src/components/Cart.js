import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constant";

import { cleareCart } from "../utils/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const RemoveFromCart = () => {
    dispatch(cleareCart());
  };

  if (cardItems.length === 0)
    return (
      <div className="p-1 text-black text-center font-semibold text-xl m-52">
        No items. Add Items{" "}
      </div>
    );
  else
    return (
      <div className="flex  justify-center content-center bg-slate-200 flex-col flex-wrap  my-4">
        <button
          className="p-1 bg-slate-400 m-2 rounded-md text-white cursor-pointer "
          onClick={RemoveFromCart}
        >
          Clear Cart
        </button>
        {cardItems.map((item) => (
          <div
            key={item.card.info.id}
            className="my-2 flex flex-row justify-between bg-slate-50 rounded-md p-2 border-blue-100 border-b-2"
          >
            {/* {console.log(item.card.info.name)} */}

            <div className="flex flex-col">
              <span className="flex mb-1">
                <h1 className="text-xl">{item.card.info.name}</h1>
                <h1 className="mx-2">₹ {item.card.info.price / 100}</h1>
              </span>

              <h1 className="text-sm font-serif">
                {item.card.info.description}
              </h1>
            </div>

            <div>
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

export default Cart;
