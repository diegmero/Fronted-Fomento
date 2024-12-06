import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListarMercados.css';

const ListarMercados = () => {
  const [mercados, setMercados] = useState([]);

  useEffect(() => {
    const fetchMercados = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/mercados-campesinos');
        setMercados(response.data.data);
      } catch (error) {
        console.error('Error fetching mercados:', error);
      }
    };

    fetchMercados();
  }, []);

  return (
    <div className="listar-mercados">
      <h2>Mercados Campesinos</h2>
      {mercados.length > 0 ? (
        <ul>
          {mercados.map((mercado) => (
            <li key={mercado.id}>
              <h3>{mercado.attributes.Nombre}</h3>
              <p>Fecha: {mercado.attributes.Fecha}</p>
              <p>Ubicación: {mercado.attributes.Ubicacion}</p>
              <p>Organizador: {mercado.attributes.Organizador}</p>
              <p>Descripción: {mercado.attributes.Descripcion}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay mercados campesinos registrados.</p>
      )}
    </div>
  );
};

export default ListarMercados;