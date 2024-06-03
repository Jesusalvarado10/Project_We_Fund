import fotos from '../../assets/fotos.jpg';
import educationIcon from '../../assets/libro.png';
import healthIcon from '../../assets/latido-del-corazon.png';
import foodIcon from '../../assets/dieta.png';
import clothingIcon from '../../assets/ropa-limpia.png';
import logisticsIcon from '../../assets/deportes-con-balones.png';
import "./Home.css"

function Home() {
  return (
    <>
      <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '4rem' }}>
        <div className="grid grid-cols-5 items-center justify-center gap-4 py-2 md:py-3 px-4 md:px-8">
          <div className="flex flex-col items-center">
            <img src={educationIcon} alt="Educación" className="w-12 h-12" />
            <a href="#" className="hover:text-gray-300">Educación</a>
          </div>
          <div className="flex flex-col items-center">
            <img src={healthIcon} alt="Salud" className="w-12 h-12" />
            <a href="#" className="hover:text-gray-300">Salud</a>
          </div>
          <div className="flex flex-col items-center">
            <img src={foodIcon} alt="Alimentación" className="w-12 h-12" />
            <a href="#" className="hover:text-gray-300">Alimentación</a>
          </div>
          <div className="flex flex-col items-center">
            <img src={clothingIcon} alt="Vestimenta" className="w-12 h-12" />
            <a href="#" className="hover:text-gray-300">Vestimenta</a>
          </div>
          <div className="flex flex-col items-center">
            <img src={logisticsIcon} alt="Deporte" className="w-12 h-12" />
            <a href="#" className="hover:text-gray-300">Deporte</a>
          </div>
        </div>
      </div>
      <div className="relative z-10 h-screen flex items-center justify-center">
        <img src={fotos} alt="background" className="w-screen h-screen object-cover" />
        <div className="absolute w-full text-center text-4xl font-bold text-black">
          "Si ayudo a una sola persona a tener esperanza, no habré vivido en vano."
        </div>
      </div>
      <div className="relative z-10" style={{ marginTop: '100vh', backgroundColor: 'white' }}>
      </div>
    </>
  );
}

export default Home