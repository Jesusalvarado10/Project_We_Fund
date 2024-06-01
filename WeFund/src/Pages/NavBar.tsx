import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldExpandNavbar = window.scrollY !== 0;
      setNavbarExpanded(shouldExpandNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 3,
      src: "Nosotros",
    },
    {
      id: 4,
      src: "Registrarse",
    },
  ];
  const lonks = [
    {
      id: 1,
      src: "Voluntariado",
    },
    {
      id: 2,
      src: "Contribucion",
    },
  ];

  return (
    <div
      className={`max-w-screen-xl mx-auto top-2 h-20 border border-x-cyan-100 rounded-[300px] z-50 shadow-md ${
        navbarExpanded ? "h-full" : ""
      }`}
      style={{
        marginTop: "20px",
        backgroundColor: "white",
        transition: "height 0.3s",
      }}
    >
      <div className="h-[100%] flex items-center pl-4">
        <div
          className={`flex items-center justify-evenly w-[80%] ${
            navbarExpanded ? "w-full" : ""
          }`}
        >
          {lonks.map((link) => (
            <Link
              className="cursor-pointer"
              to={`/${link.id}`}
              key={link.id}
            >
              {link.src}
            </Link>
          ))}
        </div>
        <Link to={""} className="titulo">
          WeFund
        </Link>
        <div
          className={`flex items-center justify-evenly w-[80%] ${
            navbarExpanded ? "w-full" : ""
          }`}
        >
          {links.map((link) => (
            <Link
              className="cursor-pointer"
              to={`/${link.id}`}
              key={link.id}
            >
              {link.src}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
