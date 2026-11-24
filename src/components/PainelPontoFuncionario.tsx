import { Clock, LogIn, LogOut, Calendar } from 'lucide-react';
import { Button } from './Button/index';
import './PainelPontoFuncionario.css'

interface ResumoPonto {
  ultimaEntrada: string;
  ultimaSaida: string;
  horasDia: string;
  diasTrabalhados: string;
  ultimoRegistroTexto: string;
}

interface PainelPontoFuncionarioProps {
  resumo: ResumoPonto;
  onRegistrarPonto: () => void;
}

export function PainelPontoFuncionario({
  resumo,
  onRegistrarPonto,
}: PainelPontoFuncionarioProps) {
  return (
    <div className="col-esquerda">
      <div className="card card-ponto">
        <div className="relogio-circulo">
          <Clock size={28} color="#1e6bb8" />
        </div>
        <h2>Registrar Ponto</h2>
        <p>Registre sua entrada ou saída do dia.</p>

        <Button onClick={onRegistrarPonto}>
          <span className="dot"></span> Registrar Ponto
        </Button>
      </div>

      <div className="resumo-grid">
        <div className="card card-mini">
          <span className="mini-titulo">
            <LogIn size={14} color="#1e6bb8" /> Última entrada
          </span>
          <strong className="mini-valor">{resumo.ultimaEntrada}</strong>
          <span className="mini-data">-</span>
        </div>

        <div className="card card-mini">
          <span className="mini-titulo">
            <LogOut size={14} color="#d9534f" /> Última saída
          </span>
          <strong className="mini-valor">{resumo.ultimaSaida}</strong>
          <span className="mini-data">-</span>
        </div>

        <div className="card card-mini">
          <span className="mini-titulo">
            <Clock size={14} color="#28a745" /> Horas do dia
          </span>
          <strong className="mini-valor">{resumo.horasDia}</strong>
          <span className="mini-data">Balanço: --</span>
        </div>

        <div className="card card-mini">
          <span className="mini-titulo">
            <Calendar size={14} color="#f0ad4e" /> Dias trabalhados
          </span>
          <strong className="mini-valor">{resumo.diasTrabalhados}</strong>
          <span className="mini-data">-</span>
        </div>
      </div>

      <div className="card card-ultimo-registro">
        <p>
          <span className="dot-verde"></span> Último registro:{' '}
          <strong>{resumo.ultimoRegistroTexto}</strong>
        </p>
        <a href="#controle">Ver controle de horário →</a>
      </div>
    </div>
  );
}