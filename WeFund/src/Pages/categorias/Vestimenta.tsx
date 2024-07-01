import React from "react";
import './Visual.css';


function Vestimenta(){
    const handleStartCampaign = () => {
        alert("Campaña iniciada");
      };

    return (
        <>
           <div className="container">
            <a href="#" className="back-button">← Todas las categorías</a>
            <h1>Vestimenta en WeFund</h1>
            <p>La vestimenta adecuada es una necesidad básica que contribuye significativamente al bienestar y la dignidad de las personas. Las fundaciones dedicadas a proporcionar ropa trabajan para garantizar que todos tengan acceso a vestimenta adecuada, sin importar su situación socioeconómica. A través de diversas iniciativas y programas, estas organizaciones están comprometidas con mejorar la calidad de vida de las comunidades vulnerables y fomentar un sentido de dignidad y confianza.</p>
            <div className="button-container">
                <button onClick={handleStartCampaign} className="start-campaign-button">
                Iniciar una recaudación
                </button>
            </div>
            <div className="campaign-info">
                <p>Las fundaciones dedicadas a la vestimenta juegan un papel esencial en la construcción de un mundo más justo y equitativo. A través de la provisión de ropa, la educación sobre la importancia de la vestimenta adecuada y el apoyo a la producción textil sostenible, estas organizaciones no solo mejoran la vida de las personas, sino que también promueven la dignidad y el empoderamiento.</p>
            </div>
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEcYHUL2vkha5G9TLlxOiFDlmAJW73OoOTg&s" alt="Fundraising" />
            </div>
            </div>
        </>
    )

}

export default Vestimenta;