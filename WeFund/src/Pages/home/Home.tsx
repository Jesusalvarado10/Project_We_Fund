import "./Home.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nationalURL } from "../../constants/url";
import { ideaURL } from "../../constants/url";
import op2 from '../../assets/op2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faHeartPulse, faBurger, faShirt, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { saludURL } from "../../constants/url";
import { vestimentaURL } from "../../constants/url";
import { deporteURL } from "../../constants/url";
import { educacionURL } from "../../constants/url";
import { alimentosURL } from "../../constants/url";

interface Foundation {
  id: string;
  tittle: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  shortDescription: string;
  type: string;
  email: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [data1, setData1] = useState<Foundation[]>([]);
  const [home, setHome] = useState<Foundation[]>([]);

  useEffect(() => {
    fetchHome();
  }, []);

  const fetchHome = async () => {
    try {
      const response = await fetch('https://project-we-fund-logic2-0.onrender.com/fundaciones');
      if (!response.ok) {
        throw new Error('Error fetching foundations');
      }
      const data = await response.json();
      const home = data.fundaciones.filter(foundation => foundation.type = 'Salud', 'Educación', 'Alimentos', 'Vestimenta', 'Deporte');
      setData1(home);
      setHome(home);
    } catch (error) {
      console.error('Error fetching foundations:', error);
    }
  };


  return (
    <>
    <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '0.5rem' }}>
<div className="grid grid-cols-5 items-center justify-center gap-4 py-2 md:py-3 px-4 md:px-8">


  <a href={"#"} className="flex flex-col items-center text-gray-700 group">
    <FontAwesomeIcon 
      icon={faUserGraduate} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Educación
    </span>
  </a>
  <a onClick={()=>{
       navigate(saludURL)
      
      }} className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faHeartPulse} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Salud
    </span>
  </a>

  <a href="#" className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faBurger} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Alimentos
    </span>
  </a>
  <a href="#" className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faShirt}  
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Vestimenta
    </span>
  </a>
  <a href="#" className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faFutbol} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Deporte
    </span>
  </a>

    </div>
  </div>
      <div className="relative h-screen flex items-center justify-center">
        <img src={op2} alt="background" className="absolute w-screen h-screen object-cover z-0 opacity-70" />
        <div className="relative z-10 text-white text-center bg-green-500 bg-opacity-70 p-4 rounded">
          "Uniendo corazones, multiplicando impactos"
        </div>
      </div>


      <div class="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
  <div class="bg-white shadow-md rounded-lg p-6 my-10">
    <h2 class="text-2xl font-bold mb-4">¿Quiénes somos?</h2>

    <p>WeFund es una innovadora plataforma de crowdfunding diseñada específicamente para ayudar a fundaciones a recaudar fondos de manera efectiva y transparente.</p>
    <p>A través de WeFund, las fundaciones pueden crear campañas personalizadas, compartir sus historias y objetivos, y alcanzar a una amplia audiencia de potenciales donantes.</p>
    <p>Para los donantes, WeFund proporciona una experiencia segura y transparente, permitiéndoles explorar diversas causas, realizar donaciones de forma sencilla</p>
    <h5 class="font-bold">¡Conoce quienes somos, nuestra mision, vision y valores!</h5>
    <button
      class="mt-4 bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded"
      onClick={() => {
        navigate(ideaURL)
      }}
    >
      Ver mas
    </button>
  </div>
</div>
<img
        src="https://www.fundacionmapfre.org/media/blog/fundaciones-comunitarias-1194x585-1.jpg"
        alt="quien image"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="flex flex-col items-center mt-6">
      <div className="h-screen">
      <h2 class="text-2xl text-center font-bold mb-4">Algunas fundaciones</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {home.map(foundation => (
            <div key={foundation.id} className="bg-white rounded-lg shadow-lg">
              <img src={foundation.banner} alt="" className="w-full h-32 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{foundation.tittle}</h3>
               
                <button
                  className="mt-4 bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded"
                  onClick={() => {
                    navigate(nationalURL)
                  }}
                >
                  Donar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
    
  );
}

export default Home;