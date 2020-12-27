import React from 'react';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';

// import AbsoluteWrapper from "./../components/Home";

const Home:React.FC = () => {
    return (
        // <AbsoluteWrapper>
        <div className="home-div">
            <h1>Welcome to Space X Launches</h1>
            
             <Typist>
           <p>
        “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
         <br/>
         <Typist.Delay ms={500} />
-Elon Musk
 </p>
</Typist>
 <div className="center">
     <NavLink to="/missions">
      <button className="btn">
        <svg   viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>LAUNCH ME</span>
      </button>
      </NavLink>
    </div>
</div>
 
     
     
    )
}
export default Home