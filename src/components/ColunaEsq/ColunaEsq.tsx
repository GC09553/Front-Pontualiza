import './ColunaEsq.css';
import LogoPontualiza from '../../assets/logo.jpeg';

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
          <span className="icone-beneficio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <span>Seguro</span>
        </div>

        <div className="item-beneficio">
          <span className="icone-beneficio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </span>
          <span>Ágil</span>
        </div>

        <div className="item-beneficio">
          <span className="icone-beneficio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z" />
              <path d="M8 14a5 5 0 1 1 8 0" />
              <path d="M17 18.5a9 9 0 1 0-10 0" />
            </svg>
          </span>
          <span>Confiável</span>
        </div>
      </div>
    </aside>
  );
}