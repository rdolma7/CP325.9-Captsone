import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const BASE_URL=import.meta.env.VITE_BASE_URL

function JournalEntries() {
  const [journals, setJournals] = useState([]);
  /* this useEffect will run the getData function as long as there's a change on the page */
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch(BASE_URL+ "/journal");
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
