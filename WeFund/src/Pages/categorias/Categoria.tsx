
import "./Visual.css";

function Categoria({ categoriaSeleccionada }: { categoriaSeleccionada: string }) {
  const categorias: { [key: string]: {
    titulo: string;
    descripcion: string;
    imagenUrl: string;
    onStartCampaign: () => void;
  } } = {
    Alimentos: {
      titulo: "Alimentacion en WeFund",
      descripcion:
        "El acceso a una alimentación adecuada es esencial para el bienestar y el desarrollo de las personas. Las fundaciones dedicadas a este sector juegan un papel vital en la lucha contra el hambre y la malnutrición, trabajando incansablemente para asegurar que todos tengan acceso a alimentos nutritivos.",
      imagenUrl:
        "https://t1.uc.ltmcdn.com/es/posts/1/4/5/como_mejorar_la_alimentacion_de_mi_familia_33541_orig.jpg",
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
    Educación: {
      titulo: "Educación en WeFund",
      descripcion:
        "En el corazón de toda sociedad próspera se encuentra el pilar fundamental de la educación. Las fundaciones dedicadas a este sector juegan un papel crucial en la transformación de comunidades, proporcionando acceso a oportunidades educativas y recursos que pueden cambiar vidas.",
      imagenUrl:
        "https://www.bbva.com/wp-content/uploads/2023/06/Sostenibilidad-BBVA-Derecho-educacion-social-1024x575.jpg",
      onStartCampaign: () => {
        alert("Campaña iniciada para Educación");
      },
    },
    Salud: {
      titulo: "Salud en WeFund",
      descripcion:
        "La salud es un derecho fundamental y una piedra angular para el desarrollo de comunidades prósperas. Las fundaciones dedicadas al sector de la salud desempeñan un papel esencial en la mejora del bienestar y la calidad de vida de las personas, especialmente en comunidades vulnerables.",
      imagenUrl:
        "https://www.udla.edu.ec/wp-content/uploads/2018/04/imagenblogs5485786-790x340.jpg",
      onStartCampaign: () => {
        alert("Campaña iniciada para Salud");
      },
    },
    Vestimenta: {
      titulo: "Vestimenta en WeFund",
      descripcion:
        "La vestimenta adecuada es una necesidad básica que contribuye significativamente al bienestar y la dignidad de las personas. Las fundaciones dedicadas a proporcionar ropa trabajan para garantizar que todos tengan acceso a vestimenta adecuada, sin importar su situación socioeconómica.",
      imagenUrl:
        "https://media.licdn.com/dms/image/C4E12AQEf4tolhlijBA/article-cover_image-shrink_600_2000/0/1572954681943?e=2147483647&v=beta&t=sGZX5n0m2GxMvsErqTzxE5uWqXSvWMuwN_TUDEburYA",
      onStartCampaign: () => {
        alert("Campaña iniciada para Vestimenta");
      },
    },
  };

   // Cambia esta línea para cambiar la categoría mostrada

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