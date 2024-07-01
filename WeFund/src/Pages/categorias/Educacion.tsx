import React from "react";
import './Visual.css';


function Educación(){
    const handleStartCampaign = () => {
        alert("Campaña iniciada");
      };

    return (
        <>
           <div className="container">
            <a href="#" className="back-button">← Todas las categorías</a>
            <h1>Educación en WeFund</h1>
            <p>En el corazón de toda sociedad próspera se encuentra el pilar fundamental de la educación. Las fundaciones dedicadas a este sector juegan un papel crucial en la transformación de comunidades, proporcionando acceso a oportunidades educativas y recursos que pueden cambiar vidas. A través de una variedad de programas y iniciativas, estas organizaciones trabajan incansablemente para garantizar que el aprendizaje de calidad esté al alcance de todos, sin importar su origen socioeconómico.</p>
            <div className="button-container">
                <button onClick={handleStartCampaign} className="start-campaign-button">
                Iniciar una recaudación
                </button>
            </div>
            <div className="campaign-info">
                <p>Aporta tu granito de arena y proporciona acceso a oportunidades educativas de calidad, transformando la vida de individuos y fortaleciendo las bases de sociedades más justas y resilientes</p>
            </div>
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OanKTg-0_XMLPAyM1OT0gzRCnt-U1yR6SA&s" alt="Fundraising" />
            </div>
            </div>
        </>
    )

}

export default Educación;