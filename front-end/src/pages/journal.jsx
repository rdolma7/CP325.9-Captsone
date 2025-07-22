import { useState } from "react";
import NavBar from "../components/NavBar";
function Journal() {
  const [entry, setEntry] = useState("");
  const [name, setName] = useState("");

  async function handleSave(event) {
    event.preventDefault;
    try {
      const response = await fetch("http://localhost:3000/journal", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          content: entry,
          name: name,
        }),
      });
      setEntry("");
      setName("");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  return (
    <>
      <NavBar />
      <h2>Journal Entry</h2>
      Name:{" "}
      <input
        type="name"
        onChange={(event) => setName(event.target.value)}
        value={name}
        className="journalName"
      />
      <br />
      <textarea
        value={entry}
        onChange={(event) => setEntry(event.target.value)}
        name="entry"
        id="journalEntry"
      ></textarea>
      <br />
      <button onClick={handleSave} className="btnJournal">
        Save
      </button>
    </>
  );
}

export default Journal;
