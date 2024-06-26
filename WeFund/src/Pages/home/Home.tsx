import { useState, useEffect } from "react";
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

  interface Foundation {
    id: string;
    tittle: string;
    description: string;
    banner: string;
    type: string;
  }
  const [location, setLocation] = useState<string>("");
  const [currentFundacion, setCurrentFundacion] = useState(0);
  const centerVenezuela: [number, number] = [6.4238, -66.5897];
  const defaultZoom: number = 80;
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const handlePrev = () => {
    setCurrentFundacion((prev) => ((prev) === 0 ? fundaciones.length - 1 : prev - 1));
  };
  const [data1, setData1] = useState<Foundation[]>([]);
  const [foundations, setFoundations] = useState<Foundation[]>([]);
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

  useEffect(() => {
    fetchFoundations();
  }, []);

  const fetchFoundations = async () => {
    try {
      const response = await fetch('https://project-we-fund-logic2-0.onrender.com/fundaciones');
      if (!response.ok) {
        throw new Error('Error fetching foundations');
      }
      const data = await response.json();
      setData1(data.fundaciones);
      setFoundations(data.fundaciones);
    } catch (error) {
      console.error('Error fetching foundations:', error);
    }
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
    </div>
        <div className="relative  shadow-lg rounded-lg p-6 w-full max-w-4xl bg-green-500" >
          <div className="w-full h-3/4 flex items-center justify-center rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
            {foundations.map(foundation => (
            <div key={foundation.id} className="bg-white rounded-lg shadow-lg">
              <img src={foundation.banner} alt="" className="w-full h-32 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{foundation.tittle}</h3>
                <p>{foundation.type}</p>
              </div>
            </div>
          ))}
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



