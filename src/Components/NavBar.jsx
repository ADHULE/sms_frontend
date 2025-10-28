import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaPlus, FaSearch } from "react-icons/fa"; // Icônes FontAwesome
import "../Styles/Nav.scss"; // ton fichier de style personnalisé (optionnel)

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={() => navigate("/")}
        >
          <FaHome className="me-2" />
          MyCompany
        </a>

        {/* Bouton responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={() => navigate("/")}
              >
                <FaHome className="me-1" /> Accueil
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={() => navigate("/listEmployees")}
              >
                <FaUsers className="me-1" /> Employés
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={() => navigate("/add-employee")}
              >
                <FaPlus className="me-1" /> Ajouter
              </button>
            </li>
          </ul>

          {/* Barre de recherche (optionnelle) */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-4"
              type="search"
              placeholder="Rechercher..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
