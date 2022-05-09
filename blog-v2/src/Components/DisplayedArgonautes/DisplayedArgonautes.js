//Librairies
import React from 'react';
import ArgonautesCss from './DisplayedArgonautes.module.css';

//Composants
import DisplayedArgonaute from './DisplayedArgonaute/DisplayedArgonaute';


function DisplayedArgonautes(props) {

    let argonautes = props.argonautes.map(argonaute => (
        <DisplayedArgonaute key={argonaute.id} argonaute={argonaute} />
    ));


    return (
        <>
        <section className={ArgonautesCss.membersTitle}>
            <p>Membres de l'équipages</p>
        </section>
            <section className={['container', ArgonautesCss.DisplayedArgonautes].join(' ')}>
                {argonautes}
            </section>
        </>
    );
}

export default DisplayedArgonautes;