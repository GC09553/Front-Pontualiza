import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import { Sidebar } from '../../components/Sidebar/index';
import type { MenuItem } from '../../components/Sidebar/index';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button/index';
import {
  LayoutGrid,
  Users,
  Clock,
  Activity,
  FileBarChart2,
  Settings,
  UserPlus,
  FileSpreadsheet,
  AlertCircle,
  ClockAlert,
} from 'lucide-react';

interface RegistroAdmin {
  id: number | string;
  funcionario: string;
  setor: string;
  entrada: string;
  saida: string;
  situacao: string;
  horas: string;
}

interface AlertaAdmin {
  id: number | string;
  titulo: string;
  descricao: string;
  severidade?: string;
}

export function HomeAdmin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    nome: '',
    cargo: '',
  });

  const [metricas, setMetricas] = useState({
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

  const [frequencia, setFrequencia] = useState({
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

  const totalFrequencia =
    Number(frequencia.presentes || 0) +
    Number(frequencia.atrasos || 0) +
    Number(frequencia.faltas || 0);

  const larguraPresentes =
    totalFrequencia > 0 ? `${(Number(frequencia.presentes) / totalFrequencia) * 100}%` : '0%';
  const larguraAtrasos =
    totalFrequencia > 0 ? `${(Number(frequencia.atrasos) / totalFrequencia) * 100}%` : '0%';
  const larguraFaltas =
    totalFrequencia > 0 ? `${(Number(frequencia.faltas) / totalFrequencia) * 100}%` : '0%';

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

          <section className="metricas-grid">
            <div className="card metric-card">
              <div className="metric-header">
                <span>Funcionários</span>
                <span className="status-dot dot-azul"></span>
              </div>
              <strong className="metric-valor">
                {carregando ? '...' : metricas.totalFuncionarios}
              </strong>
              <span className="metric-sub">
                {carregando ? '-' : `${metricas.ativos} ativos · ${metricas.afastados} afastados`}
              </span>
            </div>

            <div className="card metric-card">
              <div className="metric-header">
                <span>Presentes hoje</span>
                <span className="status-dot dot-verde-metric"></span>
              </div>
              <strong className="metric-valor">
                {carregando ? '...' : metricas.presentesHoje}
              </strong>
              <span className="metric-sub">
                {carregando ? '-' : `${metricas.percentualPresentes} da equipe`}
              </span>
            </div>

            <div className="card metric-card">
              <div className="metric-header">
                <span>Faltas e atrasos</span>
                <span className="status-dot dot-amarelo"></span>
              </div>
              <strong className="metric-valor">
                {carregando ? '...' : metricas.faltasEAtrasos}
              </strong>
              <span className="metric-sub">
                {carregando ? '-' : `${metricas.totalFaltas} faltas · ${metricas.totalAtrasos} atrasos`}
              </span>
            </div>

            <div className="card metric-card">
              <div className="metric-header">
                <span>Horas trabalhadas</span>
                <span className="status-dot dot-azul"></span>
              </div>
              <strong className="metric-valor">
                {carregando ? '...' : metricas.horasTrabalhadas}
              </strong>
              <span className="metric-sub">
                {carregando ? '-' : metricas.horasExtrasHoje}
              </span>
            </div>
          </section>

          <section className="meio-grid">
            <div className="card frequencia-card">
              <div className="bloco-header">
                <h3>Frequência de hoje</h3>
                <span className="data-referencia">{frequencia.dataReferencia || '-'}</span>
              </div>

              <div className="barra-frequencia">
                <div className="barra-segmento seg-presentes" style={{ width: larguraPresentes }} />
                <div className="barra-segmento seg-atrasos" style={{ width: larguraAtrasos }} />
                <div className="barra-segmento seg-faltas" style={{ width: larguraFaltas }} />
              </div>

              <div className="legenda-frequencia">
                <div className="legenda-item">
                  <span className="status-dot dot-verde-metric"></span>
                  <span>Presentes</span>
                  <strong>
                    {carregando ? '-' : `${frequencia.presentes} · ${frequencia.percentualPresentes}%`}
                  </strong>
                </div>

                <div className="legenda-item">
                  <span className="status-dot dot-amarelo"></span>
                  <span>Atrasos</span>
                  <strong>
                    {carregando ? '-' : `${frequencia.atrasos} · ${frequencia.percentualAtrasos}%`}
                  </strong>
                </div>

                <div className="legenda-item">
                  <span className="status-dot dot-vermelho"></span>
                  <span>Faltas</span>
                  <strong>
                    {carregando ? '-' : `${frequencia.faltas} · ${frequencia.percentualFaltas}%`}
                  </strong>
                </div>
              </div>

              <p className="rodape-info">
                {[frequencia.atualizadoEm, frequencia.origem].filter(Boolean).join(' · ') || '-'}
              </p>
            </div>

            <div className="card alertas-card">
              <div className="bloco-header">
                <h3>Alertas e pendências</h3>
                <span className="alertas-count">{alertas.length}</span>
              </div>

              <div className="alertas-lista">
                {carregando ? (
                  <span className="rodape-info">Carregando alertas...</span>
                ) : alertas.length === 0 ? (
                  <span className="rodape-info">Nenhum alerta no momento.</span>
                ) : (
                  alertas.map((alerta) => {
                    const isCritico = alerta.severidade === 'critico';
                    return (
                      <div
                        key={alerta.id}
                        className={`alerta-item ${isCritico ? 'alerta-vermelho' : 'alerta-amarelo'}`}
                      >
                        {isCritico ? (
                          <AlertCircle size={16} className="alerta-icone-vermelho" />
                        ) : (
                          <ClockAlert size={16} className="alerta-icone-amarelo" />
                        )}
                        <div>
                          <strong>{alerta.titulo}</strong>
                          <span>{alerta.descricao}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>

          <section className="card tabela-admin-card">
            <div className="tabela-topo">
              <h3>Registros recentes</h3>

              <div className="filtros-grupo">
                <select
                  aria-label="Filtrar por setor"
                  value={filtroSetor}
                  onChange={(e) => setFiltroSetor(e.target.value)}
                  className="filtro-select"
                >
                  <option value="Todos">Setor: Todos</option>
                  <option value="Design">Design</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Operações">Operações</option>
                </select>

                <select
                  aria-label="Filtrar por situação"
                  value={filtroSituacao}
                  onChange={(e) => setFiltroSituacao(e.target.value)}
                  className="filtro-select"
                >
                  <option value="Todos">Situação: Todos</option>
                  <option value="Pontual">Pontual</option>
                  <option value="Atraso">Atraso</option>
                  <option value="Falta">Falta</option>
                </select>

                <a href="#todos-registros" className="link-ver-todos">
                  Ver todos →
                </a>
              </div>
            </div>

            <div className="tabela-responsiva">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Funcionário</th>
                    <th>Setor</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th>Situação</th>
                    <th>Horas</th>
                  </tr>
                </thead>
                <tbody>
                  {carregando ? (
                    <tr>
                      <td colSpan={6} className="tabela-vazia">
                        Carregando registros...
                      </td>
                    </tr>
                  ) : registros.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="tabela-vazia">
                        Nenhum registro encontrado.
                      </td>
                    </tr>
                  ) : (
                    registros.map((item) => {
                      const classeBadge = item.situacao
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');

                      return (
                        <tr key={item.id}>
                          <td className="col-nome">{item.funcionario}</td>
                          <td>{item.setor}</td>
                          <td>{item.entrada}</td>
                          <td>{item.saida}</td>
                          <td>
                            <span className={`badge-situacao badge-${classeBadge}`}>
                              {item.situacao}
                            </span>
                          </td>
                          <td>{item.horas}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </section>

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