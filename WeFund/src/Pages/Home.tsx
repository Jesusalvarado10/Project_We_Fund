import NavBar from '../Pages/NavBar'
import foto from '../assets/fotos.jpg'

function Home() {
    return (
      <>
        <NavBar />
        <img src={foto} alt="background" className="fixed top-0 left-0 w-screen h-screen z-[-1] object-cover" />
      </>

    );
  }
  
export default Home
  