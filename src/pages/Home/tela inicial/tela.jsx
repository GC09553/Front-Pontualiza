import logoUrl from './logo.jpeg';
import './index.css';

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" />
      <path d="m5.2 8.1 1.8 1.8 3.9-4" />
    </svg>
  );
}

function RoleIcon({ administrator = false }) {
  return (
    <span className={`role-icon${administrator ? ' role-icon-admin' : ''}`} aria-hidden="true">
      {administrator ? (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" />
          <path d="m9.5 9.5 5 5m0-5-5 5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="7" width="14" height="10" rx="2" />
          <path d="M8 10h8m-8 3h5" />
        </svg>
      )}
    </span>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6" />
      <path d="M8 7v4m0-6h.01" />
    </svg>
  );
}

function AccessCard({ administrator = false }) {
  const role = administrator ? 'Administrador' : 'Funcionário';

  return (
    <section className={`card${administrator ? ' card-admin' : ''}`}>
      <div className="card-heading">
        <RoleIcon administrator={administrator} />
        <div>
          <h3>{role}</h3>
          <p>
            {administrator
              ? 'Gerencie equipes, permissões e relatórios da empresa.'
              : 'Consulte registros, horários e informações da sua jornada.'}
          </p>
        </div>
      </div>
      <div className={`alert${administrator ? ' alert-green' : ' alert-blue'}`}>
        <InfoIcon />
        <p>
          {administrator
            ? 'Destino: cadastro da empresa e convite de funcionários.'
            : 'Precisa do convite da empresa para ativar seu acesso.'}
        </p>
      </div>
      <button type="button" className={`btn${administrator ? ' btn-green' : ' btn-blue'}`}>
        Entrar <span aria-hidden="true">→</span>
      </button>
      <button
        type="button"
        className={`btn btn-outline${administrator ? ' btn-outline-green' : ' btn-outline-blue'}`}
      >
        {administrator ? 'Cadastrar empresa' : 'Ativar acesso com convite'}
      </button>
    </section>
  );
}

export const PortalPontualiza = () => (
  <div id="root">
    <aside className="brand-panel">
      <div className="logo-box" aria-label="Pontualiza - Eficiência em Foco">
        <img className="logo-image" src={logoUrl} alt="Pontualiza - Eficiência em Foco" />
      </div>

      <div className="brand-copy">
        <h1>Gestão de ponto, simples e precisa.</h1>
        <p>Acesse sua jornada de trabalho com segurança, agilidade e transparência.</p>
      </div>

      <div className="tags" aria-label="Seguro, ágil e confiável">
        <span><CheckIcon />Seguro</span>
        <span><CheckIcon />Ágil</span>
        <span><CheckIcon />Confiável</span>
      </div>
    </aside>

    <main className="access-panel">
      <div className="access-content">
        <header className="access-header">
          <span className="badge">PORTAL DE ACESSO</span>
          <h2>Como você deseja acessar?</h2>
          <p>Selecione seu perfil para entrar na conta ou realizar um novo cadastro.</p>
        </header>

        <div className="cards-container">
          <AccessCard />
          <AccessCard administrator />
        </div>

        <p className="support">
          <InfoIcon />
          Precisa de ajuda para acessar?
          <a href="#">Fale com o suporte</a>
        </p>
      </div>

      <footer>
        <p className="copyright">
          © 2026 Pontualiza - Eficiência em foco - Privacidade e segurança
        </p>
      </footer>
    </main>
  </div>
);

export default PortalPontualiza;
