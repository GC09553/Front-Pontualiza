import { useState } from 'react';
import './FormEmp.css';

export default function FormEmp() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <main className="coluna-direita-emp">
      <div className="barra-superior-emp">
        <a href="#" className="link-voltar">← Voltar ao portal</a>
        <div className="status-topo-emp">
          <span className="bolinha-verde"></span>
          <span className="badge-verde">CADASTRO INICIAL</span>
        </div>
      </div>

      <div className="topo-formulario-emp">
        <h2>Configure sua empresa</h2>
        <p>Informe os dados essenciais da empresa e do responsável administrador.</p>
      </div>

      <div className="card-formulario-emp">
        <form>
          {/* Bloco 1: Dados da empresa */}
          <div className="secao-titulo-icone">
            <div className="caixa-icone-verde">🏢</div>
            <div>
              <strong>Dados da empresa</strong>
              <p>Dados usados para identificar sua organização.</p>
            </div>
          </div>

          <div className="campo-emp">
            <label>Razão social *</label>
            <input type="text" placeholder="Digite a razão social" />
          </div>

          <div className="linha-dupla-emp">
            <div className="campo-emp">
              <label>CNPJ *</label>
              <input type="text" placeholder="00.000.000/0000-00" />
            </div>
            <div className="campo-emp">
              <label>Nome fantasia *</label>
              <input type="text" placeholder="Como sua empresa é conhecida" />
            </div>
          </div>

          {/* Bloco 2: Responsável administrador */}
          <div className="secao-titulo-icone espaco-topo">
            <div className="caixa-icone-verde">👤</div>
            <div>
              <strong>Responsável administrador</strong>
              <p>Este perfil terá permissões de gestão da empresa.</p>
            </div>
          </div>

          <div className="linha-dupla-emp">
            <div className="campo-emp">
              <label>Nome completo *</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="campo-emp">
              <label>E-mail profissional *</label>
              <input type="email" placeholder="nome@empresa.com.br" />
            </div>
          </div>

          <div className="linha-dupla-emp">
            <div className="campo-emp">
              <label>Senha *</label>
              <div className="input-com-botao">
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  placeholder="Mínimo de 8 caracteres"
                />
                <button
                  type="button"
                  className="btn-mostrar-senha"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  <span>{mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="campo-emp">
              <label>Confirmar senha *</label>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Digite a senha novamente"
              />
            </div>
          </div>

         

          <small className="aviso-senha-emp">
            Use letras maiúsculas, minúsculas, números e um caractere especial.
          </small>

          <label className="checkbox-termos">
            <input type="checkbox" />
            <span>
              Li e aceito os <a href="#">Termos de uso</a> e a{' '}
              <a href="#">Política de privacidade</a> da Pontualiza.
            </span>
          </label>

          <button type="button" className="btn-cadastrar-emp">
            <span>Cadastrar empresa e administrador</span>
            <span>➔</span>
          </button>
        </form>
      </div>

      <footer className="rodape-formulario-emp">
        <p>Já possui conta como administrador?</p>
        <a href="#">Entrar</a>
        <small>© 2026 Pontualiza · Privacidade e segurança</small>
      </footer>
    </main>
  );
}