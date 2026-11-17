import Button from './Button';
import InfoIcon from './InfoIcon';

type AccessCardProfile = 'employee' | 'company';

interface AccessCardProps {
  profile: AccessCardProfile
}

function RoleIcon({ company }: { company: boolean }) {
  return (
    <span className={`role-icon${company ? ' role-icon-admin' : ''}`} aria-hidden="true">
      {company ? (
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

export default function AccessCard({ profile }: AccessCardProps) {
  const company = profile === 'company';
  const role = company ? 'Empresa' : 'Funcionário';

  return (
    <section className={`card${company ? ' card-admin' : ''}`}>
      <div className="card-heading">
        <RoleIcon company={company} />
        <div>
          <h3>{role}</h3>
          <p>
            {company
              ? 'Gerencie equipes, permissões e relatórios da empresa.'
              : 'Consulte registros, horários e informações da sua jornada.'}
          </p>
        </div>
      </div>
      <div className={`alert${company ? ' alert-green' : ' alert-blue'}`}>
        <InfoIcon />
        <p>
          {company
            ? 'Destino: cadastro da empresa e convite de funcionários.'
            : 'Precisa do convite da empresa para ativar seu acesso.'}
        </p>
      </div>
      <Button variant={company ? 'green' : 'blue'} showArrow>
        Entrar
      </Button>
      <Button variant={company ? 'outline-green' : 'outline-blue'}>
        {company ? 'Cadastrar empresa' : 'Ativar acesso com convite'}
      </Button>
    </section>
  );
}
