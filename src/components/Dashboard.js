import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const options = [
    { title: 'Registrar Emprendedor', path: '/registrar-emprendedor' },
    { title: 'Ver Emprendedores', path: '/ver-emprendedores' },
    { title: 'Crear Evento', path: '/crear-evento' },
    { title: 'Crear Mercado Campesino', path: '/crear-mercado-campesino' },
    { title: 'Ver Eventos', path: '/ver-eventos' },
  ];

  return (
    <div className="dashboard">
        <div className='headerB'></div>
      <div className="banner">
        <img src="https://villavicencio.gov.co/wp-content/uploads/2024/02/Logo-Alcaldia-Texto-Azul.png" alt="Logo de la Alcaldía" className="logo" />
      </div>
      <h1 className="dashboard-title">Sistema de Gestión Municipal</h1>
      <p>Seleccione una opción para comenzar:</p>
      <div className="dashboard-options">
        {options.map((option, index) => (
          <Link to={option.path} key={index} className="dashboard-option">
            {option.title}
          </Link>
        ))}
      </div>
      <div className="footer-banner">
        <img src="https://historico.villavicencio.gov.co/SliderHome/banner-web.png" alt="Banner de pie de página" className="footer-image" />
      </div>
    </div>
  );
};

export default Dashboard;