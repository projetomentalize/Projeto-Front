import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login  from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import SobreNos from './paginas/sobreNos/SobreNos';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobrenos' element={<SobreNos />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;