import React, { useState } from 'react';

const Idea: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `mailto:jesus.alvarado@correo.unimet.edu.ve?subject=Consulta&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
      <header className="mb-8">
        <span className="text-green-500 font-bold text-2xl">Wefund</span>
      </header>

      <section className="mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold mb-4">Misión</h3>
          <p>
            Empoderar a las personas para que transformen el mundo a través de la acción colectiva y la generosidad.
            Aspiramos a ser la plataforma líder para conectar a individuos, comunidades e instituciones con causas que les apasionan, facilitando la realización de donaciones de manera transparente, segura y eficiente.
          </p>
        </div>
        <img
          src="https://www.fundacionmapfre.org/media/blog/fundaciones-comunitarias-1194x585-1.jpg"
          alt="Misión image"
          className="w-full md:w-1/2 h-48 md:h-64 object-cover mb-4 md:mb-0 md:ml-4"
        />
      </section>

      <section className="mb-8 flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold mb-4">Visión</h3>
          <p>
            Un mundo donde cada persona tiene la oportunidad de contribuir a un futuro mejor.
            En WeFund, envisionamos un mundo donde la filantropía es accesible para todos y donde cada donación, sin importar su tamaño, tiene el poder de generar un impacto positivo y duradero.
            Nos esforzamos por crear un ecosistema donde la generosidad florezca, impulsada por la tecnología y la innovación, para que juntos podamos construir un mundo más equitativo, sostenible y compasivo.
          </p>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.7BYbVpwJJxSdHt4IfICyCgHaDT?rs=1&pid=ImgDetMain"
          alt="Visión image"
          className="w-full md:w-1/2 h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-4"
        />
      </section>

      <section className="mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-bold mb-4">Valores</h3>
          <p>
            Confianza: Nos comprometemos a operar con transparencia e integridad, ganándonos la confianza de nuestros usuarios y socios.
            Impacto: Centramos nuestros esfuerzos en facilitar donaciones que generen un impacto tangible y medible en las causas que más importan.
            Accesibilidad: Creemos que la filantropía debe ser accesible para todos, independientemente de su origen o nivel socioeconómico.
            Comunidad: Fomentamos un sentido de comunidad entre nuestros usuarios, conectándolos entre sí y con las causas que apoyan.
            Innovación: Estamos constantemente buscando nuevas formas de mejorar la experiencia del usuario y optimizar el impacto de las donaciones.
          </p>
        </div>
        <img
          src="https://th.bing.com/th/id/R.41dc9da24b133fbf71fbab53ce2e69a8?rik=bxk1y0MRiLNzXQ&pid=ImgRaw&r=0"
          alt="Valores image"
          className="w-full md:w-1/2 h-48 md:h-64 object-cover mb-4 md:mb-0 md:ml-4"
        />
      </section>

      <div className="w-full py-4 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Tienes alguna duda?</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <textarea
            className="w-full max-w-lg p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Escribe tu duda aquí..."
            value={message}
            onChange={handleInputChange}
            rows={6}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Enviar
          </button>
        </form>
      </div>

      <footer className="w-full mt-8 py-4 bg-green-500 text-white text-center">
        <p className="font-bold mb-2">Contacta a los desarrolladores:</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <p>Maria Cuervo <a href="mailto:mcuervo@correo.unimet.edu.ve" className="text-white hover:underline">mcuervo@correo.unimet.edu.ve</a></p>
          <p>Jesus Alvarado <a href="mailto:jesus.alvarado@correo.unimet.edu.ve" className="text-white hover:underline">jesus.alvarado@correo.unimet.edu.ve</a></p>
          <p>Andrea Pinto <a href="mailto:andrea.pinto@correo.unimet.edu.ve" className="text-white hover:underline">andrea.pinto@correo.unimet.edu.ve</a></p>
          <p>Rodrigo Egaña <a href="mailto:regana@correo.unimet.edu.ve" className="text-white hover:underline">regana@correo.unimet.edu.ve</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Idea;