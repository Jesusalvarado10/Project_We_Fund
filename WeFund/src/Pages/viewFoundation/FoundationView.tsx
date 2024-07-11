import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Foundation } from "../../Class/foundation";
import { getImageUrl, getPayments } from "../../Firebase/auth";
import { LoadingSpinner } from "../../components/loading";
import { Map, ZoomControl, Marker } from 'pigeon-maps'
import { useAuth } from "../../context/contex";
import Swal from "sweetalert2";

export const FoundationView = () => {
    const [payments, setPayments] = useState<{monto: any}[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [foundation, setFoundation] = useState<Foundation | null>(null);
    const { id } = useParams();
    const {user}= useAuth();    
    const [showVolunteers, setShowVolunteers] = useState(false);
    const [volunteers, setVolunteers] = useState<{ name: string, last_name: string }[]>([]);
    const [showPayments, setShowPayments] = useState(false);
    const handdleVoluntario = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsLoading(true); 
        if(!user){
            Swal.fire({
                title: 'Error',
                text: 'Debe iniciar sesión para ser voluntario',
                icon: 'question',
            }); 
            navigate("/logIn");
            setIsLoading(false);    
            return;
        }

        try{
            const response = fetch('https://project-we-fund-a8vb.onrender.com/addVoluntariado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "userId": user?.id , "fundacionId":id,
                    "name": user?.name, "last_name": user?.last_name
                }),
            });
            if (!(await response).ok) {
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo agregar el voluntario',
                    icon: 'error',
                });
                setIsLoading(false);    
                return 
            }
            Swal.fire({
                title: 'Voluntario agregado',
                text: 'Usted se ha registrado como voluntario',
                icon: 'success',
            });
            setIsLoading(false);    

            console.log("Voluntario agregado")
        }catch(error){
            
            setIsLoading(false);    
            console.error("Error fetching foundation:", error);
        }

    }

    useEffect(() => {
       
        const fetchPayments = async () => { 
            try {
                if (id) {  
                    
                
                const data = await getPayments(id);
                if (data) {
                   
                    setPayments(data.fund);
                    console.log("hola")
                    console.log(data.fund)
                
                }}
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        }
        fetchPayments();
        
        const fetchData = async () => {
            try {
                const response = await fetch('https://project-we-fund-a8vb.onrender.com/getFundationID', {
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
             
                }
        setLoading(false);  

            } catch (error) {
                console.error("Error fetching foundation:", error);
                navigate("*");
            }
        };
        const fetchVolunteers = async () => {
            try {
                const response = await fetch('https://project-we-fund-a8vb.onrender.com/getVoluntariados', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "fundacionId": id }),
                });

                if (!response.ok) {
                    return;
                }

                const data = await response.json();
                if (data && data.voluntariados && data.voluntariados.volunteers) {
                    setVolunteers(data.voluntariados.volunteers);
                }
                setLoading(false);  

            } catch (error) {
                console.error("Error fetching volunteers:", error);
            }
        }
        fetchVolunteers();

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
        <>{
            isLoading && <LoadingSpinner />
        }
<div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={foundation.photo} alt={foundation.tittle} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">{foundation.type}</div>
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
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">
            Donar
          </button>
        </div>
        <div className="mt-9">
          <h2 className="text-gray-700 font-bold mb-7">Ubicación:</h2>
          <Map height={300} defaultCenter={[foundation.location.latitude, foundation.location.longitude]} defaultZoom={11}>
            <ZoomControl />
            <Marker width={50} anchor={[foundation.location.latitude, foundation.location.longitude]} />
          </Map>
        </div>
        <div className="mt-6">
          <button onClick={handdleVoluntario} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ">
            Quiero ser voluntario
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="max-w-4xl mx-auto mt-8">
                <div 
                    className="bg-white p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => setShowVolunteers(!showVolunteers)}
                >
                    <h2 className="text-xl font-bold text-center ">Voluntarios</h2>
                    {showVolunteers && (
                        <ul className="mt-4">
                            {volunteers.map((volunteer, index) => (
                                <li key={index} className="py-2 border-b last:border-b-0">
                                    {volunteer.name} {volunteer.last_name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-8">
                <div 
                    className="bg-white p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => setShowPayments(!showPayments)}
                >
                    <h2 className="text-xl font-bold text-center ">Pagos</h2>
                    {showPayments && (
                        <ul className="mt-4">
                            {payments.map((payments, index) => (
                                <li key={index} className="py-2 border-b last:border-b-0">
                                    {payments.monto}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
</div>


</>
    );
}