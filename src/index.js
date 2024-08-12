import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Appv1';
// import Star from './starrating';
// import Expander from './textexpander';'
//import Map from './geolocate';
import './textexpander.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

reportWebVitals();
/*
<>
    < Expander />
    <Star maximumrating={5} messages={["terrible","Bad", "Okay","Good","Amazing"]}/>
    <Test/>
    </>



    function Test({onsetstars}){
  const [numstars,setnumstars]=useState(0);
  return(
    <div>
      
      <Star color='blue' onsetstars={setnumstars}/>
      <p>The Movie Was rated {numstars} stars</p>
    </div>
  );
}
*/