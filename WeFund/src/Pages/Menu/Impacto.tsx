
import { useState, useEffect } from "react";


interface Foundation {
    id: string;
    tittle: string;
    description: string;
    banner: string;
    type: string;
  }

function Impacto() {
    // Aquí podrías implementar lógica para obtener datos de impacto y fundaciones
    // Por simplicidad, se mostrará un ejemplo estático
    const [foundations, setFoundations] = useState<Foundation[]>([]);
    const [data1, setData1] = useState<Foundation[]>([]);
    console.log(data1);

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
        setData1(data.fundaciones);
        setFoundations(data.fundaciones);
        } catch (error) {
        console.error('Error fetching foundations:', error);
        }
    };    
    const impacto = {
        impactoTotal: 5000,
        seguidores: 2000,
        donaciones: 3000
    };

    return (
        <div className="flex flex-col items-center justify-center w-full px-10 py-5">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl">
                <div className="p-8">
                    <h1 className="text-3xl text-purple-800 font-bold mb-4">Impacto y Fundaciones</h1>
                    <div className="flex justify-center mt-6">
                    <button type="submit" className="bg-purple-800 text-white px-6 py-3 rounded-full hover:bg-purple-800 focus:outline-none"><a href='/funda'>Editar Perfil</a></button>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl text-gray-600 mb-2">Impacto del perfil</h2>
                        <p className="text-sm text-gray-500">Aquí puedes ver el impacto que ha tenido tu perfil.</p>
                        <div className="mt-4">
                            <p>Impacto Total: {impacto.impactoTotal}</p>
                            <p>Seguidores: {impacto.seguidores}</p>
                            <p>Donaciones: {impacto.donaciones}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl text-gray-600 mb-2">Fundaciones</h2>
                        <p className="text-sm text-gray-500">Lista de fundaciones vinculadas a tu perfil.</p>
                        <ul className="mt-4 space-y-2">
                            {foundations.map(foundation => (
                                <div key={foundation.id} className="bg-white rounded-lg shadow-lg">
                                    <img src={foundation.banner} alt="" className="w-full h-32 object-cover object-center" />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-black">{foundation.tittle}</h3>
                                        <p>{foundation.type}</p>
                                        
                                    </div>
                            </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Impacto;