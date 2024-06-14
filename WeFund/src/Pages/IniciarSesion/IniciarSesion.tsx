import {FaGoogle, FaEnvelope, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

function Inicio() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/33 max-w-4xl ">
            <div className="w-3/5 p-5">
                <div className="text-left font-bold">
                    <span className="text-green-500">WeFund</span>
                </div>
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-green-500 mb-2">Iniciar Sesion</h2>
                    <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                    <div className="flex justify-center my-2">
                        <a href="#" className="bprder-2 border-black rounded-full p-3 mx-1">
                           <FaGoogle className="text-sm"/>
                        </a>
                    </div>{/* Spcial Login Section */}
                    <p className="text-gray-400"> usa tu cuenta de email</p>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3">
                            <FaRegEnvelope/>
                            <input type="email" name="email" placeholder='Email' className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center n-2 mb-3 ">
                            <MdLockOutline/>
                            <input type="password" name="password" placeholder='Contraseña' className="bg-gray-100 mx-2 outline-none text-sm flex-1"></input>
                        </div>
                        <div className="flex justw-64 mb-5">
                            <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1"></input>Recuerdame</label>
                            <a href="#" className="text-xs">Olvidaste tu contraseña?</a>  
                        </div>
                        <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-6 py-2 inline-block font-senibold hover:bg-white hover:text-green-500">Sign In</a>
                    </div>
                </div>

            </div>{/* Sign in*/}
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">Hola!</h2>
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                <p className="mb-2">Completa tus datos personales y comienza la aventura en Wefund.</p>
                <a href="/registro" className="border-2 border-white rounded-full px-6 py-2 inline-block font-senibold hover:bg-white hover:text-green-500">Registro</a>
            </div>{/* Sign up */}
        </div>
    
      </div>


      
    </>
  );
}

export default Inicio