import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "../../components/Text";
import { TextCpf } from "../../components/TextCpf";

export default function Home() {
//   const navigate = useNavigate();

//   useEffect(()=>{
//     //Cadastro de usuário com sucesso...
//     if(true){
//     setTimeout(()=>{
//         navigate("/about");
//     },[3000]);
// }
//   },[]);

  return (
    <div>
      <h1>ReactJs Axios</h1>
      <Text textValue="Teste 123456789"/>/
      <TextCpf cpf="01234567890"/>
      <Link to="about">About</Link>
      <button>Página sobre</button>
    </div>
  );
}
