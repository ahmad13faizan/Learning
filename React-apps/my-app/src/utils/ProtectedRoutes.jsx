import { Outlet,Navigate} from "react-router-dom"; 
import React from "react";

const ProtectedRoutes=()=>{
    return localStorage.getItem("token") === "authorised" ?<Outlet/> : <Navigate to ="/"/>

}

export default ProtectedRoutes;