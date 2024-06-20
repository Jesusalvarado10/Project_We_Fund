import { useState } from "react";
import { TiZoom } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { nationalURL } from "../../constants/url";

interface Foundation {
  id: string;
  tittle: string;
  description: string;
  banner: string;
  type: string;
}

const Search = () => {
const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [data1, setData1] = useState<Foundation[]>([]);
const [foundations, setFoundations] = useState<Foundation[]>(data1);

const fetchFoundations = async () => {
   
    try {
      const response = await fetch('https://project-we-fund-logic2-0.onrender.com/fundaciones');
      if (!response.ok) {
        throw new Error('Error fetching foundations');
      }
      const data = await response.json();


      setData1(data.fundaciones);
    } catch (error) {
      console.error('Error fetching foundations:', error);
    }
  };
  fetchFoundations();
  

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
 
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    
    const filteredFoundations = foundations.filter(foundation =>
      foundation.tittle.toLowerCase().includes(searchTerm) || foundation.type.toLowerCase().includes(searchTerm)
    );
    setFoundations(filteredFoundations);
    if(searchTerm === '') {
        setFoundations(data1);
    
    }
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:border-blue-500 transition-colors duration-300"
          value={query}
          onChange={changeSearch}
          placeholder="Buscar fundaciones..."
        />
        <TiZoom size={32} />
      </div>
      <div className="h-screen ">
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foundations.map(foundation => (
          <div key={foundation.id} className="bg-white rounded-lg shadow-lg">
            <img src={foundation.banner} alt="" className="w-full h-32 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">
                {foundation.tittle}
              </h3>
              <p>
                {foundation.type}
              </p>
             
              <button
                className="mt-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => {
                 navigate(nationalURL)
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
}

export default Search;
