
import fotos from '../../assets/fotos.jpg';


function Home() {
    return (
      <>
        <div className="fixed top-0 left-0 w-full z-10">

        </div>
        <img src={fotos} alt="background" className="fixed top-0 left-0 w-screen h-screen z-[-1] object-cover" />
        <div className="relative z-10" style={{ marginTop: '100vh', backgroundColor: 'white' }}>
            <h1>Tu texto aquí</h1>
            <h2>Hola</h2>
            <h1>Tu texto aquí</h1>
            <h2>Hola</h2>
            <h1>Tu texto aquí</h1>
            <h2>Hola</h2>
            <h1>Tu texto aquí</h1>
            <h2>Hola</h2>
        </div>
      </>
    );
}
  
export default Home
  