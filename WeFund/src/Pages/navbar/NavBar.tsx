import { Link, useNavigate } from "react-router-dom";
import { homeURL } from "../../constants/url";
import { useAuth } from "../../context/contex";

export function NavBar() {
  const navigate = useNavigate();
  const { user,logout } = useAuth()


  const handleLogout = async () => {
    console.log(user)
    logout()
    navigate(homeURL);
  }

  return (

    <div className="navbar bg-black ">
      <div className="flex-1">
        <a className=" btn btn-ghost text-white text-2 lg:text-2xl ">MetroVibe</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal  px-1 text-white text-1 lg: text-2">
  
          <li > <Link to={homeURL}>Home</Link></li>
    
 
          <li > <Link onClick={handleLogout} to={homeURL}>Logout</Link></li>
 
            
{/*  


            <li > <Link to={loginURL}>Login</Link></li>
 

            <li > <Link to={groupURL}>Group</Link></li> */}
           
             

       
     

        </ul>
      </div>
    </div>
  )
}