import React from "react";
import { Link } from "react-router-dom";

function Error1(){

    return(
        <div id="main-div">
        <h1>Erorr 404....</h1>
        <h5>Please go to login</h5>
        <Link to="/" >click here</Link>
        </div>
    )
}
export default Error1;