import { useState } from "react";
import "./Home.css";
import op2 from '../../assets/op2.png';
import bambi from '../../assets/bambi.png';
import fundana from '../../assets/FUNDANA.jpg'
import aplav from '../../assets/aplav.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons/faHeartPulse';
import { faBurger } from '@fortawesome/free-solid-svg-icons/faBurger';
import { faShirt } from '@fortawesome/free-solid-svg-icons/faShirt';
import { faFutbol } from '@fortawesome/free-solid-svg-icons/faFutbol';
import { Map, Marker } from "pigeon-maps"
import PigeonMap from "../map/map";
import { getCoordinatesFromGoogleMapsLink } from "../../assets/funciones";

function Home() {
  const [location, setLocation] = useState<string>("");
  const [currentFundacion, setCurrentFundacion] = useState(0);
  const centerVenezuela: [number, number] = [6.4238, -66.5897];
  const defaultZoom: number = 80;
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const handlePrev = () => {
    setCurrentFundacion((prev) => ((prev) === 0 ? fundaciones.length - 1 : prev - 1));
  };
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setLocation(event.target.value);
  const coordinates = getCoordinatesFromGoogleMapsLink(event.target.value);
  if (coordinates) {
      setCoordinates([coordinates.latitude, coordinates.longitude]);
  } else {
      setCoordinates(null);
  }
};
  const handleNext = () => {
    setCurrentFundacion((prev) => (prev === fundaciones.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '0.5rem' }}>
        <div className="grid grid-cols-5 items-center justify-center gap-4 py-2 md:py-3 px-4 md:px-8">
          <a href="#" className="flex flex-col items-center text-gray-700 group">
            <FontAwesomeIcon 
              icon={faUserGraduate} 
              className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
            />
            <span className="group-hover:text-blue-500 transition-colors duration-300">Educación</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 group">
            <FontAwesomeIcon icon={faHeartPulse} 
              className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
            />
            <span className="group-hover:text-blue-500 transition-colors duration-300">Salud</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 group">
            <FontAwesomeIcon icon={faBurger} 
              className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
            />
            <span className="group-hover:text-blue-500 transition-colors duration-300">Alimentos</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 group">
            <FontAwesomeIcon icon={faShirt}  
              className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
            />
            <span className="group-hover:text-blue-500 transition-colors duration-300">Vestimenta</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 group">
            <FontAwesomeIcon icon={faFutbol} 
              className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
            />
            <span className="group-hover:text-blue-500 transition-colors duration-300">Deporte</span>
          </a>
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center">
        <img src={op2} alt="background" className="absolute w-screen h-screen object-cover z-0" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white-200">
      <div className="flex justify-center w-full max-w-4xl mb-4">
      <button onClick={handlePrev} className="bg-green-500 text-white px-10 py-2 rounded-full shadow-md mr-80" style={{ fontFamily: 'Kanit, sans-serif' }}>Anterior</button>
      <button onClick={handleNext} className="bg-green-500 text-white px-10 py-2 rounded-full shadow-md ml-80" style={{ fontFamily: 'Kanit, sans-serif' }}>Siguiente</button>
    </div>
        <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl" style={{ backgroundColor: fundaciones[currentFundacion].color }}>
          <div className="w-full h-3/4 flex items-center justify-center rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-10">
                <img src={fundaciones[currentFundacion].img} alt="background" className="w-72 h-72 ml-10" />
              </div>
              <div className="mr-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-4xl text-white">{fundaciones[currentFundacion].nombre}</h4>
                  <p className="text-white">{fundaciones[currentFundacion].descripcion}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="button mr-4">{fundaciones[currentFundacion].recaudado}</button>
                  <button className="button">Donar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
   
        </div>
       
      </div>
     Coloque el link de googlemaps <input type="text" value={location} onChange={handleChange}  />
      <div>
      {coordinates && (
          <div className="mt-4">
            <PigeonMap height={400} defaultCenter={coordinates} defaultZoom={defaultZoom} />
            
          </div>
        )}
        
          
   
   
      </div>
    </>
  );
}

export default Home;


const fundaciones = [
  {
    img: bambi,
    nombre: "Hogar Bambi Venezuela",
    descripcion: "En Hogar Bambi brindamos atención integral a niños y niñas de 0 a 18 años, en nuestras cinco casas ubicadas en San Bernardino. Trabajamos por la infancia en estado de vulnerabilidad, proporcionando un entorno seguro, respetuoso y amoroso, mientras restituimos sus derechos, trabajando con las familias y la comunidad.",
    recaudado: "$13.457,09 recaudados",
    color: "#4CAF50"
  },
  {
    img: fundana,
    nombre: "Fundana",
    descripcion: "Brindamos protección y acompañamiento a niños, niñas, mujeres y familias vulnerables. Nos aseguramos que cada niño sea reinsertado en un medio familiar seguro. Realizamos trabajo preventivo junto a las comunidades, atendiendo problemáticas familiares, alimentarias, de higiene y de violencia intrafamiliar...",
    recaudado: "$8.547,71 recaudados",
    color: "orange"
  },
  {
    img: aplav,
    nombre: "Amor Por Los Animales Venezuela (APLAV)",
    descripcion: "La idea de consolidar nuestra fundación surge de la necesidad de generar una serie de actividades en pro del bienestar animal con la finalidad de contrarrestar el maltrato hacia los mismos en todas sus formas, especialmente el abandono.",
    recaudado: "$5.201,34 recaudados",
    color: "#00CED1"
  },

]; // Coordenadas de Londres


