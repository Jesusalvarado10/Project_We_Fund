import React from "react";
import './Visual.css';


function Alimento(){
    const handleStartCampaign = () => {
        alert("Campaña iniciada");
      };

    return (
        <>
           <div className="container">
            <a href="#" className="back-button">← Todas las categorías</a>
            <h1>Alimentacion en WeFund</h1>
            <p>El acceso a una alimentación adecuada es esencial para el bienestar y el desarrollo de las personas. Las fundaciones dedicadas a este sector juegan un papel vital en la lucha contra el hambre y la malnutrición, trabajando incansablemente para asegurar que todos tengan acceso a alimentos nutritivos. A través de una variedad de programas e iniciativas, estas organizaciones están comprometidas con la creación de comunidades más saludables y resilientes.</p>
            <div className="button-container">
                <button onClick={handleStartCampaign} className="start-campaign-button">
                Iniciar una recaudación
                </button>
            </div>
            <div className="campaign-info">
                <p>Las fundaciones dedicadas a la alimentación juegan un papel crucial en la construcción de un mundo más justo y saludable. A través de la provisión de alimentos, la educación nutricional, el apoyo a la agricultura sostenible y la colaboración con diversos actores, estas organizaciones no solo combaten el hambre, sino que también promueven el bienestar y la resiliencia de las comunidades. </p>
            </div>
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLxL1yqi5eCZXAB4ltU6YKycjbbRMmT0NrQ&s" alt="Fundraising" />
            </div>
            </div>
        </>
    )

}

export default Alimento;