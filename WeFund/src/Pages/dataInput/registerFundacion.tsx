import { useState } from "react";

import {  FaRegEnvelope } from "react-icons/fa";
import { LiaAddressCard } from "react-icons/lia";

import { useNavigate } from "react-router-dom";

import { uploadFile } from "../../Firebase/auth";
import Swal from "sweetalert2";

function RegistroFundacion() {

    const navigate = useNavigate();
    const [type, setType] = useState<string>("");
    const [title , setTitle] = useState<string>("");
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleLogin = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
       event.preventDefault();
       if(!title || !type || !email || !description) {
              Swal.fire({
                title: "Missing fields",
                text: "Please, fill all the fields and try again",
                icon: "warning",
              });
              return;
       }
        // if (password !== confirmPassword) {
        //     Swal.fire({
        //         title: "The password doesn't match",
        //         text: "Please, check the password and try again",
        //         icon: "warning",
        //     });
        //     return;
        // }
        // if (password.length < 6) {
        //     Swal.fire({
        //         title: "The password is too short",
        //         text: "Please, check the password and try again with a password longer than 6 characters",
        //         icon: "warning",
        //     });
        //     return;
        // }
        const dic = {
            title: title,
            type: type,
            email: email,
            description: description,
            file: file,
        }
        console.log(dic)
        const response = await fetch('http://localhost:8888/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tittle: title,
                type: type,
                email: email,
                description: description,
                user: false
      
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
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          // Almacena todos los archivos seleccionados en el estado files
        
          setFile(event.target.files[0]);
        console.log(event.target.files[0])  
          // También puedes realizar otras operaciones con los archivos aquí si es necesario
        }
      };

  return (
    <><div className='flex items-center justify-center'>

   
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-5 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/33 max-w-4xl ">
            <div className="w-50/5 p-5">
                <div className="text-left font-bold">
                    <span className="text-customPurple">WeFund</span>
                </div>
            
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-customPurple mb-2">Registro</h2>
                    <div className="border-2 w-10 border-customPurple inline-block mb-2"></div>
                    <div className="flex justify-center my-2">
                  
                    </div>{/* Spcial Login Section */}
               
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <LiaAddressCard/>
                            <input type="nombre" name="nombre" placeholder='Nombre de la Fundacion'value={title} onChange={(ev) => setTitle(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className=" w-64 p-2 flex items-center n-2 mb-3">
           
                            <select
                                value={type}
                                onChange={(ev) => setType(ev.target.value)}
                                className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                            <option  value="">Choose a type</option>          
                            <option value="Educacion">Educacion</option>
                            <option value="Salud">Salud</option>
                            <option value="Alimentos">Alimentos</option>
                            <option value="Vestimenta">Vestimenta</option>
                            <option value="Deportes">Deportes</option>  
                        </select>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3 ">
                            <FaRegEnvelope/> 
                            <input type="email" name="email" placeholder='Correo' value={email} onChange={(ev) => setEmail(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className=" w-64 p-2 flex items-center n-2 mb-3">
                        <textarea
                            value={description}
                            onChange={(ev) => setDescription(ev.target.value)}
                            className="bg-gray-100  w-full px-3 py-2 placeholder-gray-300 text-gray-90 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your message..."
                            rows={4} // Define el número inicial de filas del textarea
                        />      
                        </div>
                        <div className=" w-64 p-2 flex-col items-center n-2 mb-3 ">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Coloque su logo</span>
                            </div>
                            <input type="file"  onChange={handleChange}className="file-input w-full max-w-xs bg-customPurple" accept="image/*" />
                        </label>      
                            </div>
                        <div className="flex justw-64 mb-5">
                            <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1"></input>Acepto los terminos y condiciones</label> 
                        </div>
                        <a href="#" onClick={handleLogin} className="border-2 border-customPurple text-customPurple rounded-full px-6 py-2 inline-block font-senibold hover:bg-customPurple hover:text-white">Registrarse</a>
                    </div>
                   
                
                </div>

            </div>{/* Sign in*/}
            
        </div>
    
      </div>

      </div>
      
    </>
  );
}

export default RegistroFundacion