import { Link } from 'react-router-dom';
import './Menu.css'
export function Sidebar() {
   
  
    return (
      <>
      <div className="sidebar">
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/home">Pip</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/home">Tri</Link>
            </li>
        </ul>
      </div>
      
      </>
    )
  }
  
  export default Sidebar;