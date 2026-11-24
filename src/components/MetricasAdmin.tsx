import './MetricasAdmin.css';

export interface MetricasAdminData {
  totalFuncionarios: string;
  ativos: string;
  afastados: string;
  presentesHoje: string;
  percentualPresentes: string;
  faltasEAtrasos: string;
  totalFaltas: string;
  totalAtrasos: string;
  horasTrabalhadas: string;
  horasExtrasHoje: string;
}

interface MetricasAdminProps {
  metricas: MetricasAdminData;
  carregando: boolean;
}

export function MetricasAdmin({ metricas, carregando }: MetricasAdminProps) {
  return (
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
  );
}