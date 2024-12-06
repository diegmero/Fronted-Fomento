import React, { useState, useEffect } from 'react';
import './VerEventos.css';

const VerEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        console.log('Iniciando la solicitud a la API...');
        const response = await fetch('http://localhost:1337/api/eventos');
        const data = await response.json();
        console.log('Datos de la API:', data);
        
        if (data && data.data) {
          setEventos(data.data);
          console.log('Eventos establecidos:', data.data);
        } else {
          console.error('La respuesta de la API no tiene la estructura esperada:', data);
          setError('La respuesta de la API no tiene el formato esperado.');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching eventos:', error);
        setError('Hubo un error al cargar los eventos. Por favor, intente de nuevo más tarde.');
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  console.log('Estado actual de eventos:', eventos);

  if (loading) return <div>Cargando eventos...</div>;
  if (error) return <div>{error}</div>;

  console.log('Intentando renderizar eventos:', eventos);
  return (
    <div className="ver-eventos">
      <h2>Lista de Eventos</h2>
      {eventos.length === 0 ? (
        <p>No hay eventos para mostrar.</p>
      ) : (
        <ul className="eventos-list">
          {eventos.map((evento) => {
            console.log('Renderizando evento:', evento);
            return (
              <li key={evento.id} className="evento-item">
                <h3>{evento.Titulo || 'Sin título'}</h3>
                <p>Fecha: {evento.Fecha ? new Date(evento.Fecha).toLocaleDateString() : 'No especificada'}</p>
                <p>Hora: {evento.Hora || 'No especificada'}</p>
                <p>Lugar: {evento.Lugar || 'No especificado'}</p>
                <p>Descripción: {evento.Descripcion || 'Sin descripción'}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default VerEventos;