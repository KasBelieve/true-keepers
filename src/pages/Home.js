import React from 'react';
import headerimage from "../assets/truekeeper-assets/bg_major.png";
import {Link} from "react-router-dom";
import "../styles/Home.css";
// import { Height } from '@mui/icons-material';
const Home = () => {
  return (
    <div className='home'  >
    
      <div className='headercontainer' style={{backgroundImage:`url(${headerimage})`}}>
        <h1> BE THE HANDS OF LOVE<br/> TO THOSE IN NEED</h1>
         <p> CHECK OUR LATEST PROJECTS OR CAUSES </p>
        <Link to="/Donation">
         <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  
  );
};

export default Home;
