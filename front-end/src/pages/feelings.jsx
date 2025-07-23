import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";

function Feelings() {
  const [selectedItem, setSelectedItem] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);

  const moodMap = {
    sad: "https://www.youtube.com/embed/RUP-S0WhP6w",
    anxious: "https://www.youtube.com/embed/fHxZBvUKe3U",
    guilty: "https://www.youtube.com/embed/SlPhMPnQ58k",
    lonely: "https://www.youtube.com/embed/cwLRQn61oUY",
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
      <NavBar />
      <h3>How are you Feeling Today?</h3>
      <div className="dropdown-container">
        <form onSubmit={handleClick} className="dropdown-form">
          <label htmlFor="feeling" className="labelUnwind">
            How are you feeeling today?
          </label>
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
        {videoUrl && (
          <iframe
            width="560"
            height="315"
            src={`${videoUrl}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  );
}

export default Feelings;
