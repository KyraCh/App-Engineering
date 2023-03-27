import React, { useEffect, useState } from "react";


import {Link} from 'react-router-dom';


function Home() {
  return( 
    // so here i set the color, and height so that it takes the whole viewpoint, not sure if this is good though
  <div style={{ backgroundColor: "#F1F4F5" ,  height: '100vh', width: '100vw' }}>
         <img style={{marginLeft:"1200px", paddingTop: "30px"}} src="images/NHSlogo.png"/> 
         <h5 style={{marginLeft:"1200px"}}>Providing NHS Service</h5>
        <h2 style={{ textAlign: "center", paddingTop: "30px" }}>  
        Are you a clinician/physiotherapist or a game developer?
        </h2>

        <div className="btn-container">
          <Link to="/login" className="btn btn-primary">Clinician</Link>
          <img src="images/doctor-nurse-image.png"/>
          <Link to="/api" className="btn btn-primary">Developer</Link>
        </div>

  </div>);

}

export default Home;
