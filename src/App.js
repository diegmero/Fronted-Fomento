import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmprendedoresList from './components/EmprendedoresList';
// aqui voy a importar las rutas para cada opción del dashboard */}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ver-emprendedores" element={<EmprendedoresList />} />
          {/* Aqui agregaré mas rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;