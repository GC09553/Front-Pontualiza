import CalendarView from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './HistoricoPontoFuncionario.css';

export interface RegistroPonto {
  tipo: string;
  horario: string;
  data: string;
  status: string;
  horas?: string;
}

interface HistoricoPontoFuncionarioProps {
  registros: RegistroPonto[];
  dataSelecionada: any;
  onChangeData: (value: any) => void;
}

export function HistoricoPontoFuncionario({
  registros,
  dataSelecionada,
  onChangeData,
}: HistoricoPontoFuncionarioProps) {
  return (
    <div className="col-direita">
      <div className="card card-calendario-wrapper">
        <CalendarView
          onChange={onChangeData}
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
                  <td
                    colSpan={5}
                    style={{ textAlign: 'center', color: '#9ca3af', padding: '20px' }}
                  >
                    Nenhum registro encontrado.
                  </td>
                </tr>
              ) : (
                registros.map((reg, index) => (
                  <tr key={index}>
                    <td>{reg.tipo}</td>
                    <td>{reg.horario}</td>
                    <td>{reg.data}</td>
                    <td>
                      <span className="badge">{reg.status}</span>
                    </td>
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
  );
}