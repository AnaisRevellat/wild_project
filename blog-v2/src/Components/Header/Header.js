//Librairies
import React from "react";


//Composants
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import HeaderCss from "./Header.module.css";

export default function Header() {

    return (
        <header className={HeaderCss.Header}>
            <div className={['container', HeaderCss.flex].join(' ')}>
                <div className={HeaderCss.logo}>
                    <Logo />
                </div>
                <div className={HeaderCss.Nav}>
                    <Navigation />
                </div>
            </div>
        </header>

    );
}