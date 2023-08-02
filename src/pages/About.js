import React from "react";
import "../styles/About.css";
import aboutimage from "../assets/truekeeper-assets/dual_cuddling_mother.jpg"


const About = () => {
  return (
    <div>
      <section>
        <div className="containera">
          <h3>DONATE ITEMS</h3>
          <div className="cards">
            <div className="card">
              <p>Donate new or pre-owned items(in good <br/>condition)
               to those in need, through our<br/> 
               network of vetted NGOs. </p>
              <button>GET STARTED</button>
            </div>

          </div>
        </div>
        <div className="containera">
          <h3>DONATE MONEY</h3>
          <div className="cards">
            <div className="card">
              <p>Donate money to verified charirty projects<br/>focused on
               improving the quality of life of needy<br/> 
               and vulnerable persons. </p>
               <button>GET STARTED</button>
            </div>

          </div>
        </div>
        <div className="containera">
          <h3>VOLUNTEER</h3>
          <div className="cards">
            <div className="card">
              <p>Roll up your sleeves and volunteer your skills on<br/>charity
               drives, community outreaches and local<br/> 
               charities near you. </p>
               <button>GET STARTED</button>
            </div>

          </div>
        </div>

      </section>
      <section>
        <div className="aboutit">
          <img src={aboutimage} alt='img'/>
          <div className="aboutit-text">
              <h3> About Us</h3>
              <p> Truekeepers is a non-profit organization that supports local NGOs in Nigeria with <br/>access to funding,
              resources and visibility to successfully implement and scale their<br/> projects in the communities they operate. 
               We do this by connecting vetted local NGOs<br/> with individuals, corporates and donor agencies who are looking 
              to give to charitable <br/>projects in a way that drives transparency, accountability and trust for all the <br/>
              stakeholders involved.
                       
              At Truekeepers, we believe that by taking donations to the places were they can make<br/> the most difference,
              we can close the needs gap in Africa.</p>
              <button>READ MORE.</button>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default About;
