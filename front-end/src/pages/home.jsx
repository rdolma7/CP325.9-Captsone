import NavBar from "../components/NavBar";

function Home() {
    return (
        <>  
        <NavBar />
        <div className="homePage"> 
        <img src='../src/images/journalPPage.jpg' alt="screenshots" />
        <img src= '../src/images/unwindd.jpg' alt="screenshots" />
        <img src= '../src/images/AboutUs.png' alt="screenshots" />
        </div>
        </>
      );
}

export default Home;