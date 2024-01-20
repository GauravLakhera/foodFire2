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
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurents(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return restaurents.length === 0 ? (
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
      <div className="search-container">
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
            const filteredData = filterData(searchInput, restaurents);

            setFilteredRestaurents(filteredData);

            // setFilteredRestaurents(filterData(searchInput, restaurents));
          }}
        >
          Search
        </button>
        <button onClick={() => setFilteredRestaurents(restaurents)}>
          close
        </button>
      </div>

      <div className="resturBody">
        {FilteredRestaurents?.length === 0 ? (
          <h1>No restaurents found</h1>
        ) : (
          FilteredRestaurents.map((res) => (
            <ResturraentCard {...res.info} key={res.info.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
