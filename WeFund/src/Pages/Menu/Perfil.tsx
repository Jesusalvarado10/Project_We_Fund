import {FaGoogle, FaEnvelope, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {LiaAddressCard } from "react-icons/lia";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FlagIcon, FlagIconCode } from 'react-flag-kit';

function Perfil() {
    const [country, setCountry] = useState<string>("");
    const [code, setCode] = useState<string>(""); // [variable, funcion que actualiza la variable
    const [phone, setPhone] = useState<string>(""); // [variable, funcion que actualiza la variable
    const [numberCountry, setNumberCountry] = useState<string>(""); // [variable, funcion que actualiza la variable
    
    
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
    
        
  return (

    
    <>

    <div className="text-5xl text-center py-10">
        <h1>Configuración</h1>
    </div>
    <div className="text-s text-center py-1">
        <h1>Cuenta</h1>
    </div>
    <div className="text-s text-center py-1 text-gray-500">
        <h1>Foto de perfil</h1>
        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
    </div>
    <div className="text-s text-center py-1">
        <h1>Nombre</h1>
        <input type='password' name="contraseña" placeholder='Maria' className="bg-gray-100 mx-2 outline-none text-sm flex-1 w-64 mb-3 p-1"></input>
    </div>
    <div className="text-s text-center py-1">
        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
        <h1>Apellido</h1>
        <input type='apellido' name="apellido" placeholder='Cuervo' className="bg-gray-100 mx-2 outline-none text-sm flex-1 w-64 mb-3 p-1"></input>
    </div>
    <div className="text-s text-center py-1">
        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
        <h1>Email</h1>
        <input type='email' name="email" placeholder='mariadcv2003@gmail.com' className="bg-gray-100 mx-2 outline-none text-sm flex-1 w-64 mb-3 p-1"></input>
    </div>
    <div className="text-s text-center py-1">
        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
        <h1>Contraseña</h1>
        <input type='contra' name="contra" placeholder='1234' className="bg-gray-100 mx-2 outline-none text-sm flex-1 w-64 mb-3 p-1"></input>
    </div>
    <div className="text-s text-center py-1">
        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>   
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
                         
                            className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            <input type="number" name="nombre" placeholder='Numero'value={phone} onChange={(ev) => setPhone(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className=" w-64 p-2 flex items-center n-2 mt-4 ">  
                        <input type="file" className="file-input file-input-ghost w-full max-w-xs" />                
                        </div>
                         
      </div>
      <div className="text-s text-center py-1">
        <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-senibold hover:bg-green-500 hover:text-white">Guardar cambios</a>
        <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-senibold hover:bg-green-500 hover:text-white">Eliminar Cuenta</a>
      </div>
    </>
  );
}

export default Perfil