import { Link } from "react-router-dom";
import home from "../images/home.png";
import contectus from "../images/contectus.png";
import aboutus from "../images/about.png";
import cart from "../images/cart.png";
import { useSelector } from "react-redux";

const HeadComponent = () => {
  //subscribing to the store
  const cartInfo = useSelector((store) => store.cart.items);

  //store is provided by the react-redux this store in our appStore that we provided at the top level
  return (
    <div className="flex justify-evenly items-center p-4 bg-slate-100 shadow-md">
      <div className="flex items-start">
        <a href="/">
          <img
            className="w-20 mix-blend-multiply "
            src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI="
          />
        </a>
        <h4 className="hidden md:block text-xs p-1 md:text-sm md:p-2 first-line:underline text-slate-700 ">
          Rishikesh,Uttarakhand,Dehradun -249201
        </h4>
      </div>

      <h2 className="font-mono font-bold text-slate-700 text-xl md:text-3xl">
        Food Fire
      </h2>

      <ul className="flex  pr-2 space-x-1 md:space-x-8">
        <li className=" p-1 rounded-md hover:rounded-full ">
          <Link to="/">
            <img className="w-5 h-5 md:w-8 md:h-8 " src={home} alt="Home"></img>
          </Link>
        </li>
        <li className=" p-1 rounded-md hover:rounded-full">
          <Link to="/about">
            <img
              className="w-5 h-5 md:w-8 md:h-8"
              src={contectus}
              alt="Contect us"
            ></img>
          </Link>
        </li>
        <li className=" p-1 rounded-md hover:rounded-full">
          <Link to="/contact">
            <img
              className="w-5 h-5 md:w-8 md:h-8"
              src={aboutus}
              alt="About us"
            ></img>
          </Link>
        </li>
        <li className="p-1 rounded-md hover:rounded-full">
          <Link to="/cart">
            <div className=" flex flex-col items-center">
              <img
                className="w-5 h-5 md:w-8 md:h-8"
                src={cart}
                alt="cart"
              ></img>
              {cartInfo.length > 0 ? (
                <h1 className="text-md font-bold">({cartInfo.length})</h1>
              ) : (
                <h1></h1>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeadComponent;
