// const Body = () => {
//   return (
//     <div className="resturBody">

//       {restaurants.map(function(res){
//        return <ResturraentCard {...res.info}/>
//       })}

//     </div>
//   );
// };
import { useState } from "react";
import { restaurantsList } from "../constant";
import ResturraentCard from "./ResturraentCard";

// function filterData(searchInput, restaurents) {
//   return restaurents.filter(function mai (res) {
//     return res.info.name.includes(searchInput)
//   }
     
//   );
// }


function filterData(searchInput,restaurants)
{
  return restaurants.filter((res)=>(res.info.name.includes(searchInput)))
}



const Body = () => {
  const [restaurents, setRestaurent] = useState(restaurantsList);
  const [searchInput, setSeachInput] = useState(""); //useState  returns -> [variable name ,  function to update the variable value]
  // const searchvar = useState();
  // const[searchInput,setSeachInput]=searchvar
  return (
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

            
            if(searchInput.length>1)
            {
              setRestaurent(filterData(searchInput, restaurents));
            }
            else
            {
              setRestaurent(restaurantsList);
            }
            
            // const filteredData = filterData(searchInput, restaurents);
            // setRestaurent(filteredData);
          }}
          
        >
          Search
        </button>
        <button onClick={()=> setRestaurent(restaurantsList)}>close</button>
      </div>

      <div className="resturBody">
        {restaurents.map((res) => {
          return <ResturraentCard {...res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
