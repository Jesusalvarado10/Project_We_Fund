



import { ideaURL, loginURL, homeURL, searchURL, profileURL } from "../../constants/url";

import { useAuth } from "../../context/contex";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import PrivateRoute from "../../components/privatenavbar";
import PrivateRouteUser from "../../components/privateguest";
export function NavBar() {
  const navigate = useNavigate();
  const { user,logout } = useAuth()
  // const {color}=useAuth()
  // const [colorBg, setColorBg] = useState(`bg-${color}`)
 

  return (
    <div className="navbar bg-green-500 z-10">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
        <PrivateRouteUser>
      <li>
      <a onClick={()=>{
       navigate(loginURL)
      
      }}>Iniciar sesión</a>
       </li>
       </PrivateRouteUser>
       <li>
          <a>Donar</a>
          <ul className="p-2 text-black">
            <li><a>Educación</a></li>
            <li><a>Salud</a></li>
            <li><a>Alimentos</a></li>
            <li><a>Vestimenta</a></li>
            <li><a>Deporte</a></li>
            <li><a>...</a></li>
          </ul>
        </li>

          <li><a onClick={()=>{
       navigate(ideaURL)
      
      }}> ¿Quiénes somos? </a></li>
      </ul>
      </div>
      <a className="btn btn-ghost text-2xl text-white" onClick={()=>{
       navigate(homeURL)
      
      }}>WeFund</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1  z-[1] text-white  ">
      <PrivateRouteUser>
      <li>
      <a onClick={()=>{
       navigate(loginURL)
      
      }}>Iniciar sesión</a>
       </li>
       </PrivateRouteUser>
          
       <li>
        <details>
          <summary>Donar</summary>
          <ul className="p-3 text-black">
            <li><a onClick={()=>{
              const url = `/type/Educación`
              navigate(url)
         
            }}>Educación</a></li>
            <li><a
            onClick={()=>{
              const url = `/type/Salud` 
              navigate(url)}}
              >Salud</a></li>
            <li><a
                 onClick={()=>{
                  const url = `/type/Alimentos`
                  navigate(url)}}
                  >Alimentos</a></li>
            <li><a
                 onClick={()=>{
                  const url = `/type/Vestimenta`
                  navigate(url)}}
            >Vestimenta</a></li>
            <li><a
                 onClick={()=>{
                  const url = `/type/Deporte`
                  navigate(url)}}
            >Deporte</a></li>
            <li><a
             onClick={()=>{
              navigate(searchURL)}}
            >...</a></li>
          </ul>
        </details>
      </li>   
          
       
          <li><a onClick={()=>{
       navigate(ideaURL)
      
      }}> ¿Quiénes somos? </a></li>
      </ul>
    </div>
    <PrivateRoute>
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user && <img alt="Tailwind CSS Navbar component" src={user.icon} />}
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" onClick={()=>{
          navigate(profileURL)
         
         }}>
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={()=>{
          logout()
          navigate(homeURL)
         
         }}
        >Logout</a></li>
      </ul>
    </div>
    </div>
    </PrivateRoute>
  </div>
  );
}

export default NavBar