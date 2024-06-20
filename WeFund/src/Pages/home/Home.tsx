

import "./Home.css"   
import op2 from '../../assets/op2.png';

import HoverEffectModule from "../../components/cardFund";



function Home() {
  return (
    <>
     
      <div className="relative h-screen flex items-center justify-center z-0">
  <img src={op2} alt="background" className="absolute w-screen h-screen   " />
  {/* <div className="relative z-10 text-white text-center bg-black bg-opacity-70 p-4 rounded">
    "Si ayudo a una sola persona a tener esperanza, no habré vivido en vano."
  </div> */}

</div>
      <div>
      
      </div>
      <div className="absolute bg-green-500  w-full h-3/4 flex items-center justify-center rounded-lg" >
        <div className='grid grid-cols-2 gap-4  '>
       < HoverEffectModule></HoverEffectModule>
        </div>
      </div>
      
      
    </>
  );
}

export default Home


// <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '0.5rem' }}>
// <div className="grid grid-cols-5 items-center justify-center gap-4 py-2 md:py-3 px-4 md:px-8">

// <a href="#" className="flex flex-col items-center text-gray-700 group">
// <FontAwesomeIcon 
//   icon={faUserGraduate} 
//   className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
// />

// <span className="group-hover:text-blue-500 transition-colors duration-300">
//   Educación
// </span>
// </a>
// <a href="#" className="flex flex-col items-center text-gray-700 group">
// <FontAwesomeIcon icon={faHeartPulse} 
//   className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
// />

// <span className="group-hover:text-blue-500 transition-colors duration-300">
//   Salud
// </span>
// </a>

// <a href="#" className="flex flex-col items-center text-gray-700 group">
// <FontAwesomeIcon icon={faBurger} 
//   className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
// />

// <span className="group-hover:text-blue-500 transition-colors duration-300">
//   Alimentos
// </span>
// </a>
// <a href="#" className="flex flex-col items-center text-gray-700 group">
// <FontAwesomeIcon icon={faShirt}  
//   className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
// />

// <span className="group-hover:text-blue-500 transition-colors duration-300">
//   Vestimenta
// </span>
// </a>
// <a href="#" className="flex flex-col items-center text-gray-700 group">
// <FontAwesomeIcon icon={faFutbol} 
//   className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
// />

// <span className="group-hover:text-blue-500 transition-colors duration-300">
//   Deporte
// </span>
// </a>

// </div>
// </div>