
import React, {useState} from "react";
import logo from "../assets/truekeeper-assets/real-logo.png"
import{ Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";


const Navbar = () => {
 const [openLinks, setOpenLinks]= useState(false);
 const toggleNavbar =() =>{
 setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
        <div className='leftside' id={openLinks ? "open" : "close"}>
          <div className='leftside-text'>
          <h3> TrueKeepers</h3>
          <p> ..closing the needs gap in Africa</p>
          </div>
          <img src={logo} alt='img'/>
          <div className="hiddenLinks">
          <Link to="/about"> ABOUT</Link>
          <Link to="/donate">DONATE</Link>
          <Link to="/projects"> PROJECTS</Link>
          <Link to="/login"> LOGIN</Link>
          <Link to="/sign-up"> SIGN UP</Link>
          <Link to="/donate-now"> DONATE NOW</Link>
          </div>
       
        </div>
        <div className='rightside'>
          <Link to="/about"> ABOUT</Link>
          <Link to="/donate">DONATE</Link>
          <Link to="/projects"> PROJECTS</Link>
          <Link to="/login"> LOGIN</Link>
          <Link to="/sign-up"> SIGN UP</Link>
          <Link to="/donate-now"> DONATE NOW</Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon/>
          </button>
          </div>  
    </div>
  );
}

export default Navbar