import { useState, type FormEvent } from 'react';
import './FormLogin.css';

interface FormLoginProps {
  onNavigate?: (rota: string) => void;
}

export default function FormLogin({ onNavigate }: FormLoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Dados de login:', { email, senha });
  };

  return (
    <div className="login-card">
      <div className="login-icone-wrapper">
        <span className="linha-decorativa"></span>
        <div className="icone-relogio">
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
            <path
              d="M39.5 18.5C37.2 12.1 31.1 7.5 24 7.5C14.9 7.5 7.5 14.9 7.5 24C7.5 33.1 14.9 40.5 24 40.5C32.2 40.5 39 34.5 40.3 26.6"
              stroke="#19A89D"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M24 14V24L29.5 27.5"
              stroke="#1E6B52"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 18L36.5 22.5L44 14"
              stroke="#19A89D"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="linha-decorativa"></span>
      </div>

      <h1 className="login-titulo">Bem-vindo de volta!</h1>
      <p className="login-subtitulo">Faça login para acessar sua conta.</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-grupo">
          <span className="input-icone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6B52" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="E-mail profissional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-grupo">
          <span className="input-icone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6B52" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <input
            type={mostrarSenha ? 'text' : 'password'}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn-olho"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            aria-label="Mostrar ou ocultar senha"
          >
            {mostrarSenha ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A6B68" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A6B68" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        </div>

        {/* <div className="esqueci-senha-container">
          <a href="#recuperar-senha" className="link-verde">
            Esqueci minha senha
          </a>
        </div> */}

        <button type="submit" className="btn-entrar">
          <span>Entrar</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </form>

      <div className="login-cadastro-links">
        <p>Ainda não tem uma conta?</p>
        <div className="links-opcoes">
         <a
            href="#cadastro-funcionario"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('cadastroFunc');
            }}
            className="link-opcao"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6B52" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Cadastrar funcionário</span>
          </a>

          <span className="divisor">|</span>

          <a
            href="#cadastro-empresa"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('cadastroEmp');
            }}
            className="link-opcao"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6B52" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
            </svg>
            <span>Cadastrar empresa</span>
          </a>
        </div>
      </div>
    </div>
  );
}