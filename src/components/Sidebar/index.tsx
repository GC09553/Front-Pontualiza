import type { ReactNode } from 'react';
import { LogOut } from 'lucide-react';
import Icone from '../../assets/icone.png';
import './styles.css';

export interface MenuItem {
  label: string;
  icon: ReactNode;
  ativo?: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  itens: MenuItem[];
  onSair?: () => void;
}

export function Sidebar({ itens, onSair }: SidebarProps) {
  return (
    <aside className='barralat'>
      <div className="logo-area">
        <img src={Icone} alt='Pontualiza' />
      </div>

      <ul className="menu-lista">
        {itens.map((item, index) => (
          <li 
            key={index} 
            className={item.ativo ? 'ativo' : ''} 
            onClick={item.onClick}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="sair-area">
        <button className="btn-sair" onClick={onSair}>
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}