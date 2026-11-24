import { useState } from 'react';
import './styles.css';

import { Sidebar } from '../../components/Sidebar/index';
import type { MenuItem } from '../../components/Sidebar/index';
import { Navbar } from '../../components/Navbar';
import { PainelPontoFuncionario } from '../../components/PainelPontoFuncionario';
import {
  HistoricoPontoFuncionario,
  type RegistroPonto,
} from '../../components/HistoricoPontoFuncionario';
import {
  Home as HomeIcon,
  Clock,
  Calendar,
  FileText,
  UserRound,
} from 'lucide-react';

export function HomeFuncionario() {
  const [funcionario] = useState({ nome: 'Funcionário', cargo: 'Operacional' });
  const [resumo, setResumo] = useState({
    ultimaEntrada: '-',
    ultimaSaida: '-',
    horasDia: '-',
    diasTrabalhados: '-',
    ultimoRegistroTexto: '-',
  });
  const [registros, setRegistros] = useState<RegistroPonto[]>([]);
  const [dataSelecionada, setDataSelecionada] = useState<any>(new Date());

  const menuFuncionario: MenuItem[] = [
    { label: 'Início', icon: <HomeIcon size={20} />, ativo: true },
    { label: 'Meu ponto', icon: <Clock size={20} /> },
    { label: 'Calendário', icon: <Calendar size={20} /> },
    { label: 'Histórico', icon: <FileText size={20} /> },
    { label: 'Perfil', icon: <UserRound size={20} /> },
  ];

  const handleRegistrarPonto = () => {
    const agora = new Date();
    const horario = agora.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const data = agora.toLocaleDateString('pt-BR');
    const tipo = registros.length % 2 === 0 ? 'Entrada' : 'Saída';

    const novoRegistro: RegistroPonto = {
      tipo,
      horario,
      data,
      status: 'Confirmado',
      horas: '-',
    };

    setRegistros([novoRegistro, ...registros]);
    setResumo((prev) => ({
      ...prev,
      ultimaEntrada: tipo === 'Entrada' ? horario : prev.ultimaEntrada,
      ultimaSaida: tipo === 'Saída' ? horario : prev.ultimaSaida,
      ultimoRegistroTexto: `${tipo} às ${horario}`,
    }));
  };

  return (
    <div className="app-container">
      <Sidebar itens={menuFuncionario} onSair={() => console.log('Sair')} />

      <div className="conteudo-wrapper">
        <Navbar
          titulo="Área do Funcionário"
          nome={funcionario.nome}
          cargo={funcionario.cargo}
        />

        <main className="main-content">
          <header className="saudacao">
            <h1>Olá, {funcionario.nome.split(' ')[0]}! 👋</h1>
            <p>Bons resultados começam com um bom controle de ponto.</p>
          </header>

          <div className="dashboard-grid">
            <PainelPontoFuncionario
              resumo={resumo}
              onRegistrarPonto={handleRegistrarPonto}
            />

            <HistoricoPontoFuncionario
              registros={registros}
              dataSelecionada={dataSelecionada}
              onChangeData={setDataSelecionada}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomeFuncionario;