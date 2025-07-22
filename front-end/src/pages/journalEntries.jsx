import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function JournalEntries() {
  const [journals, setJournals] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch("http://localhost:3000/journal");
    const data = await response.json();
    setJournals(data);
  }
  return (
    <>
      <NavBar />
      <div>
        {journals.map((journal) => (
          <div className="allEntries">
            <h5>{journal.name} entered: </h5>
            {journal.content}
          </div>
        ))}
      </div>
    </>
  );
}
export default JournalEntries;
