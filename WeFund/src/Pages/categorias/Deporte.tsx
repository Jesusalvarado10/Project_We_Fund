import React from "react";
import './Visual.css';


function Deporte(){
    const handleStartCampaign = () => {
        alert("Campaña iniciada");
      };

    return (
        <>
           <div className="container">
            <a href="#" className="back-button">← Todas las categorías</a>
            <h1>Deporte en WeFund</h1>
            <p>El deporte es una herramienta poderosa para la promoción de la salud, la educación y la cohesión social. Las fundaciones dedicadas al deporte trabajan incansablemente para proporcionar oportunidades deportivas a comunidades de todas las edades y orígenes, fomentando el bienestar físico y emocional, así como valores como el trabajo en equipo, la disciplina y el respeto</p>
            <div className="button-container">
                <button onClick={handleStartCampaign} className="start-campaign-button">
                Iniciar una recaudación
                </button>
            </div>
            <div className="campaign-info">
                <p>Las fundaciones dedicadas al deporte juegan un papel fundamental en la construcción de un mundo más saludable y cohesionado. A través de la provisión de oportunidades deportivas, la educación sobre la importancia del deporte y la inversión en infraestructura y recursos, estas organizaciones no solo mejoran la salud física y emocional de las personas, sino que también fomentan la unidad y el sentido de comunidad.</p>
            </div>
            <div className="image-container">
                <img src="https://blog.vicensvives.com/wp-content/uploads/2021/09/La-importancia-del-deporte.jpg" alt="Fundraising" />
            </div>
            </div>
        </>
    )

}

export default Deporte;