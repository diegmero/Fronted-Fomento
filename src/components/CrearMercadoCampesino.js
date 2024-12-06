import React, { useState } from 'react';
import axios from 'axios';
import './CrearMercadoCampesino.css';

const CrearMercadoCampesino = () => {
  const [formData, setFormData] = useState({
    Fecha: '',
    Hora: '',
    Lugar: '',
    Tiempo: '',
    Descripcion: ''
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'Tiempo') {
      // Asegurarse de que Tiempo sea un número
      value = value === '' ? '' : Number(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        Fecha: formData.Fecha,
        Hora: formData.Hora,
        Lugar: formData.Lugar,
        Tiempo: parseInt(formData.Tiempo), // Asegurarse de que sea un número
        Descripcion: formData.Descripcion
      };
  
      const response = await axios.post('http://localhost:1337/api/mercado-campesinos', {
        data: formattedData
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Mercado Campesino creado:', response.data);
      alert('Mercado Campesino creado con éxito!');
      setFormData({
        Fecha: '',
        Hora: '',
        Lugar: '',
        Tiempo: '',
        Descripcion: ''
      });
    } catch (error) {
      console.error('Error al crear Mercado Campesino:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Detalles del error:', error.response.data.error);
      }
      alert('Error al crear Mercado Campesino. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="crear-mercado-campesino">
      <h2>Crear Nuevo Mercado Campesino</h2>
      <form onSubmit={handleSubmit}>
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
          value={formData.Hora}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Lugar"
          value={formData.Lugar}
          onChange={handleChange}
          placeholder="Lugar del Mercado Campesino"
          required
        />
        <input
          type="number"
          name="Tiempo"
          value={formData.Tiempo}
          onChange={handleChange}
          placeholder="Tiempo de duración (en minutos)"
          required
        />
        <textarea
          name="Descripcion"
          value={formData.Descripcion}
          onChange={handleChange}
          placeholder="Descripción del Mercado Campesino"
          required
        ></textarea>
        <button type="submit">Crear Mercado Campesino</button>
      </form>
    </div>
  );
};

export default CrearMercadoCampesino;