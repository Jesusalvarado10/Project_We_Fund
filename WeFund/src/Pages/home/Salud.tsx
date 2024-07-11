import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nationalURL } from "../../constants/url";

interface Foundation {
  id: string;
  tittle: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  shortDescription: string;
  type: string;
  email: string;
}

const Salud = () => {
  const navigate = useNavigate();
  const [data1, setData1] = useState<Foundation[]>([]);
  const [salud, setSalud] = useState<Foundation[]>([]);
  console.log(data1);

  useEffect(() => {
    fetchSalud();
  }, []);

  const fetchSalud = async () => {
    try {
      const response = await fetch("https://project-we-fund-a8vb.onrender.com/fundaciones");
      if (!response.ok) {
        throw new Error("Error fetching foundations");
      }
      const data = await response.json();
      const salud = data.fundaciones.filter((foundation: Foundation) => foundation.type === "Salud");
      setData1(salud);
      setSalud(salud);
    } catch (error) {
      console.error("Error fetching foundations:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="h-screen">
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {salud.map((foundation) => (
            <div key={foundation.id} className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{foundation.tittle}</h3>
                <p>{foundation.type}</p>
                <p>{foundation.shortDescription}</p>
                <p>Email: {foundation.email}</p>
                <button
                  className="mt-4 bg-[#0E3D2E] hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded"
                  onClick={() => {
                    navigate(nationalURL);
                  }}
                >
                  Donar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Salud;