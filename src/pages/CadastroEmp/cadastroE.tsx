import './cadastroE.css';
import ColunaEsq from '../../components/ColunaEsq';
import FormEmp from '../../components/FormEmp';

interface CadastroEmpProps {
  onNavigate?: (rota: string) => void;
}

export default function CadastroEmp({ onNavigate }: CadastroEmpProps) {
  return (
    <div className="container-tela-emp">
      <ColunaEsq
        titulo="Comece a gestão da sua empresa."
        subtitulo="Cadastre a empresa e o responsável para administrar equipes com segurança."
      />
      <FormEmp onNavigate={onNavigate} />
    </div>
  );
}