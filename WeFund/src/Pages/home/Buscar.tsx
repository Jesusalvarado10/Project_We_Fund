import { useState, useEffect } from 'react';

function Buscar() {
  const [foundations, setFoundations] = useState<{ name: string }[]>([]);

  useEffect(() => {

    fetch('http://localhost:8888/fundaciones')
      .then((response) => response.json())
      .then((data) => setFoundations(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/33 max-w-4xl ">
        <div className="w-50/5 p-5">
          <div className="text-left">
            <span className="text-green-500 font-bold">Wefund</span>
            <h5 className="font-bold">Fundaciones</h5>
            {foundations.map((foundation, index) => (
              <div key={index} className="mb-2">
                {foundation.name}
              </div>
            ))}
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buscar;