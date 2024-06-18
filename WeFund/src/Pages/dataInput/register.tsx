import {FaGoogle, FaEnvelope, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {LiaAddressCard } from "react-icons/lia";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { nacionality } from '../../constants/url';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';
import { uploadFile } from '../../Firebase/auth';

function Registro() {
    const [file, setFile] = useState<File | null>(null);
    const [country, setCountry] = useState<string>("");
    const [code, setCode] = useState<string>(""); // [variable, funcion que actualiza la variable
    const [phone, setPhone] = useState<string>(""); // [variable, funcion que actualiza la variable
    const [numberCountry, setNumberCountry] = useState<string>(""); // [variable, funcion que actualiza la variable
    const navigate = useNavigate();
    const [name, setName] = useState(''); // [variable, funcion que actualiza la variable
    const [last_name, setLast_name] = useState(''); // [variable, funcion que actualiza la variable
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // [variable, funcion que actualiza la variable
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryCode = event.target.value; // Obtiene el código del país seleccionado
        setCountry(selectedCountryCode); // Actualiza el estado country con el código del país seleccionado
        console.log(selectedCountryCode);
        // Verifica si el valor seleccionado no está vacío
        if (selectedCountryCode !== "") {
          // Accede a los datos del país seleccionado
        const selectedCountryData = nacionality[selectedCountryCode as keyof typeof nacionality];
          if (selectedCountryData) {
            console.log(selectedCountryData.code);
            console.log("hjaisfksafsaff")
            console.log(selectedCountryData.code);
            setCode(selectedCountryData.code); // Actualiza el estado code con el código del país seleccionado
            setNumberCountry(selectedCountryData.dialCode); // Actualiza el estado numberCountry con el código de marcación del país seleccionado
          } else {
            // Manejo de error o mensaje en caso de no encontrar los datos del país
            console.error(`No se encontraron datos para el país con código ${selectedCountryCode}`);
          }
        } else {
          // Manejo de caso donde no se selecciona ningún país
          setNumberCountry(""); // Reinicia el estado numberCountry a una cadena vacía
        }
      };
    const handleLogin = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
       event.preventDefault();
        if (password !== confirmPassword) {
            Swal.fire({
                title: "The password doesn't match",
                text: "Please, check the password and try again",
                icon: "warning",
            });
            return;
        }
        if (password.length < 6) {
            Swal.fire({
                title: "The password is too short",
                text: "Please, check the password and try again with a password longer than 6 characters",
                icon: "warning",
            });
            return;
        }
        const response = await fetch('http://localhost:8888/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                last_name: last_name,
                email: email,
                password: password,
                user: true,
      
            }),
            });
            if (response.ok) {
                response.json().then((data) => {
                    console.log(data);
                    if (!file) {
                        return;
                    }
                    uploadFile(data.userId, file);
                });
    
                navigate('/login');
                console.log(response)
    
    }
    }
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          // Almacena todos los archivos seleccionados en el estado files
        
          setFile(event.target.files[0]);
        console.log(event.target.files[0])  
          // También puedes realizar otras operaciones con los archivos aquí si es necesario
        }
      };

  return (
    <><div className='flex items-center justify-center'>
        

    </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/33 max-w-4xl ">
            <div className="w-50/5 p-5">
                <div className="text-left font-bold">
                    <span className="text-green-500">WeFund</span>
                </div>
            
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-green-500 mb-2">Registro</h2>
                    <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                    <div className="flex justify-center my-2">
                        <a href="#" className="bprder-2 border-black rounded-full p-3 mx-1">
                           <FaGoogle className="text-sm"/>
                        </a>
                    </div>{/* Spcial Login Section */}
                    <div className='flex grid-cols-2 gap-2'>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <LiaAddressCard/>
                            <input type="nombre" name="nombre" placeholder='Nombre'value={name} onChange={(ev) => setName(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <LiaAddressCard/>
                            <input type="nombre" name="nombre" placeholder='Apellido'value={last_name} onChange={(ev) => setLast_name(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3 ">
                            <FaRegEnvelope/> 
                            <input type="email" name="email" placeholder='Email' value={email} onChange={(ev) => setEmail(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <MdLockOutline/>
                            <input type='password' name="contraseña" placeholder='Contraseña' value={password} onChange={(ev) => setPassword(ev.target.value)}className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3 ">
                            <MdLockOutline/>
                            <input type="password" name="confirmar contraseña" placeholder='Confirmar Contraseña' value={confirmPassword} onChange={(ev) => setConfirmPassword(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="flex justw-64 mb-5">
                            <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1"></input>Acepto los terminos y condiciones</label> 
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-center ">
                        <div className="w-64  flex items-center  mb-2 ">
                        {country !== "" && (
                               <div className='bg-gray-100 mr-2'>
                                <FlagIcon code={code as FlagIconCode} size={32}/>
                                </div>)}
    
                        <select
                            value={country}
                            onChange={handleChange}
                         
                            className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                            <option  value="">Choose a country</option>
                            {Object.values(nacionality).map((countryObj) => (
                                <option key={countryObj.code} value={countryObj.name}>
                                {countryObj.name} ({countryObj.code})
                                </option>
                            ))}
                        </select>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                        {country !== "" && (
                                <div>
                                    <p className='text-black'>{numberCountry}</p>
                                </div>
                                )}
                        <input type="file"  onChange={handleChange1}className="file-input w-full max-w-xs bg-customPurple" accept="image/*" />
                    </div>
                        <div className=" w-64 p-2 flex items-center n-2 mt-4 ">  
                        <input type="file" className="file-input w-full max-w-xs" />                
                        </div>
                         
             </div>
             
                    </div>
                    <a href="#" onClick={handleLogin} className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-senibold hover:bg-green-500 hover:text-white">Registrarse</a>
                </div>

            </div>{/* Sign in*/}
            
        </div>
    
      </div>


      
    </>
  );
}

export default Registro