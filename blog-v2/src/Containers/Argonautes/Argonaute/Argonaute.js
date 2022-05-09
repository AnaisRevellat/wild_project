//Librairies
import React, { useState, useEffect } from "react";
import axios from '../../../config/axios-firebase';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import ArgonauteBySlug from './Argonaute.module.css';

export default function Argonaute(props) {

    const { slug } = useParams();
    //console.log(slug);     //console.log(props);

    const [searchParams] = useSearchParams();
    const { state } = useLocation();

    //State
    const [argonaute, setArgonaute] = useState({});

    //ComponentDidMount
    useEffect(() => {

        // axios.get() '/articles?orderBy="slug"&equalTo="' + props.match.params.id + '"'
        axios.get('/argonautes.json/?orderBy="slug"&equalTo="' + slug + '"')
            .then(response => {

                for (let key in response.data) {
                    setArgonaute({
                        ...response.data[key],
                        id: key
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    let date = new Date(argonaute.date).toLocaleDateString('fr-FR');

    return (

        <div className="container">
            <h1>{argonaute.title}</h1>
        </div>

    );

}