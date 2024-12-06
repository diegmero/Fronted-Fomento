import React, { useState } from 'react';
import axios from 'axios';
import './CrearEvento.css';

const CrearEvento = () => {
  const [formData, setFormData] = useState({
    Titulo: '',
    Descripcion: '',
    Fecha: '',
    Hora: '',
    Lugar: '',
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'Hora') {
      // Añadir segundos y milisegundos al formato de hora
      value = value + ':00.000';
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/eventos', {
        data: formData
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Evento creado:', response.data);
      alert('Evento creado con éxito!');
      setFormData({
        Titulo: '',
        Descripcion: '',
        Fecha: '',
        Hora: '',
        Lugar: '',
      });
    } catch (error) {
      console.error('Error al crear evento:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Detalles del error:', error.response.data.error);
      }
      alert('Error al crear evento. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="crear-evento">
      <h2>Crear Nuevo Evento</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Titulo"
          value={formData.Titulo}
          onChange={handleChange}
          placeholder="Título del Evento"
          required
        />
        <textarea
          name="Descripcion"
          value={formData.Descripcion}
          onChange={handleChange}
          placeholder="Descripción del Evento"
          required
        ></textarea>
        <input
          type="date"
          name="Fecha"
          value={formData.Fecha}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="Hora"
          value={formData.Hora.split(':')[0] + ':' + (formData.Hora.split(':')[1] || '00')}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Lugar"
          value={formData.Lugar}
          onChange={handleChange}
          placeholder="Lugar del Evento"
          required
        />
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CrearEvento;