import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
     <h3>Welcome to Chill Zone</h3>
      <img className="abtImages" src="cat.jpg" alt="" />
      <p>
        Chill Zone is a safe space for you to express your thoughts without any
        judgement!
      </p>

      <br />
      <img className="abtImages" src="city.jpg" alt="" />
      <br />
      <p>"The only impossible journey is the one you never begin." </p>

      <img className="abtImages" src="anime.jpg" alt="anime" />
      </div>
    </>
  );
}

export default Home;
