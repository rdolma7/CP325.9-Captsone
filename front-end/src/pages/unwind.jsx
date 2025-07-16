import NavBar from "../components/NavBar";
function Unwind() {
    return ( 
        <> 
        <NavBar />
        <h3>WELCOME TO UNWIND</h3>
        <video src="https://www.youtube.com/embed/huTTxXPj2gY?si=Pb1ITJYFPNf6Vj3p&autoplay=1"></video>
          <iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
     );
}

export default Unwind;