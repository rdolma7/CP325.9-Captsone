import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <h3>About Us</h3>
      <p>Welcome to Chill Zone!</p>
      <img className="abtImages" src="../src/images/cat.jpg" alt="" />
      <p>
        Chill Zone is a safe space for you to express your thoughts without any
        judgement!
      </p>

      <br />
      <img className="abtImages" src="../src/images/city.jpg" alt="" />
    </>
  );
}

export default About;
