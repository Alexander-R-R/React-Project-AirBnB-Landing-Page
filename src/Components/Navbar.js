import React from "react";
import Logo from "../images/airbnb-logo.png"

export default function Nav() {
    return (
        <nav className="nav-container">
            <img className="logo-img" src= {Logo}/>
        </nav>
    )
}