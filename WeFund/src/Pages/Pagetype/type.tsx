import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface Foundation {
    id: string;
    tittle: string;
    description: string;
    banner: string;
    type: string;
  }
export const Type = () => {
    const navigate = useNavigate();
    const [fundaciones, setFundaciones] = useState<Foundation[]>([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8888/getTypes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "id": id }),
            });
            if (!response.ok) {
                navigate("*")
            }
            const data = await response.json();
            setFundaciones(data.types);
        };
    
        fetchData();
    }, [id]);

    const Categoria: React.FC<{ categoriaSeleccionada: string }> = ({ categoriaSeleccionada }) => {
      return (<>
        Categoria categoriaSeleccionada = {categoriaSeleccionada}
      </>);
    }

    return (
        <div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fundaciones.map(foundation => (
            <div key={foundation.id} className="bg-white rounded-lg shadow-lg">
              <img src={foundation.banner} alt="" className="w-full h-32 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{foundation.tittle}</h3>
                <p>{foundation.type}</p>
                <div className="flex  justify-between">
                <button
                  className="mt-4 bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded"
                  onClick={() => {
                  
                  }}
                >
                  Donar
                </button>
                <button   className="mt-4 bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded" 
                onClick={() => {
                    const url = `/fundations/${foundation.id}`;
                    navigate(url);
                  
                }}
                >
                    Ver más	
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
    }