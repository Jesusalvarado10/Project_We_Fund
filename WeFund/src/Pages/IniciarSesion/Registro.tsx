import {FaGoogle, FaEnvelope, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {LiaAddressCard } from "react-icons/lia";

function Registro() {
  return (
    <>
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
                    <p className="text-gray-400"> usa tu cuenta de email</p>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <LiaAddressCard/>
                            <input type="nombre" name="nombre" placeholder='Nombre' className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3 ">
                            <FaRegEnvelope/> 
                            <input type="email" name="email" placeholder='Email' className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <MdLockOutline/>
                            <input type="contraseña" name="contraseña" placeholder='Contraseña' className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3 ">
                            <MdLockOutline/>
                            <input type="confirmar contraseña" name="confirmar contraseña" placeholder='Confirmar Contraseña' className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="flex justw-64 mb-5">
                            <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1"></input>Acepto los terminos y condiciones</label> 
                        </div>
                        <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-senibold hover:bg-white hover:text-green-500">Registrarse</a>
                    </div>
                </div>

            </div>{/* Sign in*/}
            
        </div>
    
      </div>


      
    </>
  );
}

export default Registro