import NavBar from "../components/NavBar";
function Journal() {
    return (
        <>  
        <NavBar />
        <h2>Journal Entry</h2>
        <textarea name="entry" id="journalEntry"></textarea>
        <br />
        <button className="btnJournal">Share</button>
        </>
      );
}

export default Journal;