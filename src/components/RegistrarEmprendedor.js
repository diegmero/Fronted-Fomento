import React, { useState } from 'react';
import axios from 'axios';
import './RegistrarEmprendedor.css';

const RegistrarEmprendedor = () => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Telefono: '',
        NombreDelEmprendimiento: '',
        DescripcionDelEmprendimiento: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos a enviar:', { data: formData });
        try {
          const response = await axios.post('http://localhost:1337/api/emprendedores', {
            data: formData
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          console.log('Emprendedor registrado:', response.data);
          alert('Emprendedor registrado con éxito!');
          // Limpiar el formulario después del registro exitoso
          setFormData({
            Nombre: '',
            Apellido: '',
            Email: '',
            Telefono: '',
            NombreDelEmprendimiento: '',
            DescripcionDelEmprendimiento: ''
          });
        } catch (error) {
          console.error('Error al registrar emprendedor:', error.response ? error.response.data : error.message);
          console.error('Detalles completos del error:', error);
          alert('Error al registrar emprendedor. Por favor, intente de nuevo.');
        }
      };

    return (
        <div className="registrar-emprendedor">
            <h2>Registrar Nuevo Emprendedor</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Nombre"
                    value={formData.Nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                />
                <input
                    type="text"
                    name="Apellido"
                    value={formData.Apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    required
                />
                <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="tel"
                    name="Telefono"
                    value={formData.Telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    required
                />
                <input
                    type="text"
                    name="NombreDelEmprendimiento"
                    value={formData.NombreDelEmprendimiento}
                    onChange={handleChange}
                    placeholder="Nombre del Emprendimiento"
                    required
                />
                <textarea
                    name="DescripcionDelEmprendimiento"
                    value={formData.DescripcionDelEmprendimiento}
                    onChange={handleChange}
                    placeholder="Descripción del Emprendimiento"
                    required
                ></textarea>
                <button type="submit">Registrar Emprendedor</button>
            </form>
        </div>
    );
};

export default RegistrarEmprendedor;