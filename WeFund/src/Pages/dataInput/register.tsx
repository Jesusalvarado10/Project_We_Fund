import {FaGoogle, FaEnvelope, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {LiaAddressCard } from "react-icons/lia";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { nacionality } from '../../constants/url';
import { FlagIcon } from 'react-flag-kit';

function Registro() {

    const navigate = useNavigate();
    const [name, setName] = useState(''); // [variable, funcion que actualiza la variable
    const [last_name, setLast_name] = useState(''); // [variable, funcion que actualiza la variable
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // [variable, funcion que actualiza la variable
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
      
            }),
            });
        if (response.ok) {
            navigate('/login');
            console.log(response)


    }
    }

  return (
    <><div className='flex items-center justify-center'>
 <FlagIcon code="AR" size={32} />
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
                    <div className=''>
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
                        <a href="#" onClick={handleLogin} className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-senibold hover:bg-green-500 hover:text-white">Registrarse</a>
                    </div>
                    </div>
                </div>

            </div>{/* Sign in*/}
            
        </div>
    
      </div>


      
    </>
  );
}

export default Registro