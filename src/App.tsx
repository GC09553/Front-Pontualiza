import { useState } from 'react';
import Login from './pages/Login/Login';
import CadastroFunc from './pages/CadastroFunc/cadastroF';
import CadastroEmp from './pages/CadastroEmp/cadastroE';

type Rota = 'login' | 'cadastroFunc' | 'cadastroEmp';

export default function App() {
  const [telaAtual, setTelaAtual] = useState<Rota>('login');

  const navegarPara = (rota: string) => {
    setTelaAtual(rota as Rota);
    window.scrollTo(0, 0); // Sobe a rolagem ao trocar de tela
  };

  return (
    <>
      {telaAtual === 'login' && <Login onNavigate={navegarPara} />}
      {telaAtual === 'cadastroFunc' && <CadastroFunc onNavigate={navegarPara} />}
      {telaAtual === 'cadastroEmp' && <CadastroEmp onNavigate={navegarPara} />}
    </>
  );
}