import NavBar from "../components/NavBar";
import React from "react";
import { useState } from "react";
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
    <div className="unwind">
      <NavBar />
      <h3>WELCOME TO UNWIND</h3>
      <div className="dropdown-container">
        <button onClick={toggleDropDown} className="dropdown-toggle">
          {selectedItem}
        </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={()=>handleItemClick('Option 1')}>Happy</li>
          <li onClick={()=>handleItemClick('Option 2')}>Sad</li>
          <li onClick={()=>handleItemClick('Option 3')}>Guilty</li>
          <li onClick={()=>handleItemClick('Option 4')}>Anxious</li>
          <li onClick={()=>handleItemClick('Option 5')}>Lonely</li>
        </ul>
      )}
      </div>
      <img className="beach-img" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZzdWs5aGxwNWFrcXBwd3A1cDY4NmY4NHJ4MHBnNTlxZTB0NTRxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTEQrKe1bBPcDdKKtA/giphy.gif" alt="beach" />
    </div>
  );
}

export default Unwind;
