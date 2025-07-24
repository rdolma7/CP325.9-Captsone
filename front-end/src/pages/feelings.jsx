import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";

function Feelings() {
  const [selectedItem, setSelectedItem] = useState("");
  const [moodData, setMoodData] = useState(null);

  const moodMap = { /*moodMap  */
    sad: {
      url: "https://www.youtube.com/embed/RUP-S0WhP6w",
      text: "Sadness, a common human emotion, can be profound and isolating, but also a source of strength and empathy.",
      quote:
        "The walls we build around us to keep sadness out also keep out the joy.",
    },
    anxious: {
      url: "https://www.youtube.com/embed/fHxZBvUKe3U",
      text: "Anxiety is a feeling of unease, worry or fear that can be accompanied by physical symptons such as increased heart rate, sweating and difficulty concentrating.",
      quote:
        "Take some breaths and relaz. Be mindful of any tension, uneasiness, or worry. Step back from any anxiety and observe it.",
    },
    guilty: {
      url: "https://www.youtube.com/embed/SlPhMPnQ58k",
      text: "Guilt is an unpleasant feeling that arises from a perceived transgression",
      quote:
        "A guilty conscience needs to confess. A work of art is a confession.",
    },
    lonely: {
      url: "https://www.youtube.com/embed/cwLRQn61oUY",
      text: "Loneliness is the feeling of sadness or distress that arises from the perceived lack of meaningful social connections or from the feeling of being disconnected from others, even when surrounded by people.",
      quote:
        "Sometimes, you just need a break. In a beaufitul place. Alone. To figure everything out.",
    },
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (selectedItem in moodMap) {
      setMoodData(moodMap[selectedItem]);
    } else {
      setMoodData(null);
    }
  };

  return (
    <>
      <NavBar />
      <div className="feelingContainer">
      <h3>Emotions</h3>
      <div className="dropdown-container">
        <form onSubmit={handleClick} className="dropdown-form">
          <label htmlFor="feeling"  className="emotionSelection labelUnwind">
            How are you feeling today?
          </label>
          <select
            onChange={(event) => setSelectedItem(event.target.value)}
            required
            value={selectedItem}
            className="emotionSelection"
          >
            <option disabled value="" hidden>
              Please select one
            </option>
            {Object.keys(moodMap).map((mood) => (
            
              <option className="feelingDropdown" key={mood} value={mood}>
                {mood} {/* this will load the mood dropdown */}
              </option>
         ) )}
          </select>
          <button className="emotionSelection" type="submit">Enter</button>
        </form>
      </div>
      {moodData && (
        <div className="mediaDisplay">
          <iframe
            width="560"
            height="315"
            src={`${moodData.url}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="emotionQuote">"{moodData.quote}"</p>
          <blockquote className="emotionText">{moodData.text}.</blockquote>
        </div>
      )}
      </div>
    </>
  );
}

export default Feelings;
