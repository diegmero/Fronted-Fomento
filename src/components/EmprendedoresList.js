import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';

const EmprendedoresList = () => {
  const [emprendedores, setEmprendedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEmprendedores = async () => {
      try {
        setLoading(true);
        const data = await fetchData('/api/emprendedores');
        setEmprendedores(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error('Error fetching emprendedores:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getEmprendedores();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Lista de Emprendedores</h2>
      {emprendedores.length === 0 ? (
        <p>No hay emprendedores para mostrar.</p>
      ) : (
        <ul>
          {emprendedores.map((emprendedor) => (
            <li key={emprendedor.id}>
              {`${emprendedor.Nombre} ${emprendedor.Apellido} - ${emprendedor.NombreDelEmprendimiento}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmprendedoresList;