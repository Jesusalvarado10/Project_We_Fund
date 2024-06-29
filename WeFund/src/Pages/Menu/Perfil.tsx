
import { useEffect, useState } from 'react';


import { FlagIcon, FlagIconCode } from 'react-flag-kit';
import fotos from '../../assets/fotos.jpg';
import './Perfil.css';
import { useAuth } from '../../context/contex';
import { nacionality } from '../../constants/url';
import { useNavigate } from 'react-router-dom';

function Perfil() {
    const navigate = useNavigate();
    const {user}= useAuth()
    const [country, setCountry] = useState<string>("");
    const [code, setCode] = useState<string>(""); 
    const [phone, setPhone] = useState<string>(""); 
    const [numberCountry, setNumberCountry] = useState<string>(""); 
    const [profileImage, setProfileImage] = useState<string>(fotos); 

    
    useEffect(() => {
        if (user) {
            setCountry(user.country);
            const x= nacionality[user.country as keyof typeof nacionality];
            setCode(x.code);
            setPhone(user.phone);
            setProfileImage(user.icon);
        }
        else(
           navigate("*") 
        )
    }, [user]);

        

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryCode = event.target.value;
        setCountry(selectedCountryCode);
        if (selectedCountryCode !== "") {
            const selectedCountryData = nacionality[selectedCountryCode as keyof typeof nacionality];
            if (selectedCountryData) {
                setCode(selectedCountryData.code);
                setNumberCountry(selectedCountryData.dialCode);
            } else {
                console.error(`No se encontraron datos para el país con código ${selectedCountryCode}`);
            }
        } else {
            setNumberCountry("");
        }
    };

    const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setProfileImage(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>  
     
            <div className="flex flex-col items-center justify-center w-full px-10 py-5">
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl">
        <div className="p-8">
            <h1 className="text-3xl text-green-500 font-bold mb-4">Perfil</h1>
            <div className="flex flex-col items-center">
                <div className='relative right-12 top-4 z-10 rounded-lg '>
                     <FlagIcon code={code as FlagIconCode} size={48}  />
            </div> <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4 z-0">
                    
                    <img src={user?.icon} alt="Imagen de Perfil" className="object-cover w-full h-full" />
                </div>
                <label htmlFor="fileInput" className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-600">
                    Cambiar foto de perfil
                </label>
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfileImageChange}
                />
            </div>
            <div className="text-center mt-4">
                <h2 className="text-2xl">Configuración</h2>
                <p className="text-sm text-gray-500">Actualiza tu información personal</p>
            </div>
            <form className="mt-6 space-y-4">
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Nombre:</span>
                    <input type='text' name="nombre" placeholder={user?.name} className="input-field"></input>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Apellido:</span>
                    <input type='text' name="apellido" placeholder={user?.last_name} className="input-field"></input>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Email:</span>
                    <input type='email' name="email" placeholder={user?.email} className="input-field"></input>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Contraseña:</span>
                    <input type='password' name="contra" placeholder='xxxx' className="input-field"></input>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">País:</span>
                    <div className="flex items-center space-x-2">
                        {country !== "" && (
                            <div className='bg-gray-100'>
                                <FlagIcon code={code as FlagIconCode} size={24} />
                            </div>
                        )}
                        <select
                            value={country}
                            onChange={handleChange}
                            className="input-field"
                        >
                            <option value="">Elige un país</option>
                            {Object.values(nacionality).map((countryObj) => (
                                <option key={countryObj.code} value={countryObj.name}>
                                    {countryObj.name} ({countryObj.code})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Teléfono:</span>
                    <input type="tel" name="phone" placeholder='Número de teléfono' value={phone} onChange={(ev) => setPhone(ev.target.value)} className="input-field"></input>
                </div>
                <div className="flex justify-center mt-6">
                    <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none">Guardar cambios</button>
                </div>
                <div className="flex justify-center mt-4">
                    <button type="button" className="border border-green-500 text-green-500 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white focus:outline-none">Eliminar cuenta</button>
                </div>
            </form>
        </div>
    </div>
</div>
        </>
    );
}

export default Perfil;