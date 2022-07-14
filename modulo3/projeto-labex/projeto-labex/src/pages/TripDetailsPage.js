import { useNavigate } from "react-router-dom";
import { voltaPagina } from "./Routes/Coordinator";

export const TripDetailsPage = () => {
  const navigate =useNavigate()
  return <button onClick={voltaPagina(navigate)}>Voltar</button>;
};
