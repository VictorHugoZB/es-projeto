import React from 'react';
import './input.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RegisterUser from './pages/RegisterUser';
import RegisterSpecialist from './pages/RegisterSpecialist';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Specialist from './pages/Specialist';
import User from './pages/User';
import Adm from './pages/Adm';
import ProtectedOutlet from './components/ProtectedPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* rotas publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-specialist" element={<RegisterSpecialist />} />
        <Route path="/quiz" element={<Quiz />} />

        <Route element={<ProtectedOutlet neededRole="specialist" />}>
          <Route path="/specialist-page" element={<Specialist />} />
        </Route>

        <Route element={<ProtectedOutlet neededRole="user" />}>
          <Route path="/user-page" element={<User />} />
        </Route>

        <Route element={<ProtectedOutlet neededRole="adm" />}>
          <Route path="/adm-page" element={<Adm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
