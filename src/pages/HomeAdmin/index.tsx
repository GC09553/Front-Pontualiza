import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import { Sidebar } from '../../components/Sidebar/index';
import type { MenuItem } from '../../components/Sidebar/index';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button/index';
import { MetricasAdmin, type MetricasAdminData } from '../../components/MetricasAdmin';
import {
  FrequenciaAlertaAdmin,
  type FrequenciaAdminData,
  type AlertaAdmin,
} from '../../components/FrequenciaAlertaAdmin';
import {
  RegistrosRecentesAdmin,
  type RegistroAdmin,
} from '../../components/RegistrosRecentesAdmin';
import {
  LayoutGrid,
  Users,
  Clock,
  Activity,
  FileBarChart2,
  Settings,
  UserPlus,
  FileSpreadsheet,
} from 'lucide-react';

export function HomeAdmin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    nome: '',
    cargo: '',
  });

  const [metricas, setMetricas] = useState<MetricasAdminData>({
    totalFuncionarios: '-',
    ativos: '-',
    afastados: '-',
    presentesHoje: '-',
    percentualPresentes: '-',
    faltasEAtrasos: '-',
    totalFaltas: '-',
    totalAtrasos: '-',
    horasTrabalhadas: '-',
    horasExtrasHoje: '-',
  });

  const [frequencia, setFrequencia] = useState<FrequenciaAdminData>({
    dataReferencia: '',
    atualizadoEm: '',
    origem: '',
    presentes: 0,
    atrasos: 0,
    faltas: 0,
    percentualPresentes: '0',
    percentualAtrasos: '0',
    percentualFaltas: '0',
  });

  const [alertas, setAlertas] = useState<AlertaAdmin[]>([]);
  const [registros, setRegistros] = useState<RegistroAdmin[]>([]);
  const [filtroSituacao, setFiltroSituacao] = useState<string>('Todos');
  const [filtroSetor, setFiltroSetor] = useState<string>('Todos');
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erroApi, setErroApi] = useState<string | null>(null);

  const menuAdmin: MenuItem[] = [
    { label: 'Visão geral', icon: <LayoutGrid size={20} />, ativo: true, onClick: () => navigate('/admin') },
    { label: 'Funcionários', icon: <Users size={20} />, onClick: () => navigate('/admin') },
    { label: 'Registros de ponto', icon: <Clock size={20} />, onClick: () => navigate('/admin') },
    { label: 'Frequência', icon: <Activity size={20} />, onClick: () => navigate('/admin') },
    { label: 'Relatórios', icon: <FileBarChart2 size={20} />, onClick: () => navigate('/admin') },
    { label: 'Configurações', icon: <Settings size={20} />, onClick: () => navigate('/funcionario') },
  ];

  const carregarDadosAdmin = useCallback(async () => {
    setCarregando(true);
    setErroApi(null);

    try {
      const params = new URLSearchParams();
      if (filtroSetor !== 'Todos') params.set('setor', filtroSetor);
      if (filtroSituacao !== 'Todos') params.set('situacao', filtroSituacao);

      const query = params.toString() ? `?${params.toString()}` : '';
      // Troque pela URL real da sua API
      const response = await fetch(`http://localhost:3000/api/admin/dashboard${query}`);

      if (!response.ok) {
        throw new Error('Falha na requisição');
      }

      const dados = await response.json();

      if (dados.admin) setAdmin(dados.admin);
      if (dados.metricas) setMetricas(dados.metricas);
      if (dados.frequencia) setFrequencia(dados.frequencia);
      if (Array.isArray(dados.alertas)) setAlertas(dados.alertas);
      if (Array.isArray(dados.registros)) setRegistros(dados.registros);
    } catch {
      setErroApi('Não foi possível carregar os dados da API.');
    } finally {
      setCarregando(false);
    }
  }, [filtroSetor, filtroSituacao]);

  useEffect(() => {
    carregarDadosAdmin();
  }, [carregarDadosAdmin]);

  const primeiroNome = admin.nome ? admin.nome.split(' ')[0] : 'Admin';

  return (
    <div className="app-container">
      <Sidebar itens={menuAdmin} onSair={() => console.log('Sair do Admin')} />

      <div className="conteudo-wrapper">
        <Navbar
          titulo="Painel Administrativo"
          nome={admin.nome || '-'}
          cargo={admin.cargo || '-'}
        />

        <main className="admin-main">
          <div className="admin-topo">
            <header className="saudacao">
              <h1>Olá, {carregando && !admin.nome ? '...' : primeiroNome}! 👋</h1>
              <p>Acompanhe a jornada da equipe e mantenha a gestão em dia.</p>
              {erroApi && (
                <span style={{ fontSize: '12px', color: '#dc2626', display: 'block', marginTop: '6px' }}>
                  {erroApi}
                </span>
              )}
            </header>

            <div className="admin-acoes">
              <Button
                className="btn-admin-primario"
                onClick={() => console.log('Abrir modal cadastrar funcionário')}
              >
                <UserPlus size={16} />
                <span>Cadastrar funcionário</span>
              </Button>

              <Button
                className="btn-admin-secundario"
                onClick={() => console.log('Gerar relatório')}
              >
                <FileSpreadsheet size={16} />
                <span>Gerar relatório</span>
              </Button>
            </div>
          </div>

          <MetricasAdmin metricas={metricas} carregando={carregando} />

          <FrequenciaAlertaAdmin
        frequencia={frequencia}
        alertas={alertas}
        carregando={carregando}

        />

          <RegistrosRecentesAdmin
            registros={registros}
            filtroSetor={filtroSetor}
            filtroSituacao={filtroSituacao}
            carregando={carregando}
            onChangeSetor={setFiltroSetor}
            onChangeSituacao={setFiltroSituacao}
          />

          <footer className="admin-footer">
            <span>©️ 2026 Pontualiza · Eficiência em foco</span>
            <span>Privacidade e segurança</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default HomeAdmin;