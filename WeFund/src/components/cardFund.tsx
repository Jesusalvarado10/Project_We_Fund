
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Replace '../path/to/bambi.jpg' with the actual path to the image file

const HoverEffectModule = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KfoExOZAILvoR7cEb4RtgpQE2qbcV3ZDfg&s"} alt="Background Image" className="transition duration-300 ease-in-out transform scale-100 hover:scale-300" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="relative z-10 p-4">
        {/* Encabezado de la tarjeta */}
        <div className="bg-green-600 rounded-t-xl py-2 px-4 text-center text-white">
          <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KfoExOZAILvoR7cEb4RtgpQE2qbcV3ZDfg&s"} alt="React Logo" className="max-w-full max-h-full" />
          </div>
          <h4 className="text-lg font-bold">React.JS</h4>
          <p className="text-sm">JavaScript Library</p>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="py-4">
          <p className="text-sm text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-sm text-gray-700">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>

        {/* Pie de la tarjeta */}
        <div className="bg-green-600 rounded-b-xl py-2 px-4 flex justify-between items-center">
          <ul className="flex space-x-4 text-white">
            <li><FontAwesomeIcon icon="heart" /></li>
            <li><FontAwesomeIcon icon="comment" /></li>
            <li><FontAwesomeIcon icon="share" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoverEffectModule;