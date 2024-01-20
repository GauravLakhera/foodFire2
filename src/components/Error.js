import { useRouteError } from "react-router-dom"

const Error=()=>
{
    const err=useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Oops!!</h1>
            <h3>Somthing went wrong </h3>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error