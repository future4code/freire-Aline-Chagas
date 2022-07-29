import { useNavigate } from "react-router-dom";
import { voltaPagina } from "./Routes/Coordinator";

export const LoginPage=()=>{
    const navigate= useNavigate();

    return (
    <div>
        <input
        placeholder="e-mail de login"/>
        <input placeholder="senha" />
        
        <button onClick={()=> voltaPagina(navigate)}>Voltar</button>
        <button>Entrar</button>
    </div>)
};