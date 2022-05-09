//Librairies
import React from 'react';
import LayoutCss from './Layout.module.css';

//Composants
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function Layout(props) {

    return (
        <div className={LayoutCss.Layout}>
            <Header />
            <div className={LayoutCss.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    );

}

/*

-Header
    --logo
    -Navigation
        -NavigationItem

*/

