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
      <div className="allEntries">
      {journals.map((journal) => (
        <div>
         <table>
          <tr>
         <td>{journal.name}
         {journal.content}
         </td>
         </tr>  
         </table>
        </div>
      ))}
      </div>

    </>
  );
}
export default JournalEntries;
