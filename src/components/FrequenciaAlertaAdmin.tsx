import { AlertCircle, ClockAlert } from 'lucide-react';
import './FrequenciaAlertaAdmin.css';

export interface FrequenciaAdminData {
  dataReferencia: string;
  atualizadoEm: string;
  origem: string;
  presentes: number;
  atrasos: number;
  faltas: number;
  percentualPresentes: string;
  percentualAtrasos: string;
  percentualFaltas: string;
}

export interface AlertaAdmin {
  id: number | string;
  titulo: string;
  descricao: string;
  severidade?: string;
}

interface FrequenciaAlertaAdminProps {
  frequencia: FrequenciaAdminData;
  alertas: AlertaAdmin[];
  carregando: boolean;
}

export function FrequenciaAlertaAdmin({
  frequencia,
  alertas,
  carregando,
}: FrequenciaAlertaAdminProps) {
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

  return (
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
  );
}