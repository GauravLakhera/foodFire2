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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    console.log(json);

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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const isOnline = useOnlineStatues();
  if (isOnline === false) return <h1>Net to khol le bhai mere</h1>;

  return restaurents.length === 0 || typeof restaurents === undefined ? (
    <>
      <div className=" flex flex-wrap justify-evenly mt-52">
        {Array.from({ length: 12 }, (_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="mt-5 flex justify-center bg-slate-100 p-2">
        <input
          className="p-2 border border-slate-800 rounded-3xl"
          type="text"
          placeholder="Search"
          value={searchInput}
          //e.target.value => whatever you write on input feild
          onChange={(e) => setSeachInput(e.target.value)} //setSeachInput is a function that is used to change the value of variable(searchInput) in useState Hook
        />
        <button
          className=" bg-slate-500 m-2 p-1 rounded-xl w-20 text-slate-100 "
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
          className="bg-slate-500 m-2 p-1 rounded-xl w-20  text-slate-100 "
          onClick={() => setFilteredRestaurents(restaurents)}
        >
          close
        </button>
      </div>
      <div>
        <h1 className="font-bold text-2xl w-9/12 m-auto pt-2">
          Hey, What's on your mind ?
        </h1>
      </div>
      <div className="flex bg-slate-50">
        {carousel.length === 0 ? (
          <h1>No crausol</h1>
        ) : (
          <div className="w-9/12 m-auto md:w-8/12">
            <Slider {...settings}>
              {carousel.map((res) => (
                <Crousal key={res.id} {...res} />
              ))}
            </Slider>
          </div>
        )}
      </div>

      <h1 className="text-slate-800 text-xl font-semibold p-5 mt-3 border-b-2 bg-slate-100">
        Top restaurant chains in Rishikesh
      </h1>

      <div className=" flex flex-wrap justify-evenly bg-slate-200">
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
