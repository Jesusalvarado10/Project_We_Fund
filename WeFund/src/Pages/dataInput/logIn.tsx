import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { getImageUrl, signInWithEmailAndPasswordAndFetchUserData } from '../../Firebase/auth';
import { useState } from 'react';
import { User } from '../../Class/user';
import { useAuth } from '../../context/contex';
import { useNavigate } from 'react-router-dom';
import { registerURL, registerURLFund } from '../../constants/url';
import Swal from 'sweetalert2';
import { LoadingSpinner } from '../../components/loading';

interface LoginResponse {
  ok: boolean;
  userId: {
    name: string;
    email: string;
    lastname: string;
    img: string;
    country: string;
    phone: string;
  };
  user: string;
}

function Inicio() {
  const [validate, setValidate] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsLoading(true); // Mostrar indicador de carga
    if (!email || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor llene todos los campos',
        icon: 'error',
      });
      setIsLoading(false); // Ocultar indicador de carga
      return;
    }
    setIsLoading(true); // Mostrar indicador de carga
    const iduser = await signInWithEmailAndPasswordAndFetchUserData(email, password);
    if (!iduser) {
      Swal.fire({
        title: 'Error',
        text: 'El usuario no existe o la contraseña es incorrecta',
        icon: 'error',
      });
      setIsLoading(false); // Ocultar indicador de carga
      return;
    }

    const response = await fetch('https://project-we-fund-a8vb.onrender.com/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokenID: iduser,
      }),
    });

    if (response.ok) {
      const responseData: LoginResponse = await response.json();
      if (iduser) {
        getImageUrl(responseData.user, responseData.userId.img).then((url) => {
          if (url) {
            setIsLoading(false); // Ocultar indicador de carga
            Swal.fire({
              title: 'Éxito',
              text: 'Inicio de sesión exitoso',
              icon: 'success',
            }).then(() => {
              const user = new User(iduser.user.uid ,responseData.userId.name, responseData.userId.email, responseData.userId.lastname, url, responseData.userId.phone, responseData.userId.country);
              login(user);
              navigate('/');
            });
          }
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Error en el servidor',
          icon: 'error',
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Error en el servidor',
        icon: 'error',
      });
    }
    setIsLoading(false); // Ocultar indicador de carga
  };

  const handleChange = () => {
    setValidate(!validate);
  };

  return (
    <> 
       {isLoading && <LoadingSpinner />}
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
        <label className="flex cursor-pointer gap-2">
          <span className="label-text">Usuario</span>
          <input type="checkbox" checked={validate} onChange={handleChange} className="toggle theme-controller" />
          <span className="label-text">Fundación</span>
        </label>
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className={`${validate ? 'text-customPurple' : 'text-green-500'}`}>WeFund</span>
            </div>
            <div className="py-10">
              <h2 className={`text-3xl font-bold ${validate ? 'text-customPurple' : 'text-green-500'} mb-2`}>Iniciar Sesión</h2>
              <div className={`border-2 w-10 ${validate ? 'border-customPurple' : 'border-green-500'} inline-block mb-2`}></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-black rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>{/* Social Login Section */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope />
                  <input type="email" name="email" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline />
                  <input type="password" name="password" placeholder="Contraseña" value={password} onChange={(ev) => setPassword(ev.target.value)} className="bg-gray-100 mx-2 outline-none text-sm flex-1" />
                </div>
                <div className="flex w-64 mb-5 justify-between">
                  <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Recuérdame</label>
                  <a href="#" className="text-xs">¿Olvidaste tu contraseña?</a>
                </div>
                <a onClick={handleLogin} href="#" className={`border-2 ${validate ? 'text-customPurple border-customPurple hover:bg-customPurple' : 'hover:bg-green-500 border-green-500 text-green-500'} rounded-full px-6 py-2 inline-block font-semibold hover:text-white`}>
                  {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                </a>
              </div>
            </div>
          </div>{/* Sign in*/}
          <div className={`w-2/5 ${validate ? 'bg-customPurple' : 'bg-green-500'} text-white rounded-tr-2xl rounded-br-2xl py-36 px-12`}>
            <h2 className="text-3xl font-bold mb-2">¡Hola!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Completa tus datos personales y comienza la aventura en WeFund.</p>
            <a href={validate ? registerURLFund : registerURL} className={`border-2 border-white rounded-full px-6 py-2 inline-block font-semibold hover:bg-white ${validate ? 'hover:text-customPurple' : 'hover:text-green-500'}`}>
              Registro
            </a>
          </div>{/* Sign up */}
        </div>
      </div>
    </>
  );
}

export default Inicio;
