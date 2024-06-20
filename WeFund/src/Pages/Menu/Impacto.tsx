import React from 'react';

function Impacto() {
    // Aquí podrías implementar lógica para obtener datos de impacto y fundaciones
    // Por simplicidad, se mostrará un ejemplo estático

    const impacto = {
        impactoTotal: 5000,
        seguidores: 2000,
        donaciones: 3000
    };

    
    const fundaciones = [
        { nombre: 'Fundación A', descripcion: 'Fundación para la ayuda de niños.' },
        { nombre: 'Fundación B', descripcion: 'Fundación para la ayuda de animales.' },
        { nombre: 'Fundación C', descripcion: 'Fundación para la ayuda de personas mayores.' }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full px-10 py-5">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl">
                <div className="p-8">
                    <h1 className="text-3xl text-green-500 font-bold mb-4">Impacto y Fundaciones</h1>
                    <div className="flex justify-center mt-6">
                    <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none"><a href='/perfil'>Editar Perfil</a></button>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl text-gray-600 mb-2">Impacto del perfil</h2>
                        <p className="text-sm text-gray-500">Aquí puedes ver el impacto que ha tenido tu perfil.</p>
                        <div className="mt-4">
                            <p>Impacto Total: {impacto.impactoTotal}</p>
                            <p>Seguidores: {impacto.seguidores}</p>
                            <p>Donaciones: {impacto.donaciones}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl text-gray-600 mb-2">Fundaciones</h2>
                        <p className="text-sm text-gray-500">Lista de fundaciones vinculadas a tu perfil.</p>
                        <ul className="mt-4 space-y-2">
                            {fundaciones.map((fundacion, index) => (
                                <li key={index}>
                                    <h3 className="text-lg font-semibold">{fundacion.nombre}</h3>
                                    <p className="text-sm text-gray-600">{fundacion.descripcion}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Impacto;