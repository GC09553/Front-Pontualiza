import './cadastroE.css';
import ColunaEsq from '../../components/ColunaEsq';
import FormEmp from '../../components/FormEmp';

export default function CadastroEmp() {
  return (
    <div className="container-tela-emp">
      <ColunaEsq
        titulo="Comece a gestão da sua empresa."
        subtitulo="Cadastre a empresa e o responsável para administrar equipes com segurança."
      />
      <FormEmp />
    </div>
  );
}