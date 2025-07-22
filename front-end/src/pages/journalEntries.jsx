import NavBar from "../components/NavBar";
function JournalEntries () {

async function getData() {
   const response = await fetch("http://localhost:3000/journal")
   const data= response.json()
}

    return ( 
        <>  
        <NavBar />
        {data}
        </>
     );
     
}
getData()
export default JournalEntries;