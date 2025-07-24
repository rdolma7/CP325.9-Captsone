import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
import BackgroundMusicPlayer from "../components/BackgroundMusic";



function Unwind() {  
  const [volume, setVolume] = useState(0.10);

  return (
    <>
      <div className="unwind">
        <NavBar />
        <h3>Time to Unwind and Relax</h3>

        <div>
          <img className="beach" src="calm.gif" alt="beach" /><br />
          {/* volume is being passed as a prop */}
          <BackgroundMusicPlayer volume={volume} />
        </div>

      
          <img className="beach-img" src="sunset.jpg" />
          <img className="beach-img" src="bridge.jpg"  />
          <img className="beach-img" src="painting.jpg"  />
          <img className="beach-img" src="reflection.jpg"  />
          <img className="beach-img" src="stones.jpg" />
          <img className="beach-img" src="boat.jpg" />
        
      </div>
    </>
  );
}

export default Unwind;
