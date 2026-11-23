import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import CadastroFunc from './pages/CadastroFunc/cadastroF';
import CadastroEmp from './pages/CadastroEmp/cadastroE';
import { HomeFuncionario } from './pages/HomeFuncionario';
import { HomeAdmin } from './pages/HomeAdmin';

function LoginWrapper() {
  const navigate = useNavigate();
  const navegarPara = (rota: string) => {
    const mapaRotas: Record<string, string> = {
      login: '/',
      cadastroFunc: '/cadastro-funcionario',
      cadastroEmp: '/cadastro-empresa',
      funcionario: '/funcionario',
      admin: '/admin',
    };
    navigate(mapaRotas[rota] || '/');
    window.scrollTo(0, 0);
  };
  return <Login onNavigate={navegarPara} />;
}

function CadastroFuncWrapper() {
  const navigate = useNavigate();
  const navegarPara = (rota: string) => {
    navigate(rota === 'login' ? '/' : `/${rota}`);
    window.scrollTo(0, 0);
  };
  return <CadastroFunc onNavigate={navegarPara} />;
}

function CadastroEmpWrapper() {
  const navigate = useNavigate();
  const navegarPara = (rota: string) => {
    navigate(rota === 'login' ? '/' : `/${rota}`);
    window.scrollTo(0, 0);
  };
  return <CadastroEmp onNavigate={navegarPara} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncWrapper />} />
        <Route path="/cadastro-empresa" element={<CadastroEmpWrapper />} />
        <Route path="/funcionario" element={<HomeFuncionario />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
