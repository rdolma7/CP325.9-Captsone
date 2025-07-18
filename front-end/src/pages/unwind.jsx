import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
import BackgroundMusicPlayer from "../components/BackgroundMusic";

function Unwind() {
  const [volume, setVolume] = useState(0.1);
  const [selectedItem, setSelectedItem] = useState(
    "How are you feeling today?"
  );

  const handleChange = (e) => {
    console.log(e.target.value);
    setVolume(e.target.value);
  };

  console.log(volume);
  return (
    <>
      <div className="unwind">
        <NavBar />
        <h3>WELCOME TO UNWIND</h3>
        <div className="dropdown-container">
          <>
            <label className="dropdown-menu">{selectedItem}</label>
            <select required>
              <option disabled selected hidden>
                Please select one
              </option>
              <option className="feelingDropdown" value="happy">Happy</option>
              <option className="feelingDropdown" value="sad">Sad</option>
              <option className="feelingDropdown" value="guilty">Guilty</option>
              <option className="feelingDropdown" value="anxious">Anxious</option>
              <option className="feelingDropdown" value="lonely">Lonely</option>
            </select>
          </>
        </div>
        <img
          className="beach-img"
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZzdWs5aGxwNWFrcXBwd3A1cDY4NmY4NHJ4MHBnNTlxZTB0NTRxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTEQrKe1bBPcDdKKtA/giphy.gif"
          alt="beach"
        />
        <BackgroundMusicPlayer volume={volume} />
        <input
          type="range"
          onChange={handleChange}
          value={volume}
          min="0"
          max="100"
        />
      </div>
    </>
  );
}

export default Unwind;
