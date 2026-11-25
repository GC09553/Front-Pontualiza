import './RegistrosRecentesAdmin.css';

export interface RegistroAdmin {
  id: number | string;
  funcionario: string;
  setor: string;
  entrada: string;
  saida: string;
  situacao: string;
  horas: string;
}

interface RegistrosRecentesAdminProps {
  registros: RegistroAdmin[];
  filtroSetor: string;
  filtroSituacao: string;
  carregando: boolean;
  onChangeSetor: (valor: string) => void;
  onChangeSituacao: (valor: string) => void;
}

export function RegistrosRecentesAdmin({
  registros,
  filtroSetor,
  filtroSituacao,
  carregando,
  onChangeSetor,
  onChangeSituacao,
}: RegistrosRecentesAdminProps) {
  return (
    <section className="card tabela-admin-card">
      <div className="tabela-topo">
        <h3>Registros recentes</h3>

        <div className="filtros-grupo">
          <select
            aria-label="Filtrar por setor"
            value={filtroSetor}
            onChange={(e) => onChangeSetor(e.target.value)}
            className="filtro-select"
          >
            <option value="Todos">Setor: Todos</option>
            <option value="Design">Design</option>
            <option value="Comercial">Comercial</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Operações">Operações</option>
          </select>

          <select
            aria-label="Filtrar por situação"
            value={filtroSituacao}
            onChange={(e) => onChangeSituacao(e.target.value)}
            className="filtro-select"
          >
            <option value="Todos">Situação: Todos</option>
            <option value="Pontual">Pontual</option>
            <option value="Atraso">Atraso</option>
            <option value="Falta">Falta</option>
          </select>

          <a href="#todos-registros" className="link-ver-todos">
            Ver todos →
          </a>
        </div>
      </div>

      <div className="tabela-responsiva">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Funcionário</th>
              <th>Setor</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Situação</th>
              <th>Horas</th>
            </tr>
          </thead>
          <tbody>
            {carregando ? (
              <tr>
                <td colSpan={6} className="tabela-vazia">
                  Carregando registros...
                </td>
              </tr>
            ) : registros.length === 0 ? (
              <tr>
                <td colSpan={6} className="tabela-vazia">
                  Nenhum registro encontrado.
                </td>
              </tr>
            ) : (
              registros.map((item) => {
                const classeBadge = item.situacao
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '');

                return (
                  <tr key={item.id}>
                    <td className="col-nome">{item.funcionario}</td>
                    <td>{item.setor}</td>
                    <td>{item.entrada}</td>
                    <td>{item.saida}</td>
                    <td>
                      <span className={`badge-situacao badge-${classeBadge}`}>
                        {item.situacao}
                      </span>
                    </td>
                    <td>{item.horas}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}