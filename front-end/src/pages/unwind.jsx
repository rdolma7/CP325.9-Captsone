import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
import BackgroundMusicPlayer from "../components/BackgroundMusic";

function Unwind() {
  const [volume, setVolume] = useState(0.05);
  const [selectedItem, setSelectedItem] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);

  const moodMap = {
    sad: "https://www.youtube.com/embed/RUP-S0WhP6w",
    anxious: "https://www.youtube.com/embed/fHxZBvUKe3U",
    guilty: "https://www.youtube.com/embed/SlPhMPnQ58k",
    lonely: "https://www.youtube.com/embed/cwLRQn61oUY",
  };

  const handleChange = (event) => {
    setVolume(event.target.value / 100);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (selectedItem in moodMap) {
      setVideoUrl(moodMap[selectedItem]);
    } else {
      setVideoUrl(null);
    }
  };

  return (
    <>
      <div className="unwind">
        <NavBar />
        <h3>Time to Unwind and Relax</h3>
        <div className="dropdown-container">
          <form onSubmit={handleClick} className="dropdown-form">
            <label htmlFor="feeling">How are you feeeling today?</label>
            <select
              onChange={(event) => setSelectedItem(event.target.value)}
              required
              value={selectedItem}
            >
              <option disabled value="" hidden>
                Please select one
              </option>
              <option className="feelingDropdown" value="sad">
                Sad
              </option>
              <option className="feelingDropdown" value="anxious">
                Anxious
              </option>
              <option className="feelingDropdown" value="guilty">
                Guilty
              </option>
              <option className="feelingDropdown" value="lonely">
                Lonely
              </option>
            </select>
            <button type="submit">Enter</button>
          </form>
        </div>
        <div className="media-display">
          {videoUrl ? (
            <iframe
              width="560"
              height="315"
              src={`${videoUrl}?autoplay=1`}
              title="YouTube video player"
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
        </div>
        <BackgroundMusicPlayer volume={volume} />
            <div className="volume-control">
              <label htmlFor="volume">Sound Volume <volume></volume></label>
        <input
          type="range"
          onChange={handleChange}
          value={volume * 100}
          min="0"
          max="100"
        />
      </div>
      </div>
    </>
  );
}

export default Unwind;
