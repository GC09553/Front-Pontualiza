
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortalPontualiza from './pages/Home/telaInicial/tela.js';
import { HomeFuncionario } from './pages/HomeFuncionario';
import { HomeAdmin } from './pages/HomeAdmin';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalPontualiza />} />
        <Route path="/funcionario" element={<HomeFuncionario />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

import { useState } from 'react';
import Login from './pages/Login/Login';
import CadastroFunc from './pages/CadastroFunc/cadastroF';
import CadastroEmp from './pages/CadastroEmp/cadastroE';

type Rota = 'login' | 'cadastroFunc' | 'cadastroEmp';


export default function App() {
  const [telaAtual, setTelaAtual] = useState<Rota>('login');

  const navegarPara = (rota: string) => {
    setTelaAtual(rota as Rota);
    window.scrollTo(0, 0); 
  };

  return (
    <>
      {telaAtual === 'login' && <Login onNavigate={navegarPara} />}
      {telaAtual === 'cadastroFunc' && <CadastroFunc onNavigate={navegarPara} />}
      {telaAtual === 'cadastroEmp' && <CadastroEmp onNavigate={navegarPara} />}
    </>
  );
}