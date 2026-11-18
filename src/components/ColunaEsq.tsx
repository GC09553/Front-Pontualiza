import './ColunaEsq.css';
import LogoPontualiza from '../assets/logo.jpeg';

interface ColunaEsquerdaProps {
  titulo: string;
  subtitulo: string;
}

export default function ColunaEsquerda({ titulo, subtitulo }: ColunaEsquerdaProps) {
  return (
    <aside className="coluna-esquerda">
      <div className="card-logo">
        <img src={LogoPontualiza} alt="Logo Pontualiza" className="img-logo" />
      </div>

      <div className="texto-destaque">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>

      <div className="beneficios">
        <div className="item-beneficio">
          <span className="icone-check">✔</span>
          <span>Seguro</span>
        </div>
        <div className="item-beneficio">
          <span className="icone-check">✔</span>
          <span>Ágil</span>
        </div>
        <div className="item-beneficio">
          <span className="icone-check">✔</span>
          <span>Confiável</span>
        </div>
      </div>
    </aside>
  );
}