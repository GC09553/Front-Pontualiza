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

export default App;