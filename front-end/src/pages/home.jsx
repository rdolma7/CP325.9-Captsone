import NavBar from "../components/NavBar";

function Home() {
    return (
        <>  
        <NavBar />
        <div className="homePage"> 
        <img src='journal.jpg' alt="screenshots" />
        <img src= 'unwind.jpg' alt="screenshots" />
        <img src= 'about-us.jpg' alt="screenshots" />
        </div>
        </>
      );
}

export default Home;