import NavBar from '../Pages/NavBar'
import fondo from '../assets/fondo.png'

function Home() {
    return (
      <>
        <NavBar />
        <img src={fondo} alt="background" className="fixed top-0 left-0 w-screen h-screen z-[-1] object-cover" />
      </>
    );
  }
  
export default Home
  