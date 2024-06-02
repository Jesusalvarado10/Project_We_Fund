import { useNavigate } from "react-router-dom";
import { homeURL } from "../../constants/url";
import { useAuth } from "../../context/contex";
import "./NavBar.css"
export function NavBar() {
  const navigate = useNavigate();
  const { user,logout } = useAuth()


  const handleLogout = async () => {
    console.log(user)
    logout()
    navigate(homeURL);
  }

  return (

    <div className="flex bg-white p-0.4 rounded-3xl justify-center items-center space-x-8">
    {/* Primer contenedor */}
    <div className="px-2">
      <ul className="menu menu-horizontal px-6 gap-20">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </div>

    {/* Segundo contenedor */}
    <div className="px-4">
      <a className="btn btn-ghost text-xl" href="#">WeFund</a>
    </div>

    {/* Tercer contenedor */}
    <div className="px-2">
      <ul className="menu menu-horizontal px-6 gap-20">
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
        <li><a href="#">Item 6</a></li>
      </ul>
    </div>
  </div>

  )
}