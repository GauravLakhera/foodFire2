import { useEffect, useState } from "react"


const useOnlineStatues=()=>
{

    const [isOnline,setisOnline] = useState(true)

    useEffect(()=>{
      window.addEventListener("offline",()=>{
        setisOnline(false)
      })

      window.addEventListener("online",()=>{
        setisOnline(true)
      })
    },[])

    return isOnline
}

export default useOnlineStatues