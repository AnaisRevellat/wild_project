
//Librairies
import React from "react";
import routes from "../../../config/routes";
import NavCss from "./Navigation.module.css";


//Composants

import NavigationItem from "./NavigationItem/NavigationItem";



export default function Navigation(props) {

    return (
        <>
            <ul className={NavCss.Navigation}>
                <NavigationItem end to={routes.HOME}>Les Argonautes</NavigationItem>
            </ul>
        </>
    );
}