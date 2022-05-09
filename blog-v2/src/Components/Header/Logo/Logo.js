//Librairies
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoCss from './Logo.module.css';

export default function Logo() {

    const logo = require('./logoWildCodeSchool.png');

    return (
        <div className={LogoCss.Logo}>
            <NavLink
                className={LogoCss.LogoNav}
                to="/admin/add"
            >

                <img
                    src={logo}
                    alt="logo_wild_code_school" 
                />

            </NavLink>

        </div>


    )
}
