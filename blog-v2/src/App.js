//Librairies
import React from 'react';
import './App.css';
import "@fontsource/roboto";
import { Routes, Route } from 'react-router-dom'; //Navigate
import routes from './config/routes';

//Composants
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';

//import Articles from './Containers/Articles/Articles';
import Argonaute from './Containers/Argonautes/Argonaute/Argonaute';
import Argonautes from './Containers/Argonautes/Argonautes';


export default function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route end path={routes.ARGONAUTES} element={<Argonautes />} />
          <Route end path={routes.ARGONAUTES + "/:slug"} element={<Argonaute />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>

    </div>
  );
}



