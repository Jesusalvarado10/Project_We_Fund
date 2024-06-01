import { Link } from "react-router-dom"
import './Home.css';

function Home() {

    const links = 
        [
            {
                id: 3,
                src: 'Nosotros'
            },
            {
                id: 4,
                src: 'Registrarse'
            }
        ]   
        const lonks = 
        [
            {
                id: 1,
                src: "Voluntariado",
            },
            {
                id: 2,
                src: 'Contribucion'
            },
        ] 
    
    return (
            
            <div className="w-screen top-2 h-20 border border-x-cyan-100 rounded-[300px]">
                <div className="h-[100%] flex items-center pl-4">
                    <div className="flex items-center justify-evenly w-[80%]">
                    {lonks.map((link) => (
                        <Link  className="cursor-pointer" to={`/${link.id}`} key={link.id}>
                            {link.src}
                        </Link>
                    ))}
                    </div>
                    <Link to={""} className="titulo">Wefund</Link>
                    <div className="flex items-center justify-evenly w-[80%]">
                    {links.map((link) => (
                        <Link className="cursor-pointer" to={`/${link.id}` } key={link.id}>
                            {link.src}
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        
    );
  }
  
export default Home