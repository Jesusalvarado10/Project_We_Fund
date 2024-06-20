

import "./Home.css"   
import op2 from '../../assets/op2.png';
import bambi from '../../assets/bambi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons/faHeartPulse';
import { faBurger } from '@fortawesome/free-solid-svg-icons/faBurger';
import { faShirt } from '@fortawesome/free-solid-svg-icons/faShirt';
import { faFutbol } from '@fortawesome/free-solid-svg-icons/faFutbol';



function Home() {
  return (
    <>
      <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '0.5rem' }}>
        <div className="grid grid-cols-5 items-center justify-center gap-4 py-2 md:py-3 px-4 md:px-8">
      
      <a href="#" className="flex flex-col items-center text-gray-700 group">
        <FontAwesomeIcon 
          icon={faUserGraduate} 
          className="text-4xl mb-2 group-hover:text-blue-500 transition-colors duration-300" 
        />
      
        <span className="group-hover:text-blue-500 transition-colors duration-300">
          Educación
        </span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-700 group">
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
  <img src={op2} alt="background" className="absolute w-screen h-screen object-cover z-0 " />
  {/* <div className="relative z-10 text-white text-center bg-black bg-opacity-70 p-4 rounded">
    "Si ayudo a una sola persona a tener esperanza, no habré vivido en vano."
  </div> */}

</div>
      <div>
      
      </div>
      <div className="absolute bg-green-500  w-full h-3/4 flex items-center justify-center rounded-lg" >
        <div className='grid grid-cols-2 gap-4  '>
        <div>
        <img src={bambi} alt="background" className="w-72 h-72 ml-40"/>
          </div>
          <div className="mr-20">
          <h4 className="text-4xl text-white">Hogar Bambi Venezuela</h4>
          <p>.</p>
          <h1 className = "text-white">En Hogar Bambi brindamos atención integral con enfoque sistémico a niños y niñas de 0 a 18 años, en nuestras cinco casas ubicadas en San Bernardino. Somos una organización que trabaja por la infancia en estado de vulnerabilidad, proporcionando un entorno seguro, respetuoso y amoroso, mientras restituimos sus derechos, trabajando con las familias y la comunidad.</h1>
          <p>.</p>
          <div>
          <button className='button mr-4'>$13.457,09 recaudados</button>
          <button className='button'>Donar</button>
        </div>
       
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default Home