import React  from "react";
import { useNavigate } from "react-router-dom";

function SignoutBtn(){

    let authnavigate=useNavigate()

    return (
        <button className="reset"  onClick={ ()=>{
            localStorage.removeItem("token")
            authnavigate("/")
           } }> Signout</button>
    );
}

export default SignoutBtn;