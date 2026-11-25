import ColunaEsq from '../../components/ColunaEsq/ColunaEsq';
import FormLogin from '../../components/FormLogin/FormLogin';
import './Login.css';

interface LoginProps {
  onNavigate?: (rota: string) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  return (
    <div className="login-page-container">
      <ColunaEsq
        titulo="Sua jornada começa aqui."
        subtitulo="Acesse sua conta para acompanhar seus registros de ponto com segurança, agilidade e transparência."
      />

      <main className="login-lado-direito">
        <div className="login-conteudo-central">
          <FormLogin onNavigate={onNavigate} />

          <footer className="login-rodape">
            <span>© 2026 Pontualiza</span>
            <span className="ponto-separador">·</span>
            <a href="#privacidade">Privacidade e segurança</a>
          </footer>
        </div>
      </main>
    </div>
  );
}