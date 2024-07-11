import { useState, useEffect } from "react";
import { TiZoom } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Foundation } from "../../Class/foundation";
import { getImageUrl } from "../../Firebase/auth";
import { LoadingSpinner } from "../../components/loading";
import { nationalURL } from "../../constants/url";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [foundations, setFoundations] = useState<Foundation[]>([]);
  const [filteredFoundations, setFilteredFoundations] = useState<Foundation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoundations();
  }, []);

  const fetchFoundations = async () => {
    try {
      const response = await fetch('https://project-we-fund-a8vb.onrender.com/fundaciones');
      if (!response.ok) {
        throw new Error('Error fetching foundations');
      }
      const data = await response.json();
      console.log(data);

      const foundationPromises = data.fundaciones.map(async (foundation: any) => {
        const fundation = new Foundation(
          foundation.id,
          foundation.tittle,
          foundation.img,
          foundation.description,
          foundation.shortDescription,
          foundation.type,
          foundation.email,
          foundation.location
        );
        const photo = await getImageUrl(foundation.id, foundation.img);
        if (photo) {
          fundation.setPhoto(photo);
        }
        return fundation;
      });

      const resolvedFoundations = await Promise.all(foundationPromises);
      setFoundations(resolvedFoundations);
      setFilteredFoundations(resolvedFoundations);
    } catch (error) {
      console.error('Error fetching foundations:', error);
    } finally {
      setLoading(false);
    }
  };

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm === '') {
      setFilteredFoundations(foundations);
    } else {
      const filtered = foundations.filter(foundation =>
        foundation.tittle.toLowerCase().includes(searchTerm) || 
        foundation.type.toLowerCase().includes(searchTerm)
      );
      setFilteredFoundations(filtered);
    }
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
  
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center">
            <input
              type="text"
              className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              value={query}
              onChange={changeSearch}
              placeholder="Buscar fundaciones..."
            />
            <TiZoom size={32} className="ml-2" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredFoundations.map(foundation => (
              <div key={foundation.id} className="bg-white rounded-lg shadow-lg flex flex-col">
                <img src={foundation.photo} alt={foundation.tittle} className="w-full h-48 object-cover object-center rounded-t-lg" />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold text-black mb-2">{foundation.tittle}</h3>
                  <p className="text-gray-600 mb-4">{foundation.type}</p>
                  <div className="mt-auto flex justify-between">
                    <button
                      className="bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded transition duration-300"
                      onClick={() => {
                        const url= `/payment/${foundation.id}`;
                        navigate(url)
                      }}
                    >
                      Donar
                    </button>
                    <button
                      className="bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded transition duration-300"
                      onClick={() => navigate(`/fundations/${foundation.id}`)}
                    >
                      Ver más	
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     
      )}
    </>
  );
}

export default Search;