import  { useState } from 'react';
import './PerfilFundacion.css';

function PerfilFundacion() {
    const [nombre, setNombre] = useState('Nombre de la Fundación');
    const [apellido, setApellido] = useState('Apellido de la Fundación');
    const [email, setEmail] = useState('contacto@fundacion.org');
    const [contraseña, setContraseña] = useState('xxxx');
    const [pais, setPais] = useState('Venezuela');
    const [telefono, setTelefono] = useState('+123 456 7890');

    return (
        <div className="flex flex-col items-center justify-center w-full px-10 py-5 text-center">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl text-center">
                <div className="p-8 text-center">
                    <h1 className="text-3xl text-purple-800 font-bold mb-4 text-center">Perfil Fundacion</h1>
                    <div className="perfil-content">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIh5_mu0IKqQ0ALsPRnIVKhaL7Ywl1quIrA&s" alt="Foto de perfil" className="perfil-foto" />
                        <button className="perfil-cambiar-foto">Cambiar foto de perfil</button>
                        <h2>Configuración</h2>
                        <p>Actualiza tu información personal</p>
                        <div className="perfil-info">
                            <div className="perfil-info-item">
                                <label>Nombre:</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="perfil-info-item">
                                <label>Apellido:</label>
                                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            </div>
                            <div className="perfil-info-item">
                                <label>Email:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="perfil-info-item">
                                <label>Contraseña:</label>
                                <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                            </div>
                            <div className="perfil-info-item">
                                <label>País:</label>
                                <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
                            </div>
                            <div className="perfil-info-item">
                                <label>Teléfono:</label>
                                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                        </div>
                        <button className="perfil-guardar">Guardar cambios</button>
                        <button className="perfil-eliminar">Eliminar cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerfilFundacion;