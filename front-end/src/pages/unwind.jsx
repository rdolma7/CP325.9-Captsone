import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
import BackgroundMusicPlayer from "../components/BackgroundMusic";

function Unwind() {
  const [volume, setVolume] = useState(0.05);
  const [selectedItem, setSelectedItem] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.value);
    setVolume(event.target.value / 100);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (selectedItem === "happy") {
      setVideoUrl("https://www.youtube.com/embed/0IfuDA1edcE");
    }
  };

  return (
    <>
      <div className="unwind">
        <NavBar />
        <h3>Time to Unwind and Relax</h3>
        <div className="dropdown-container">
          <>
            <label className="dropdown-menu">How are you feeling today? </label>
            <select
              onChange={(event) => setSelectedItem(event.target.value)}
              required
              value={selectedItem}
            >
              <option disabled value="" hidden>
                Please select one
              </option>
              <option className="feelingDropdown" value="happy">
                Happy
              </option>
              <option className="feelingDropdown" value="sad">
                Sad
              </option>
              <option className="feelingDropdown" value="guilty">
                Guilty
              </option>
              <option className="feelingDropdown" value="anxious">
                Anxious
              </option>
              <option className="feelingDropdown" value="lonely">
                Lonely
              </option>
            </select>
            <button type="submit" onClick={handleClick}>
              Enter
            </button>
          </>
        </div>
        {videoUrl ? (
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            className="beach-img"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZzdWs5aGxwNWFrcXBwd3A1cDY4NmY4NHJ4MHBnNTlxZTB0NTRxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTEQrKe1bBPcDdKKtA/giphy.gif"
            alt="beach"
          />
        )}
        <BackgroundMusicPlayer volume={volume} />
        <input
          type="range"
          onChange={handleChange}
          value={volume * 100}
          min="0"
          max="100"
        />
      </div>
    </>
  );
}

export default Unwind;
