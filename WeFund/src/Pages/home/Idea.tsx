import React, { useState } from 'react';

function Idea() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.location.href = `mailto:jesus.alvarado@correo.unimet.edu.ve?subject=Consulta&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
      <span className="text-green-500 font-bold">Wefund</span>
      <h5 className="font-bold">Mision</h5>
      <h1>
        Empoderar a las personas para que transformen el mundo a través de la acción colectiva y la generosidad.
        Aspiramos a ser la plataforma líder para conectar a individuos, comunidades e instituciones con causas que les apasionan, facilitando la realización de donaciones de manera transparente, segura y eficiente.
      </h1>
      <img
        src="https://www.fundacionmapfre.org/media/blog/fundaciones-comunitarias-1194x585-1.jpg"
        alt="Mision image"
        className="w-full h-48 object-cover mb-4"
      />
      <h5 className="font-bold">Vision</h5>
      <h1>
        Un mundo donde cada persona tiene la oportunidad de contribuir a un futuro mejor.
        En WeFund, envisionamos un mundo donde la filantropía es accesible para todos y donde cada donación, sin importar su tamaño, tiene el poder de generar un impacto positivo y duradero.
        Nos esforzamos por crear un ecosistema donde la generosidad florezca, impulsada por la tecnología y la innovación, para que juntos podamos construir un mundo más equitativo, sostenible y compasivo.
      </h1>
      <img
        src="https://th.bing.com/th/id/OIP.7BYbVpwJJxSdHt4IfICyCgHaDT?rs=1&pid=ImgDetMain"
        alt="Vision image"
        className="w-full h-48 object-cover mb-4"
      />
      <h5 className="font-bold">Valores</h5>
      <h1>
        Confianza: Nos comprometemos a operar con transparencia e integridad, ganándonos la confianza de nuestros usuarios y socios.
        Impacto: Centramos nuestros esfuerzos en facilitar donaciones que generen un impacto tangible y medible en las causas que más importan.
        Accesibilidad: Creemos que la filantropía debe ser accesible para todos, independientemente de su origen o nivel socioeconómico.
        Comunidad: Fomentamos un sentido de comunidad entre nuestros usuarios, conectándolos entre sí y con las causas que apoyan.
        Innovación: Estamos constantemente buscando nuevas formas de mejorar la experiencia del usuario y optimizar el impacto de las donaciones.
      </h1>
      <img
        src="https://th.bing.com/th/id/R.41dc9da24b133fbf71fbab53ce2e69a8?rik=bxk1y0MRiLNzXQ&pid=ImgRaw&r=0"
        alt="Valores image"
        className="w-full h-48 object-cover mb-4"
      />
      <h5 className="font-bold">Juntos, en WeFund, podemos marcar la diferencia.</h5>

      {/* Sección de Dudas */}
      <div className="w-full mt-10 py-4 bg-gray-100 text-center">
        <h5 className="font-bold mb-4">¿Tienes alguna duda?</h5>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <textarea
            className="w-full max-w-lg p-2 border border-gray-300 rounded mb-4"
            placeholder="Escribe tu duda aquí..."
            value={message}
            onChange={handleInputChange}
            rows={6}  // Ajuste de la altura del textarea
          />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white font-bold rounded">
            Enviar
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full mt-10 py-4 bg-green-500 text-white text-center">
        <p className="font-bold">Contacta a los desarrolladores:</p>
        <p>Maria Cuervo <a href="mailto:mcuervo@correo.unimet.edu.ve" className="text-white">mcuervo@correo.unimet.edu.ve</a></p>
        <p>Jesus Alvarado <a href="mailto:jesus.alvarado@correo.unimet.edu.ve" className="text-white">jesus.alvarado@correo.unimet.edu.ve</a></p>
        <p>Andrea Pinto <a href="mailto:andrea.pinto@correo.unimet.edu.ve" className="text-white">andrea.pinto@correo.unimet.edu.ve</a></p>
        <p>Rodrigo Egaña <a href="mailto:regana@correo.unimet.edu.ve" className="text-white">regana@correo.unimet.edu.ve</a></p>
      </footer>
    </div>
  );
}

export default Idea;