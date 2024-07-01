import React from "react";
import './Visual.css';


function CategoriaSalud(){
    const handleStartCampaign = () => {
        alert("Campaña iniciada");
      };

    return (
        <>
           <div className="container">
            <a href="#" className="back-button">← Todas las categorías</a>
            <h1>Salud en WeFund</h1>
            <p>La salud es un derecho fundamental y una piedra angular para el desarrollo de comunidades prósperas. Las fundaciones dedicadas al sector de la salud desempeñan un papel esencial en la mejora del bienestar y la calidad de vida de las personas, especialmente en comunidades vulnerables. A través de programas y proyectos innovadores, estas organizaciones abordan una amplia gama de desafíos sanitarios, promoviendo la prevención, el tratamiento y la investigación en salud.</p>
            <div className="button-container">
                <button onClick={handleStartCampaign} className="start-campaign-button">
                Iniciar una recaudación
                </button>
            </div>
            <div className="campaign-info">
                <p>Las fundaciones dedicadas a la salud son agentes de cambio cruciales en la lucha por un mundo más saludable y equitativo. A través de la implementación de programas de atención y prevención, el apoyo a la investigación y el desarrollo, y la provisión de asistencia directa a los pacientes, estas organizaciones transforman vidas y fortalecen comunidades.</p>
            </div>
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNUVdEU3PqdkDc75qxaPcpo_DzLeIiIT_Ow&s" alt="Fundraising" />
            </div>
            </div>
        </>
    )

}

export default CategoriaSalud;