import { useState, useEffect } from 'react';
import CalendarView from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

import { Sidebar } from '../../components/Sidebar';
import type { MenuItem } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';
import { 
  Home as HomeIcon, Clock, Calendar, FileText, 
  UserRound, LogIn, LogOut 
} from 'lucide-react';

interface RegistroPonto {
  tipo: string;
  horario: string;
  data: string;
  status: string;
  horas?: string;
}

export function HomeFuncionario() {
  const [funcionario] = useState({ nome: 'Funcionário', cargo: 'Operacional' });
  const [resumo, setResumo] = useState({ 
    ultimaEntrada: '-', 
    ultimaSaida: '-', 
    horasDia: '-', 
    diasTrabalhados: '-', 
    ultimoRegistroTexto: '-' 
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
    const horario = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const data = agora.toLocaleDateString('pt-BR');
    const tipo = registros.length % 2 === 0 ? 'Entrada' : 'Saída';

    const novoRegistro: RegistroPonto = {
      tipo,
      horario,
      data,
      status: 'Confirmado',
      horas: '-'
    };

    setRegistros([novoRegistro, ...registros]);
    setResumo(prev => ({
      ...prev,
      ultimaEntrada: tipo === 'Entrada' ? horario : prev.ultimaEntrada,
      ultimaSaida: tipo === 'Saída' ? horario : prev.ultimaSaida,
      ultimoRegistroTexto: `${tipo} às ${horario}`
    }));
  };

  useEffect(() => {}, []);

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
          
            <div className="col-esquerda">
              <div className="card card-ponto">
                <div className="relogio-circulo">
                  <Clock size={28} color="#1e6bb8" />
                </div>
                <h2>Registrar Ponto</h2>
                <p>Registre sua entrada ou saída do dia.</p>
                
                <Button onClick={handleRegistrarPonto}>
                  <span className="dot"></span> Registrar Ponto
                </Button>
              </div>

              <div className="resumo-grid">
                <div className="card card-mini">
                  <span className="mini-titulo"><LogIn size={14} color="#1e6bb8"/> Última entrada</span>
                  <strong className="mini-valor">{resumo.ultimaEntrada}</strong>
                  <span className="mini-data">-</span>
                </div>

                <div className="card card-mini">
                  <span className="mini-titulo"><LogOut size={14} color="#d9534f"/> Última saída</span>
                  <strong className="mini-valor">{resumo.ultimaSaida}</strong>
                  <span className="mini-data">-</span>
                </div>

                <div className="card card-mini">
                  <span className="mini-titulo"><Clock size={14} color="#28a745"/> Horas do dia</span>
                  <strong className="mini-valor">{resumo.horasDia}</strong>
                  <span className="mini-data">Balanço: --</span>
                </div>

                <div className="card card-mini">
                  <span className="mini-titulo"><Calendar size={14} color="#f0ad4e"/> Dias trabalhados</span>
                  <strong className="mini-valor">{resumo.diasTrabalhados}</strong>
                  <span className="mini-data">-</span>
                </div>
              </div>

              <div className="card card-ultimo-registro">
                <p><span className="dot-verde"></span> Último registro: <strong>{resumo.ultimoRegistroTexto}</strong></p>
                <a href="#controle">Ver controle de horário →</a>
              </div>
            </div>

        
            <div className="col-direita">
              <div className="card card-calendario-wrapper">
                <CalendarView 
                  onChange={setDataSelecionada} 
                  value={dataSelecionada} 
                  locale="pt-BR"
                />
              </div>

              <div className="card card-tabela">
                <div className="tabela-header">
                  <h3>Últimos Registros</h3>
                  <a href="#historico">Ver histórico completo →</a>
                </div>
                <div className="tabela-responsiva">
                  <table>
                    <thead>
                      <tr>
                        <th>Tipo</th>
                        <th>Horário</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Horas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registros.length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ textAlign: 'center', color: '#9ca3af', padding: '20px' }}>
                            Nenhum registro encontrado.
                          </td>
                        </tr>
                      ) : (
                        registros.map((reg, index) => (
                          <tr key={index}>
                            <td>{reg.tipo}</td>
                            <td>{reg.horario}</td>
                            <td>{reg.data}</td>
                            <td><span className="badge">{reg.status}</span></td>
                            <td>{reg.horas || '-'}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="tabela-footer">
                  <span>Exibindo {registros.length} registros</span>
                  <a href="#todos">Ver todos →</a>
     </div>
     </div>
     </div>
    </div>
      </main>
    </div>
    </div>
  );
}

export default HomeFuncionario;