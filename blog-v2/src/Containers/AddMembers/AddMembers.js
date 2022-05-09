
//Librairies
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import AddMembersCss from './AddMembers.module.css';
import axios from '../../config/axios-firebase';

//Composants
import Input from '../../Components/UI/Input/Input';

//Liste Argonautes
//import firstMembers from '../../data/blog-wild-v2-default-rtdb-export.json';


export default function AddMembers(props) {

    const location = useLocation();
    console.log(location);
    //const navigate = useNavigate();

    //1 States
    const [inputs, setInputs] = useState({

        title: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Titre de l'article"
            },
            value: '',
            label: "Nom de l'argonaute",
            valid: false,                   //ici si valid vaut true, alors submit => envois du formulaire
            validation: {                   //on discrimine par les critère voulu la validation
                required: true,
                minLength: 5,
                maxLength: 85
            },
            touched: false,
            errorMessage: 'Il faut minimum 5 caractères'
        }
    });

    const [validIsOk, setValidIsOk] = useState(false); //par défaut le formulaire est à false

    //---------------------------------Fonctions-----------------------------//
    const checkValidity = (value, rules) => {  //value représente e.traget.value des inputs ici
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid; //&& isValid éviter l'écrasement de valeur
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    };

    const inputChangedHandler = (event, id) => {  //4 le but est d'obtenir un tableau à jour et de récupérer la valeur voulue

        //changement de la valeur
        const newInputs = { ...inputs };
        newInputs[id].value = event.target.value;
        newInputs[id].touched = true;

        //vérification de la valeur
        newInputs[id].valid = checkValidity(event.target.value, newInputs[id].validation);

        setInputs(newInputs);

        //vérification du formulaire
        let formIsValid = true;
        for (let input in newInputs) {
            formIsValid = newInputs[input].valid && formIsValid;
        }
        setValidIsOk(formIsValid);
    };

    //-------------------------------SLUG-----------------------------------//

    //    const generateSlug = str => {
    //         str = str.replace(/^\s+|\s+$/g, ''); // trim
    //         str = str.toLowerCase();

    //         // remove accents, swap ñ for n, etc
    //         var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    //         var to   = "aaaaaeeeeiiiioooouuuunc------";

    //         for (var i=0, l=from.length ; i<l ; i++) {
    //             str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    //         }

    //         str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    //             .replace(/\s+/g, '-') // collapse whitespace and replace by -
    //             .replace(/-+/g, '-'); // collapse dashes

    //         return str;
    //     }

    //----------------------------------------------------------------------//

    //reload-refresh

    const refreshPage = () => {
        window.location.reload();
    }

    const formHandler = e => {
        e.preventDefault();

        // const slug = generateSlug(inputs.title.value);


        //ci-dessous on récupère toutes les informations du formulaire pour les envoyer à firebase
        const argonaute = {
            title: inputs.title.value,
            //  slug: slug
        };

        axios.post('/argonautes.json', argonaute)
            .then(response => {
                refreshPage();
                console.log(response);
                //navigate(routes.HOME, { replace: true });
            })
            .catch(error => {
                console.log(error)
            });
    }
    //------------------------------------------------------------------------//


    //2 Variables. Objectif: inputs => convertir l'objet entier en tableau
    const formElementsArray = [];
    for (let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key] //on extrait tout l'ensemble contenu pour éviter en cas d'ajouts futur de devoir repréciser value, label et autre si changements etc
        });
    }

    //3 On peut à présent utiliser un tableau - au passage on appelle formHandler pour le prevent Default
    let form = (
        <form className={AddMembersCss.AddMembers} onSubmit={(e) => formHandler(e)}>
            {formElementsArray.map(formElement => (

                <Input
                    key={formElement.id} //réservé a React
                    id={formElement.id}
                    value={formElement.config.value}
                    label={formElement.config.label}
                    type={formElement.config.elementType}
                    config={formElement.config.elementConfig}
                    validFilling={formElement.config.valid}
                    errorMessage={formElement.config.errorMessage}
                    touched={formElement.config.touched}
                    changed={(e) => inputChangedHandler(e, formElement.id)} //active le formulaire
                />

            ))}
            <div className={AddMembersCss.submitBox}>
                <div className={AddMembersCss.submit}>
                    <input type="submit" value="Envoyer" disabled={!validIsOk} />
                </div>
            </div>
        </form>
    );

    //l163 - La pseudo-classe :disabled dans le module css est bien lié à disabled={!validIsOk}

    return (
        <div className={AddMembersCss.formContainer}>
            <div className={AddMembersCss.title}>
                <p>Ajouter un(e) Argonaute</p>
            </div>

            <div className={AddMembersCss.AddMembers}>
                {form}
            </div>
        </div>

    )
}


