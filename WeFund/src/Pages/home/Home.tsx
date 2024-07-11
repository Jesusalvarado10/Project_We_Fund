import "./Home.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nationalURL } from "../../constants/url";
import { ideaURL } from "../../constants/url";
import op2 from '../../assets/op2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faHeartPulse, faBurger, faShirt, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { Foundation } from "../../Class/foundation";
import { getImageUrl } from "../../Firebase/auth";



const Home = () => {
  const navigate = useNavigate();
  const [data1, setData1] = useState<Foundation[]>([]);
  const [fundaciones, setFundaciones] = useState<Foundation[]>([]);

  useEffect(() => {
    fetchHome();
  }, []);

  const fetchHome = async () => {
    try {
      const response = await fetch('https://project-we-fund-a8vb.onrender.com/fundaciones');
      if (!response.ok) {
        throw new Error('Error fetching foundations');
      }
      const data = await response.json();
  
      const foundationPromises = data.fundaciones.map(async (foundation: any) => {
        const fundation = new Foundation(
          foundation.id,
          foundation.tittle,
          foundation.img,
          foundation.description,
          foundation.shortDescription,
          foundation.type,
          foundation.email,
          foundation.location
        );
        const photo = await getImageUrl(foundation.id, foundation.img);
        if (photo) {
          fundation.setPhoto(photo);
        }
        return fundation;
      });

      const resolvedFoundations = await Promise.all(foundationPromises);
      setFundaciones(resolvedFoundations);

    } catch (error) {
      console.error('Error fetching foundations:', error);
    }
  };


  return (
    <>
    <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '0.5rem' }}>
<div className="grid grid-cols-5 items-center justify-center gap-4 py-2 md:py-3 px-4 md:px-8">


  <a onClick={()=>{
    const url = `/type/Educación`
       navigate(url)
      
      }}   className="flex flex-col items-center text-gray-700 group">
    <FontAwesomeIcon 
      icon={faUserGraduate} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Educación
    </span>
  </a>
  <a onClick={()=>{
     const url = `/type/Salud` 
       navigate(url)
      
      }} className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faHeartPulse} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Salud
    </span>
  </a>

  <a  onClick={()=>{
    const url = `/type/Alimentos`
       navigate(url)
      
      }}  className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faBurger} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Alimentos
    </span>
  </a>
  <a  onClick={()=>{
    const url = `/type/Vestimenta`
       navigate(url)
      
      }}  className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faShirt}  
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Vestimenta
    </span>
  </a>
  <a  onClick={()=>{
    const url = `/type/Deporte`
       navigate(url)
      
      }}   className="flex flex-col items-center text-gray-700 group">
  <FontAwesomeIcon icon={faFutbol} 
      className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
    />
  
    <span className="group-hover:text-blue-500 transition-colors duration-300">
      Deporte
    </span>
  </a>

    </div>
  </div>
      <div className="relative h-screen flex items-start justify-center">
        <img src={op2} alt="background" className="absolute w-screen h-screen object-cover z-0 opacity-80" />
        <div className="relative z-10 text-white text-center bg-green-500 bg-opacity-100 p-4 rounded px-4 my-12">
          "Uniendo corazones, multiplicando impactos"
        </div>
      </div>


      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
  <div className="bg-white shadow-md rounded-lg p-6 my-10">
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Quiénes somos?</h2>
  <p className="text-gray-700 mb-4"> WeFund es una innovadora plataforma de crowdfunding diseñada específicamente para ayudar a fundaciones a recaudar fondos de manera efectiva y transparente.</p>
  <p className="text-gray-700 mb-4"> A través de WeFund, las fundaciones pueden crear campañas personalizadas, compartir sus historias y objetivos, y alcanzar a una amplia audiencia de potenciales donantes.</p>
  <p className="text-gray-700 mb-6">Para los donantes, WeFund proporciona una experiencia segura y transparente, permitiéndoles explorar diversas causas y realizar donaciones de forma sencilla.</p>
  <h5 className="text-xl font-bold text-gray-800 mb-6">¡Conoce quienes somos, nuestra misión, visión y valores!</h5>
  <button
    className="mt-4 bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-6 rounded transition duration-300"
    onClick={() => {
      navigate(ideaURL)
    }}
  >
    Ver más
  </button>
</div>
  </div>
</div>
<img
        src="https://www.fundacionmapfre.org/media/blog/fundaciones-comunitarias-1194x585-1.jpg"
        alt="quien image"
        className="w-full h-48 object-cover mb-4"
      />
      <div className="flex flex-col items-center mt-6">
      <div className="flex flex-col items-center mt-6">
  <h2 className="text-3xl text-center font-bold mb-8 text-gray-800">
  <span className="inline-block bg-green-500 text-white py-2 px-6 rounded-full shadow-lg">
    Algunas fundaciones
  </span>
  </h2>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {fundaciones.map(foundation => (
      <div key={foundation.id} className="bg-white rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300">
        <img src={foundation.photo} alt={foundation.tittle} className="w-full h-48 object-cover object-center rounded-t-lg" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-black mb-3">{foundation.tittle}</h3>
          <p className="text-gray-600 mb-6">{foundation.type}</p>
          <div className="mt-auto flex justify-between">
            <button
              className="bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded transition duration-300"
              onClick={() => {
                // Lógica para donar
              }}
            >
              Donar
            </button>
            <button
              className="bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded transition duration-300"
              onClick={() => navigate(`/fundations/${foundation.id}`)}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
    </div>
    
    </>
    
  );
}

export default Home;