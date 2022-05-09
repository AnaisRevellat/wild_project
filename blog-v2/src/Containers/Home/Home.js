//Librairies
import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';

//Components
import HomeCss from './Home.module.css';
import AddMembers from '../AddMembers/AddMembers';
import DisplayedArgonautes from '../../Components/DisplayedArgonautes/DisplayedArgonautes';


export default function Home(props) {

    //State
    const [argonautes, setArgonautes] = useState([]);

    //ComponentDidMount
    useEffect(() => {
        axios.get('/argonautes.json')
            .then(response => {

                const argonautesArray = [];

                for (let key in response.data) {
                    argonautesArray.push({
                        ...response.data[key],
                        id: key
                    });
                }
                argonautesArray.reverse();
                setArgonautes(argonautesArray);


            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className={HomeCss.HomeContainer}>
            <AddMembers />
            <DisplayedArgonautes argonautes={argonautes} />
        </div>
    )
}
