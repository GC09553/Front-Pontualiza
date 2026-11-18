import './FormFunc.css';

export default function FormularioFunc() {
  return (
    <main className="coluna-direita">
      <div className="topo-formulario">
        <span className="bolinha-topo"></span>
        <span className="badge-topo">ATIVAÇÃO POR CONVITE AUTORIZADO</span>
        <h2>Ative seu acesso</h2>
        <p>Use o convite enviado pelo gestor para criar seu acesso vinculado à empresa.</p>
      </div>

      <div className="card-formulario">
        <form>
          <div className="secao-convite">
            <div className="caixa-icone">📱</div>
            <div>
              <strong>Convite autorizado</strong>
              <p>Use o link ou código enviado pelo gestor para ativar seu acesso.</p>
            </div>
          </div>

          <div className="campo">
            <label>Convite autorizado</label>
            <input type="text" placeholder="Cole o link ou código do convite" />
            <small className="aviso-campo">
              Se não recebeu o convite, peça ao gestor para reenviá-lo.
            </small>
          </div>

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
            <span>Ativar acesso</span>
            <span>➔</span>
          </button>
        </form>
      </div>

      <footer className="rodape-formulario">
        <p>Já possui conta como funcionário?</p>
        <a href="#">Entrar</a>
        <small>© 2026 Pontualiza · Privacidade e segurança</small>
      </footer>
    </main>
  );
}