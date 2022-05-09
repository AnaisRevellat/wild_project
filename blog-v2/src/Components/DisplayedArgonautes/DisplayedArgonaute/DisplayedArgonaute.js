//Librairies
import React from "react";
import { useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';
import axios from '../../../config/axios-firebase';
import ArgonauteCss from './DisplayedArgonaute.module.css';


export default function DisplayedArgonaute(props) {
  const refreshPage = () => {
    window.location.reload();
  }

  //Fonctions
  //const navigate = useNavigate(); //petite redirection après suppression d'un article
  const deleteClickedHandler = () => {

    axios.delete('/argonautes/' + props.argonaute.id + '.json')
      .then(response => {
        refreshPage();
        //navigate(routes.HOME, { replace: true });  
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className={ArgonauteCss.decoration}>
      <div className={ArgonauteCss.DisplayedArgonaute} id={props.argonaute.id}>
        <h2>{props.argonaute.title}</h2>

        <div className={ArgonauteCss.btn}>
          <button onClick={deleteClickedHandler}>Supprimer</button>
        </div>

      </div>
    </div>
  )
}
