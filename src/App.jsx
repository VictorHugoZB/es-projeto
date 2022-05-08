import React from 'react';
import './input.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RegisterUser from './pages/RegisterUser';
import RegisterSpecialist from './pages/RegisterSpecialist';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* rotas publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-specialist" element={<RegisterSpecialist />} />

      </Route>
    </Routes>
  );
}

export default App;
