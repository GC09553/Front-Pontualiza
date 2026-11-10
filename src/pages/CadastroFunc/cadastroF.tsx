import './style.css';
import LogoPontualiza from '../../assets/logo.jpeg';

export function CadastroFunc() {
  return (
    <div className="container-tela">
      {/* Coluna Esquerda: Branding e Informações */}
      <aside className="coluna-esquerda">
        <div className="card-logo">
          {/* Deixaremos um espaço reservado para a logo */}
          <img src={LogoPontualiza} alt="Logo Pontualiza" className="img-logo" />
  </div>
    


        <div className="texto-destaque">
          <h1>Sua equipe, conectada desde o primeiro dia.</h1>
          <p>Crie um acesso individual, seguro e sempre vinculado à empresa.</p>
        </div>

        <div className="beneficios">
          <div className="item-beneficio">
            <span>✔</span> Seguro
          </div>
          <div className="item-beneficio">
            <span>✔</span> Ágil
          </div>
          <div className="item-beneficio">
            <span>✔</span> Confiável
          </div>
        </div>
      </aside>

      {/* Coluna Direita: Formulário */}
      <main className="coluna-direita">
        <div className="topo-formulario">
          <span className="badge-topo">ATIVAÇÃO POR CONVITE AUTORIZADO</span>
          <h2>Ative seu acesso</h2>
          <p>Use o convite enviado pelo gestor para criar seu acesso vinculado à empresa.</p>
        </div>

        <div className="card-formulario">
          <form>
            {/* Bloco 1: Convite */}
            <div className="secao-convite">
              <span className="icone-convite">📱</span>
              <div>í
                <strong>Convite autorizado</strong>
                <p>Use o link ou código enviado pelo gestor para ativar seu acesso.</p>
              </div>
            </div>

            <div className="campo">
              <label>Convite autorizado</label>
              <input type="text" placeholder="Cole o link ou código do convite" />
              <small className="aviso-campo">Se não recebeu o convite, peça ao gestor para reenviá-lo.</small>
            </div>

            {/* Bloco 2: Dados essenciais */}
            <h3 className="titulo-secao">Dados essenciais</h3>

            <div className="campo">
              <label>Nome completo *</label>
              <input type="text" placeholder="Digite seu nome completo" />
            </div>

            <div className="linha-dupla">
              <div className="campo">
                <label>CPF *</label>
                <input type="text" placeholder="000.000.000-00" />
              </div>
              <div className="campo">
                <label>E-mail profissional *</label>
                <input type="email" placeholder="nome@empresa.com.br" />
              </div>
            </div>

            {/* Bloco 3: Credenciais */}
            <h3 className="titulo-secao">Credenciais de acesso</h3>

            <div className="linha-dupla">
              <div className="campo">
                <label>Senha *</label>
                <input type="password" placeholder="Mínimo de 8 caracteres" />
              </div>
              <div className="campo">
                <label>Confirmar senha *</label>
                <input type="password" placeholder="Digite a senha novamente" />
              </div>
            </div>

            <small className="aviso-obrigatorio">
              * Campos obrigatórios · 8+ caracteres, maiúsculas, minúsculas, número e símbolo.
            </small>

            <button type="button" className="btn-ativar">
              Ativar acesso ➔
            </button>
          </form>
        </div>

        <footer className="rodape-formulario">
          <p>Já possui conta como funcionário? <a href="#">Entrar</a></p>
          <small>© 2026 Pontualiza · Privacidade e segurança</small>
        </footer>
      </main>
    </div>
  );
}

export default CadastroFunc;