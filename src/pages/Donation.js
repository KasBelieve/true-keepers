import React from 'react'
import "../styles/Donation.css";
import glasses from "../assets/truekeeper-assets/african_children_oneglasses.jpg";
import writing from "../assets/truekeeper-assets/children_writing.jpg";
import handwall from "../assets/truekeeper-assets/women_handonwall.jpg";
import holding from "../assets/truekeeper-assets/woman_carring_child.jpg";
import gap from "../assets/truekeeper-assets/dark_brownsmoke.jpg";
import contact from "../assets/truekeeper-assets/contact.jpg";

const Donation = () => {
  return (
    <div>
       <section>
        <div className="donation">
          <img src={glasses} alt='img'/>
          <div className="donation-text">
              <h3> How donation of items work</h3>
              <p> Donated items come into the TrueKeepers storage facility either through drop offs or <br/> pick-ups by our team.
               Donated items are inspected, sorted and labelled for distribution.<br/>
               Sorted items are matched to our vetted NGOs partners based on thier indicated<br/> needs and 
               then distributed to needy persons in the communities they serve.<br/>
               Our vetted NGO partners give us reports on how doneted items are making an <br/>impact.</p>
              
              <button>DONATE NOW</button>
          </div>
        </div>
      </section> 
      <section className='don'>
      <div className="donatecontainer">
        <img src={writing} alt='img'/>
       
          <h3>DONATE ITEMS</h3>
          <div className="donatecards">
            <div className="donatecard">
              <p>Donate new or pre-owned items(in good <br/>condition)
               to those in need, through our<br/> 
               network of vetted NGOs. </p>
              <button>GET STARTED</button>
            </div>

          </div>
        </div>
        <div className="donatecontainer">
        <img src={handwall} alt='img'/>
     
          <h3>DONATE MONEY</h3>
          <div className="donatecards">
            <div className="donatecard">
              <p>Donate money to verified charirty projects<br/>focused on
               improving the quality of life of needy<br/> 
               and vulnerable persons. </p>
               <button>GET STARTED</button>
            </div>

          </div>
        </div>
        <div className="donatecontainer">
          <img src={holding} alt='img'/>
       
          <h3>VOLUNTEER</h3>
          <div className="donatecards">
            <div className="donatecard">
              <p>Roll up your sleeves and volunteer your skills on<br/>charity
               drives, community outreaches and local<br/> 
               charities near you. </p>
               <button>GET STARTED</button>
            </div>

          </div>
        </div>

      </section>
    
        <div className='needsgap'>
    
            <div className='needscontainer' style={{backgroundImage:`url(${gap})`}}>
                <div className='needstext'>
                   <p>CONTACT US</p>
                    <h1> LET'S CLOSE THE NEEDS GAP</h1>
                   <p> DONATE | VOLUNTEER | SUPPORT </p>
                </div>
            </div>
            <div className='bverse'>
                <p> "Pure religion and undefiled before God and Father is this, to visit the fatherless <br/>
                <br/>and widows in there afflictions, and keep himself unspotted from the world"<br/>
               James 1:27</p>
            </div>
        </div>
        <div className='contact'>
            <img src={contact} alt='img'/>

        </div>
   </div>
  );
}

export default Donation