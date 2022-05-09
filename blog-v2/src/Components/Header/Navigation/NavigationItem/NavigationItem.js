//Librairies
import React from "react";
import { NavLink } from "react-router-dom"; //useLocation, useNavigate 
import NavItemCss from "./NavigationItem.module.css";

export default function NavigationItem(props) {

    // const location = useLocation();
    // console.log(location);

    // const navigate = useNavigate();
    // console.log(navigate);


    let activeStyle = {
        color: "#000",
    };

    return (
        <li className={NavItemCss.NavigationItem}>
            <NavLink
                to={props.to}
                style={({ isActive }) => isActive ? activeStyle : undefined}
            >
                {props.children}
            </NavLink>
        </li>
    );
}


