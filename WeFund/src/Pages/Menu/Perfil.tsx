import { FaGoogle, FaEnvelope, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { LiaAddressCard } from "react-icons/lia";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';
import fotos from '../../assets/fotos.jpg';
import './Perfil.css';

function Perfil() {
    const [country, setCountry] = useState<string>("");
    const [code, setCode] = useState<string>(""); 
    const [phone, setPhone] = useState<string>(""); 
    const [numberCountry, setNumberCountry] = useState<string>(""); 
    const [profileImage, setProfileImage] = useState<string>(fotos); 

    const nacionality = {  
        "Argentina": { "code": "AR", "dialCode": "+54", "name": "Argentina" },
        "Bolivia": { "code": "BO", "dialCode": "+591", "name": "Bolivia" },
        "Brazil": { "code": "BR", "dialCode": "+55", "name": "Brazil" },
        "Chile": { "code": "CL", "dialCode": "+56", "name": "Chile" },
        "Colombia": { "code": "CO", "dialCode": "+57", "name": "Colombia" },
        "Costa Rica": { "code": "CR", "dialCode": "+506", "name": "Costa Rica" },
        "Cuba": { "code": "CU", "dialCode": "+53", "name": "Cuba" },
        "Ecuador": { "code": "EC", "dialCode": "+593", "name": "Ecuador" },
        "El Salvador": { "code": "SV", "dialCode": "+503", "name": "El Salvador" },
        "Guatemala": { "code": "GT", "dialCode": "+502", "name": "Guatemala" },
        "Honduras": { "code": "HN", "dialCode": "+504", "name": "Honduras" },
        "Mexico": { "code": "MX", "dialCode": "+52", "name": "Mexico" }, 
        "Nicaragua": { "code": "NI", "dialCode": "+505", "name": "Nicaragua" },
        "Panama": { "code": "PA", "dialCode": "+507", "name": "Panama" },
        "Paraguay": { "code": "PY", "dialCode": "+595", "name": "Paraguay" },
        "Peru": { "code": "PE", "dialCode": "+51", "name": "Peru" }, 
        "Dominican Republic": { "code": "DO", "dialCode": "+1-809", "name": "Dominican Republic" },
        "Uruguay": { "code": "UY", "dialCode": "+598", "name": "Uruguay" },
        "Venezuela": { "code": "VE", "dialCode": "+58", "name": "Venezuela" }
    };

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
                <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                    <img src={profileImage} alt="Imagen de Perfil" className="object-cover w-full h-full" />
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
                    <input type='text' name="nombre" placeholder='Maria' className="input-field"></input>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Apellido:</span>
                    <input type='text' name="apellido" placeholder='Cuervo' className="input-field"></input>
                </div>
                <div className="flex items-center">
                    <span className="w-1/4 text-gray-600">Email:</span>
                    <input type='email' name="email" placeholder='mar@gmail.com' className="input-field"></input>
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