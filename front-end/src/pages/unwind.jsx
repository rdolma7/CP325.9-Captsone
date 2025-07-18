import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
import BackgroundMusicPlayer from "../components/BackgroundMusic";

function Unwind() {
  const [isOpen, setIsOpen]=useState(false);
  const [selectedItem, setSelectedItem]=useState("How are you feeling today?")
  const toggleDropDown =()=>{
    setIsOpen(!isOpen);
  };
  const handleItemClick=(item=>{
    setSelectedItem(item);
    setIsOpen(false);
  })

 
  return (
    <>
    <div className="unwind">
      <NavBar />
      <h3>WELCOME TO UNWIND</h3>
      <div className="dropdown-container">
        <button onClick={toggleDropDown} className="dropdown-toggle">
          {selectedItem}
        </button>
      {isOpen && (
        <>
        <label className="dropdown-menu">{selectedItem}</label>
        <select required name="How are you feeling today?">
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="guilty">Guilty</option>
          <option value="anxious">Anxious</option>
          <option value="lonely">Lonely</option>
        </select>
        </>
      )}
      </div>
      <img className="beach-img" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZzdWs5aGxwNWFrcXBwd3A1cDY4NmY4NHJ4MHBnNTlxZTB0NTRxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTEQrKe1bBPcDdKKtA/giphy.gif" alt="beach" />
      <BackgroundMusicPlayer/>
    </div>
    </>
  );
}

export default Unwind;
