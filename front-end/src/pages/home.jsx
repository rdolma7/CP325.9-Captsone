import NavBar from "../components/NavBar";

function Home() {
    return (
        <>  
        <NavBar />
        <div className="homePage"> 
        <img src='./images/journal.jpg' alt="screenshots" />
        <img src= './images/unwind.jpg' alt="screenshots" />
        <img src= './images/about-us.jpg' alt="screenshots" />
        </div>
        </>
      );
}

export default Home;