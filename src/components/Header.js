import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/registrar-emprendedor">Registrar Emprendedor</Link></li>
          <li><Link to="/ver-emprendedores">Ver Emprendedores</Link></li>
          <li><Link to="/crear-evento">Crear Evento</Link></li>
          <li><Link to="/ver-eventos">Ver Eventos</Link></li>
          <li><Link to="/crear-mercado-campesino">Crear Mercado Campesino</Link></li>
          <li><Link to="/listar-mercados">Ver Mercados</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;