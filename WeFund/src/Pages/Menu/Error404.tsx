import React from 'react';

const Error404: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Error 404</h1>
            <p className="text-xl text-gray-600 mb-8">La página que estás buscando no se encontró.</p>
            <a href="/" className="text-lg text-green-500 hover:underline">Volver al inicio</a>
        </div>
    );
}

export default Error404;