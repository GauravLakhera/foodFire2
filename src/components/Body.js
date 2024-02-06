// const Body = () => {
//   return (
//     <div className="resturBody">

//       {restaurants.map(function(res){
//        return <ResturraentCard {...res.info}/>
//       })}

//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { restaurantsList } from "../constant";
import ResturraentCard from "./ResturraentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatues from "../utils/useOnlineStatues";
import Crousal from "./Crousal";

// function filterData(searchInput, restaurents) {
//   return restaurents.filter(function mai (res) {
//     return res.info.name.includes(searchInput)
//   }

//   );
// }

function filterData(searchInput, restaurents) {
  return restaurents.filter((res) =>
    res.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [FilteredRestaurents, setFilteredRestaurents] = useState([]);
  const [restaurents, setRestaurent] = useState([]);
  const [searchInput, setSeachInput] = useState(""); //useState  returns -> [variable name ,  function to update the variable value]
  const [carousel, setcarousel] = useState([]);
  // const searchvar = useState();
  // const[searchInput,setSeachInput]=searchvar

  useEffect(() => {
    // Api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.0869281&lng=78.2676116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setcarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    //console.log(carousel);
    console.log(restaurents);
  }

  const isOnline = useOnlineStatues();
  if (isOnline === false) return <h1>Net to khol le bhai mere</h1>;

  return restaurents.length === 0 || typeof restaurents === undefined ? (
    <>
      {/* <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchInput}
        //e.target.value => whatever you write on input feild
        onChange={(e) => setSeachInput(e.target.value)} //setSeachInput is a function that is used to change the value of variable(searchInput) in useState Hook
      />
      <button
        className="btn-search"
        onClick={() => {
          //need to filter the data

          if (searchInput.length > 1) {
            setRestaurent(filterData(searchInput, restaurents));
          } else {
            setRestaurent(restaurantsList);
          }

          // const filteredData = filterData(searchInput, restaurents);
          // setRestaurent(filteredData);
        }}
      >
        Search
      </button>
      <button onClick={() => setRestaurent(restaurantsList)}>close</button>
    </div> */}
      <div className="resturBody">
        {Array.from({ length: 12 }, (_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="m-5 flex justify-center">
        <input
          className="p-3 border border-slate-800 rounded-3xl"
          type="text"
          placeholder="Search"
          value={searchInput}
          //e.target.value => whatever you write on input feild
          onChange={(e) => setSeachInput(e.target.value)} //setSeachInput is a function that is used to change the value of variable(searchInput) in useState Hook
        />
        <button
          className=" bg-slate-500 m-2 p-1 rounded-sm w-20 text-slate-100 "
          onClick={() => {
            //need to filter the data
            const filteredData = filterData(searchInput, restaurents);

            setFilteredRestaurents(filteredData);

            // setFilteredRestaurents(filterData(searchInput, restaurents));
          }}
        >
          Search
        </button>
        <button
          className="bg-slate-500 m-2 p-1 rounded-sm w-20  text-slate-100 "
          onClick={() => setFilteredRestaurents(restaurents)}
        >
          close
        </button>
      </div>

      <div className="flex">
        {carousel.length === 0 ? (
          <h1>No crausol</h1>
        ) : (
          carousel.map((res) => <Crousal key={res.id} {...res} />)
        )}
      </div>

      <h1 className="text-slate-700 text-xl font-semibold p-2 mt-2">
        Top restaurant chains in Rishikesh
      </h1>

      <div className=" flex flex-wrap justify-evenly">
        {FilteredRestaurents.length === 0 ? (
          <h1>No restaurents found</h1>
        ) : (
          FilteredRestaurents.map((res) => (
            <Link
              className="custom-link"
              key={res.info.id}
              to={"/restaurent/" + res.info.id}
            >
              <ResturraentCard {...res.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
