import './style.css';
import ColunaEsquerda from '../../components/ColunaEsq';
import FormularioFunc from '../../components/FormFunc';

interface CadastroFuncProps {
  onNavigate?: (rota: string) => void;
}

export default function CadastroFunc({ onNavigate }: CadastroFuncProps) {
  return (
    <div className="container-tela">
      <ColunaEsquerda
        titulo="Sua equipe, conectada desde o primeiro dia."
        subtitulo="Crie um acesso individual, seguro e sempre vinculado à empresa."
      />
      <FormularioFunc onNavigate={onNavigate} />
    </div>
  );
}