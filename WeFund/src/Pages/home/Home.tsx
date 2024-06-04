import fotos from '../../assets/fotos.jpg';
import educationIcon from '../../assets/libro.png';
import healthIcon from '../../assets/latido-del-corazon.png';
import foodIcon from '../../assets/dieta.png';
import clothingIcon from '../../assets/ropa-limpia.png';
import logisticsIcon from '../../assets/deportes-con-balones.png';
import "./Home.css"   
import op2 from '../../assets/op2.png';
import bambi from '../../assets/bambi.png';

function Home() {
  return (
    <>
      <div className="bg-white shadow-md z-10 w-full" style={{ marginTop: '0.5rem' }}>
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
        <img src={op2} alt="background" className="w-screen h-screen object-cover" />   
      </div>
      <div>
        <div className="relative w-full text-center text-4xl font-bold text-black">
          "Si ayudo a una sola persona a tener esperanza, no habré vivido en vano."
        </div>
      </div>
      <div className="absolute bg-green-500" >
        <div className='grid grid-cols-2 gap-4'>
        <img src={bambi} alt="background" className="h-screen object-cover w-72 h-72"  />  
          <div>
          <h4>Hogares Bambi</h4>
          <h1>Hogar Bambi Darién inicia su labor el 8 de noviembre de 1999 con una cobertura de 15 niños y con una planta de cinco empleados para su atención, bajo la dirección por un año del señor Víctor Hugo Tirado en la sede ubicada en la Calle 11 No 10-38 de Calima El Darién Valle del Cauca – Colombia, donde funcionó por un espacio de dos años. El 17 de agosto de 2000 la señora Gladys Meneses asumió la dirección del Hogar.</h1>
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default Home