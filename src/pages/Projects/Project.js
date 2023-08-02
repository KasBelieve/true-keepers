import React from 'react';
import "../../styles/Project.css";
import handimage from "../../assets/truekeeper-assets/bg_hand.jpg";

const Project = () => {
  return (
    <div className='project'>
        
        <div className='project2' style={{backgroundImage:`url(${handimage})`}}>
            <div className='project1'>
            <p> TrueKeepers connects givers to verified charity projects <br/> that are truely making an impact.</p> 
            <button> LEARN MORE</button>  
            </div>

          
            <div class="project3">
                <h4> Start supporting charity projects in 3 easy steps.</h4>
                <p> <button>01</button> Choose how you want to give; donate cash, items or<br/>volunteer you skills.</p>
              
                <p> <button>02</button> Search and choose specific categories of charity <br/>projects you want to give to
                ( e.g, education, health,<br/> displaced persons e.t.c) and how often you want to give.</p>
              
                <p> <button>03</button>Give to the charity project and give reports on how your<br/> donation has made an impact</p>
              
            </div> 
        </div>
    </div>
  );
}

export default Project