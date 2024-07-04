import React from "react";
import "./Visual.css";

function Categoria() {
  const categorias = {
    Alimento: {
      titulo: "Alimentacion en WeFund",
      descripcion:
        "El acceso a una alimentación adecuada es esencial para el bienestar y el desarrollo de las personas. Las fundaciones dedicadas a este sector juegan un papel vital en la lucha contra el hambre y la malnutrición, trabajando incansablemente para asegurar que todos tengan acceso a alimentos nutritivos.",
      imagenUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLxL1yqi5eCZXAB4ltU6YKycjbbRMmT0NrQ&s",
      onStartCampaign: () => {
        alert("Campaña iniciada para Alimento");
      },
    },
    Deporte: {
      titulo: "Deporte en WeFund",
      descripcion:
        "El deporte es una herramienta poderosa para la promoción de la salud, la educación y la cohesión social. Las fundaciones dedicadas al deporte trabajan incansablemente para proporcionar oportunidades deportivas a comunidades de todas las edades y orígenes, fomentando el bienestar físico y emocional, así como valores como el trabajo en equipo, la disciplina y el respeto.",
      imagenUrl:
        "https://blog.vicensvives.com/wp-content/uploads/2021/09/La-importancia-del-deporte.jpg",
      onStartCampaign: () => {
        alert("Campaña iniciada para Deporte");
      },
    },
    Educacion: {
      titulo: "Educación en WeFund",
      descripcion:
        "En el corazón de toda sociedad próspera se encuentra el pilar fundamental de la educación. Las fundaciones dedicadas a este sector juegan un papel crucial en la transformación de comunidades, proporcionando acceso a oportunidades educativas y recursos que pueden cambiar vidas.",
      imagenUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OanKTg-0_XMLPAyM1OT0gzRCnt-U1yR6SA&s",
      onStartCampaign: () => {
        alert("Campaña iniciada para Educación");
      },
    },
    Salud: {
      titulo: "Salud en WeFund",
      descripcion:
        "La salud es un derecho fundamental y una piedra angular para el desarrollo de comunidades prósperas. Las fundaciones dedicadas al sector de la salud desempeñan un papel esencial en la mejora del bienestar y la calidad de vida de las personas, especialmente en comunidades vulnerables.",
      imagenUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNUVdEU3PqdkDc75qxaPcpo_DzLeIiIT_Ow&s",
      onStartCampaign: () => {
        alert("Campaña iniciada para Salud");
      },
    },
    Vestimenta: {
      titulo: "Vestimenta en WeFund",
      descripcion:
        "La vestimenta adecuada es una necesidad básica que contribuye significativamente al bienestar y la dignidad de las personas. Las fundaciones dedicadas a proporcionar ropa trabajan para garantizar que todos tengan acceso a vestimenta adecuada, sin importar su situación socioeconómica.",
      imagenUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEcYHUL2vkha5G9TLlxOiFDlmAJW73OoOTg&s",
      onStartCampaign: () => {
        alert("Campaña iniciada para Vestimenta");
      },
    },
  };

  const categoriaSeleccionada = "Vestimenta"; // Cambia esta línea para cambiar la categoría mostrada

  const handleStartCampaign = () => {
    categorias[categoriaSeleccionada].onStartCampaign();
  };

  return (
    <>
    <div className="container">
      <a href="#" className="back-button">
        ← Todas las categorías
      </a>
      <h1>{categorias[categoriaSeleccionada].titulo}</h1>
      <p>{categorias[categoriaSeleccionada].descripcion}</p>
      <div className="button-container">
        <button onClick={handleStartCampaign} className="start-campaign-button">
          Iniciar una recaudación
        </button>
      </div>
      <div className="campaign-info">
        <p>{categorias[categoriaSeleccionada].descripcion}</p>
      </div>
      <div className="image-container">
        <img src={categorias[categoriaSeleccionada].imagenUrl} alt="Fundraising" />
      </div>
    </div>
    </>
  );
}

export default Categoria;