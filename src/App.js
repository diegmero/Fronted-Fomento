import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RegistrarEmprendedor from './components/RegistrarEmprendedor';
import EmprendedoresList from './components/EmprendedoresList';
import CrearEvento from './components/CrearEvento';
import VerEventos from './components/VerEventos';
import CrearMercadoCampesino from './components/CrearMercadoCampesino';
import ListarMercados from './components/ListarMercados';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/registrar-emprendedor" element={<RegistrarEmprendedor />} />
          <Route path="/ver-emprendedores" element={<EmprendedoresList />} />
          <Route path="/crear-evento" element={<CrearEvento />} />
          <Route path="/ver-eventos" element={<VerEventos />} />
          <Route path="/crear-mercado-campesino" element={<CrearMercadoCampesino />} />
          <Route path="/listar-mercados" element={<ListarMercados />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;