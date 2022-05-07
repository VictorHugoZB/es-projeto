import React from 'react';
import './input.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RegisterUser from './pages/RegisterUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register-user" element={<RegisterUser />} />
      </Route>
    </Routes>
  );
}

export default App;
