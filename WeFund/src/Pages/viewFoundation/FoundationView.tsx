import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Foundation } from "../../Class/foundation";
import { getImageUrl } from "../../Firebase/auth";
import { LoadingSpinner } from "../../components/loading";
import { Map, ZoomControl, Marker } from 'pigeon-maps'

export const FoundationView = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [foundation, setFoundation] = useState<Foundation | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://project-we-fund-logic2-0.onrender.com/getFundationID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "id": id }),
                });
                
                if (!response.ok) {
                    navigate("*");
                    return;
                }
                
                const data = await response.json();
                const fundation = new Foundation(
                    data.fundacion.id,
                    data.fundacion.tittle,
                    data.fundacion.img,
                    data.fundacion.description,
                    data.fundacion.shortDescription,
                    data.fundacion.type,
                    data.fundacion.email,
                    data.fundacion.location
                );
                if(id){
                    const img = await getImageUrl(id, data.fundacion.img);
                    if (img) {
                        fundation.setPhoto(img);
                    }
                
                    setFoundation(fundation);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching foundation:", error);
                navigate("*");
            }
        };

        fetchData();
    }, [id, navigate]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!foundation) {
        return <div>No foundation data available.</div>;
    }

    // Parse location string to get latitude and longitude

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={foundation.photo} alt={foundation.tittle} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{foundation.type}</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{foundation.tittle}</h1>
                        <p className="mt-2 text-gray-500">{foundation.shortDescription}</p>
                        <div className="mt-4">
                            <h2 className="text-gray-700 font-bold">Descripción:</h2>
                            <p className="mt-1 text-gray-600">{foundation.description}</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-gray-700 font-bold">Contacto:</h2>
                            <p className="mt-1 text-gray-600">Email: {foundation.email}</p>
             
                        </div>
                        <div className="mt-6">
                            <button 
                                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
                                onClick={() => {/* Add donation logic */}}
                            >
                                Donate Now
                            </button>
                        </div>
                        <div className="mt-9">
                            <h2 className="text-gray-700 font-bold mb-7">Ubicación:</h2>  
                            <Map height={300} defaultCenter={[foundation.location.latitude, foundation.location.longitude]} defaultZoom={11}>
                                <ZoomControl />
                                <Marker width={50} anchor={[foundation.location.latitude, foundation.location.longitude]} />
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}