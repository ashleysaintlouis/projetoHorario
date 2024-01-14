import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItemsCliente";
import "./NavigateBar.css";

const NavigateBar = () => {

  const [clicado, setClicado] = useState(false);
  const navigate = useNavigate();

  const handleClique = () => {
    setClicado(!clicado);
  };

  return (
    <nav className="NavigateBarItems">
      <h1 className="NavigateBar-logo">V&S CROCHETS</h1>

      <div className="menu-icons" onClick={handleClique}>
        <i className={clicado ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul
        className={clicado ? "NavigateBar-menu ativo" : "NavigateBar-menu"}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.URL}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => navigate("/inscrever")}
          >
            Inscrever-se
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/entrar")}
          >
            Entrar
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigateBar;
