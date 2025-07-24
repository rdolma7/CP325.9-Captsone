import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <h3>Welcome to Chill Zone</h3>
        <img className="abtImages" src="relax.jpg" />
        <p>
          Chill Zone is a safe space for you to express your thoughts without
          any judgement!
        </p>

        <br />
        <img className="abtImages" src="city.jpg" alt="" />
        <br />
        <p>"The only impossible journey is the one you never begin." </p>

        <img className="abtImages" src="anime.jpg" alt="anime" />

        <p>
          "Life moves pretty fast. If you don't stop and look around once in a
          while, you could miss it."
        </p>
        <img className="abtImages" src="cat.jpg" />

        <p>
          ""If we don't change, we don't grow. If we don't grow, we aren't
          really living."
        </p>
        <img className="abtImages" src="dog3.jpg" />

        <p>
          "If it's out of your hands, it deserves freedom from your mind too.”
        </p>
        <img className="abtImages" src="cat2.jpg" />
        <p>
          "Emotional pain is not something that should be hidden away and never
          spoken about. There is truth in your pain, there is growth in your
          pain, but only if it's first brought out into the open.”
        </p>
        <img className="abtImages" src="dog2.jpg" />
      </div>
    </>
  );
}

export default Home;
