
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Donatenow.css';
import Donatenowimage from '../assets/truekeeper-assets/hm-pix.jpg';
import guylog from '../assets/truekeeper-assets/guychild-log.jpg';
import gentleman from '../assets/truekeeper-assets/gentleman.jpg';
import gentleLady from '../assets/truekeeper-assets/yellw-tp-braid.jpg';
import kidshuttle from '../assets/truekeeper-assets/kid-backpack.jpg';
import splash from '../assets/truekeeper-assets/kidsplash.jpg';
import guychild from '../assets/truekeeper-assets/guynchild.jpg';
import lapy from '../assets/truekeeper-assets/pcwman.jpg';
import teach from '../assets/truekeeper-assets/children_writing.jpg';
import kidsplenty from '../assets/truekeeper-assets/schl-kid.jpg';
import text from '../assets/truekeeper-assets/pure-relig-text.jpg';
import text2 from '../assets/truekeeper-assets/pure-relig-yellw.jpg';
import rangekid from '../assets/truekeeper-assets/boy_alone.png';
import wall from '../assets/truekeeper-assets/women_handonwall.jpg';
import {BsLinkedin} from "react-icons/bs"

const DonateNow = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    // Here, you can use the form values (fullName, phoneNumber, email, comments)
    // for further processing or send them to a server.
    console.log('Submitted:', fullName, phoneNumber, email, comments);
  };

  return (
    <div className='home'>
      <div className='headercontainer' style={{ backgroundImage: `url(${Donatenowimage})`,   backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px'}}>
        <h1>GET TO KNOW TRUEKEEPERS</h1>
      </div>

      <section>
        <div className="aboutit">
         <img src={guylog} alt='img'/>
         <div className="aboutit-text">
           <h3> WE TAKE DONATIONS TO WHERE THEY ARE MOST NEEDED</h3>
           <p> Truekeepers is a non-profit organization that supports local NGOs in Nigeria with <br/>access to funding,
           resources and visibility to successfully implement and scale their<br/> projects in the communities they operate. 
           We do this by connecting vetted local NGOs<br/> with individuals, corporates and donor agencies who are looking 
           to give to charitable <br/>projects in a way that drives transparency, accountability and trust for all the <br/>
           stakeholders involved.
               
           At Truekeepers, we believe that by taking donations to the places were they can make<br/> the most difference,
           we can close the needs gap in Africa.</p>
           <button>JOIN THE CAUSE</button>
         </div>
       </div>
    </section>
    <section>
      <div className='vision'> 
       <div className='mission'>
         <h3> Our Vision</h3>
         <p> To amplify the giving culture in Africa and bring<br/>visibility to those who are most in need.</p>
         </div> 
       <div className='mission'>
         <h3> Our Mission</h3>
         <p> To build a bridge that connects those who have to<br/>those in need.</p>
       </div> 
       </div> 
    </section>
    <section>
        <div className="founders1">
          <div className="founders">
           <h3> A MESSAGE FROM OUR FOUNDERS</h3>
           </div>
         
         <div className="founders-text">
           
           <p> Over the years, we have had the honour of meeting people who have<br/> dedicated their lives to serving the poor, helpless and most vulnerable people
           <br/> in communities aacross Nigeria through their charities.<br/>We've seen children take off the streets and given a home and an education.<br/>
            We've seen indigent accident victims and pregnant women recieve prompt and quality medical care.<br/> While people typically think of giving to charity only
            in terms of money, we have seen charity needs <br/>vary from as little as tioiletries, bedsheets and mattresses to tutors, lawyers and medical personnel.<br/>
           The big question we have asked ourselves over the years are how do we bring <br/> attention to the work that charities are doing across Nigeria in a way that<br/>
            enables them to access the support and funding they need?<br/> How do we connect givers to charity causes they are passionate about while inspiring <br/>
            confidence that their support will actually make an impact?<br/>
            These questions and more birthed the idea that is TrueKeepers.<br/> We hope in creating this platform that we can amplify the giving culture<br/>
            that exists in Africa where we are known to value community <br/>and be our brother's keepers. Whether a person chooses to sacrifice their time,<br/>
           donate a shoe or give money to those in need, we want people <br/>to see how their acts of kindness can make a huge impact in someone else's life.<br/>
           Indeed,  Africans and Africa will rise as we lift each other. <br/>It is our hope that TrueKeepers will be a catalyst to making this happen<br/>
           by inspiring a community that fosters "Ubuntu"- humanity to others.</p>
         </div>
       </div>
    </section>

    <section>
        <div className="founders2">
          <div className='founders4'>
            <h3>MEET THE FOUNDERS</h3>
          </div>
          <div className='guygirl'>
          <img src={gentleman} alt='img'/>
          <div className='ife'>
          <h4> Ife Oyedele</h4>
          <p>Co-Founder</p>
          <li>
              <a href="http://linkedin.com/kas_believe">
                <BsLinkedin />
              </a>
            </li>
          </div>
          <img src={gentleLady} alt='img'/>
           <div className='ife'>
          <h4> Chinenye Etonioru</h4>
          <p>Co-Founder</p>
          <li>
              <a href="http://linkedin.com/kas_believe">
                <BsLinkedin />
              </a>
            </li>
          </div>
          </div>
          <div className="founder3">
           <h3> HOW WE VET PROJECTS</h3>
         </div>
         
          <div className="founders2-text">
           
           <p> One of our core objectives as an organization is to bring trust to the giving process.<br/>
            This means that we want donors to be confident that their<br/>donations get to the beneficiaries and that they are used <br/>
            in the mannerand for the purpose for which they were intended. <br/>We go the extra mile to ensure
            that every project or NGO listed<br/>on this platform is vetted by our team for proven project impact,<br/>
            financial accountability, proper governance structure and transparency.<br/> We do this by conducting 
            onsite visit to the NGO premises, speaking to <br/>project beneficiaries and reviewing necessary documentation.<br/>
             In adition, NGO with projects listed on the platform will be required<br/> to send impact reports to donors twice a years<br/>
             to provide feedback on how their donations have made an impact. 
          </p>
           <button>READ MORE.</button>
         </div>
       </div>
    </section>
    <section>
      <div className='scroll-container'>
        <div className="pix">
         <img src={text2} alt='img'/>
         <img src={kidshuttle} alt='img'/>
         <img src={splash} alt='img'/>
         <img src={guychild} alt='img'/>
         <img src={lapy} alt='img'/>
         <img src={teach} alt='img'/>
         <img src={kidsplenty} alt='img'/>
         <img src={text} alt='img'/>
         <img src={rangekid} alt='img'/>
         <img src={wall} alt='img'/>
        
       </div>
       </div>
    </section>

    {/* <section> */}
      <div className='intext'>
          <h3>
            WANT TO GET IN TOUCH WITH US?<br/> OUR TEAM IS HAPPY TO ASSIST YOU
          </h3>
          <p>
            Ask about TrueKeepers, donations, NGOs or anything else. <br/>
            Our trained reps are standing by, ready to help.
          </p>

        </div>
     {/* </section>   */}
      <section>
       
        {/* Step 3: Add a form for login */}
        <form onSubmit={handleLoginSubmit}>
          <div className="login-container">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="Please leave your comments or messages here"
              value={comments}
              onChange={handleCommentsChange}
            />
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default DonateNow;
