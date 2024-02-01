import { useState,useEffect } from "react";



const useRestaurentMenuInfo=(Resid)=>
{
    const [ResInfo,setResInfo]=useState(null)


    useEffect(()=>{

        fetchData()
    },[])
    
    fetchData=async()=>
    {
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.0869281&lng=78.2676116&restaurantId=" +
        Resid +
        "&catalog_qa=undefined&submitAction=ENTER")

        const json=await data.json();
        setResInfo(json.data)

    }

    return ResInfo;


}

export default useRestaurentMenuInfo