interface SidebarProps {
  logoUrl: string
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" />
      <path d="m5.2 8.1 1.8 1.8 3.9-4" />
    </svg>
  );
}

export default function Sidebar({ logoUrl }: SidebarProps) {
  return (
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
  );
}
