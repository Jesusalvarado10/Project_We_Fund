import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface Foundation {
    id: string;
    tittle: string;
    description: string;
    banner: string;
    type: string;
  }
export const Foundation = () => {
    const navigate = useNavigate();
    const [fundaciones, setFundaciones] = useState<Foundation>();
    const {id}=useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8888/getFundationID', {
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
            setFundaciones(data.fundacion);
        };
    
        fetchData();
    }
    , [id]);
    
    return (
        <div>
            {id}
            {fundaciones?.tittle}
            {fundaciones?.description}
            {fundaciones?.banner}
        </div>
    )
}
