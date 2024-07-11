import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../categorias/Categoria";
import { Foundation } from "../../Class/foundation";
import { getImageUrl } from "../../Firebase/auth";
import { LoadingSpinner } from "../../components/loading";

export const Type = () => {
    const navigate = useNavigate();
    const [fundaciones, setFundaciones] = useState<Foundation[]>([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch('https://project-we-fund-a8vb.onrender.com/getTypes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                const foundationPromises = data.types.map(async (foundation: any) => {
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
                setFundaciones(resolvedFoundations);
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate('*');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, navigate]);

    return (
        <div>
        <Categoria categoriaSeleccionada={id || ''} />
        {loading ? (
            <LoadingSpinner />
        ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center ">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {fundaciones.map(foundation => (
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
    </div>
    );
}