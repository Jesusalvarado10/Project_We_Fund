import { Link } from "react-router-dom"
function Home() {

    const links = 
        [
            {
                id: 1,
                src: "Voluntariado",
            },
            {
                id: 2,
                src: 'Contribucion'
            },
            {
                id: 3,
                src: 'Nosotros'
            },
            {
                id: 4,
                src: 'Registrarse'
            }
        ]   
    
    return (
        
        <>
        <div className="w-screen h-20 border border-x-cyan-100">
            <div className="h-[100%] flex items-center pl-4">
                <Link to={""}>Wefund</Link>
            </div>
            <div></div>
        </div>
        </>
      
    )
  }
  
export default Home