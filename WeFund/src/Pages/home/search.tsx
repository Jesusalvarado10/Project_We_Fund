import { useState, useEffect } from "react";
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
  const [query, setQuery] = useState("");
  const [foundations, setFoundations] = useState<Foundation[]>([]);

  useEffect(() => {
    const fetchFoundations = async () => {
      try {
        const response = await fetch(
          "https://project-we-fund-logic2-0.onrender.com/fundaciones"
        );
        if (!response.ok) {
          throw new Error("Error fetching foundations");
        }
        const data = await response.json();
        setFoundations(data.fundaciones);
      } catch (error) {
        console.error("Error fetching foundations:", error);
      }
    };
    fetchFoundations();
  }, []);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    const filteredFoundations = foundations.filter(
      (foundation) =>
        foundation.tittle.toLowerCase().includes(searchTerm) ||
        foundation.type.toLowerCase().includes(searchTerm)
    );
    setFoundations(filteredFoundations);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6">
        <div className="relative">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-violet-500 transition-colors duration-300"
            value={query}
            onChange={changeSearch}
            placeholder="Buscar fundaciones..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <TiZoom size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
        {foundations.map((foundation) => (
          <div
            key={foundation.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={foundation.banner}
              alt=""
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                {foundation.tittle}
              </h3>
              <p className="text-gray-600 mb-4">{foundation.type}</p>
              <button
                className=" bg-green-500 hover:bg-[#0A2F23] text-white font-semibold py-2 px-4 rounded"
                onClick={() => navigate(nationalURL)}
              >
                Donar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;