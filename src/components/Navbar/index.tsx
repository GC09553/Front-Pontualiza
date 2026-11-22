import { UserRound, Bell, ChevronDown } from 'lucide-react';
import './styles.css';

interface NavbarProps {
  titulo: string;
  nome: string;
  cargo: string;
}

export function Navbar({ titulo, nome, cargo }: NavbarProps) {
  return (
    <nav className='nav'>
      <p className="nav-titulo">{titulo}</p>

      <div className="nav-actions">
        <button aria-label='notificações' className="btn-icon">
          <Bell size={22} />
        </button>
        
        <div className="perfil-box">
          <button aria-label='perfil' className="btn-perfil">
            <UserRound size={22} />
          </button>
          <div className="perfil-info">
            <strong>{nome}</strong>
            <span>{cargo || 'Funcionário'}</span>
          </div>
          <ChevronDown size={16} className="seta-perfil" />
        </div>
      </div>
    </nav>
  );
}