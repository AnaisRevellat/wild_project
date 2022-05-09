//Librairies
import React from 'react';
import InputCss from './Input.module.css';

export default function input(props) {

    let inputElement;
    /*on va générer une classe .invalid pour afficher un message d'erreur sous les input si nécessaire*/
    const validFillingClasses = []; 

    if (!props.validFilling && props.touched) {
        validFillingClasses.push(InputCss.invalid);
    }

    switch (props.type) {       //ici on génère des inputs spécifique en spécifiant le type
        case ('input'):
            inputElement = (
                <input
                    {...props.config}
                    value={props.value}
                    id={props.id}
                    className={validFillingClasses}
                    onChange={props.changed}
                />
            );
            break;

        case ('textarea'):
            inputElement = (
                <textarea
                    value={props.value}
                    id={props.id}
                    className={validFillingClasses}
                    onChange={props.changed}

                >
                </textarea >
            );
            break;
        default: console.log('');
    }

    return (
        <div className={InputCss.Input}>

            <div className={InputCss.labelTitle}>
                <label htmlFor={props.id}>{props.label}</label>
            </div>

            <div className={InputCss.inputContainer}>
                {inputElement}
            </div>

            <div className={InputCss.spanError}>
                {!props.validFilling && props.touched ? <span>{props.errorMessage}</span> : null}
            </div>
        </div>
    );
}
