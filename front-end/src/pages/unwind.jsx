import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
import BackgroundMusicPlayer from "../components/BackgroundMusic";

function Unwind() {
  const [volume, setVolume] = useState(0.10);

  const handleChange = (event) => {
    setVolume(event.target.value / 100);
  };

  return (
    <>
      <div className="unwind">
        <NavBar />
        <h3>Time to Unwind and Relax</h3>

        <div>
          <img className="beach" src="calm.gif" alt="beach" /><br />
          <BackgroundMusicPlayer volume={volume} />
        </div>

      
          <img className="beach-img" src="sunset.jpg" alt="" />
          <img className="beach-img" src="bridge.jpg" alt="" />
          <img className="beach-img" src="painting.jpg" alt="" />
        
      </div>
    </>
  );
}

export default Unwind;
