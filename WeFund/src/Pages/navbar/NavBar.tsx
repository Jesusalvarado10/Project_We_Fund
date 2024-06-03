import { useNavigate } from "react-router-dom";
import { homeURL } from "../../constants/url";
import { useAuth } from "../../context/contex";
import "./NavBar.css"
export function NavBar() {
  const navigate = useNavigate();
  const { user,logout } = useAuth()


  return (
    <nav className="bg-green-500 text-white px-4 py-2 flex justify-between items-center md:px-8 md:py-4">
      <a href="/" className="text-2xl font-bold md:text-3xl">
        WeFund
      </a>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-300">
          Quienes somos
        </a>
        <a href="#" className="hover:text-gray-300">
          Donar
        </a>
        <a href="#" className="hover:text-gray-300">
          Iniciar sesion
        </a>        
        <a href="#" className="hover:text-gray-300">
          Registrarse
        </a>

      </div>
      <div className="relative">
        <input
          type="text"
          className="bg-white text-green-500 px-4 py-2 rounded-full md:px-6 md:py-3 focus:outline-none"
          placeholder="Buscar"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar