import { useNavigate } from "react-router-dom";
import { voltaPagina } from "./Routes/Coordinator";

export const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Painel Administrativo</p>
      <button onClick={() => voltaPagina(navigate)}>Voltar</button>
      <button>Criar Viagem</button>
      <button>Logout</button>
    </div>
  );
};
