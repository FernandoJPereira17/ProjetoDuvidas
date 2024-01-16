import { Link, useNavigate } from "react-router-dom";
import { Text } from "../../components/Text";
import { TextCpf } from "../../components/TextCpf";
import { Card } from "../../components/Card";
import { useHome, useHomePage } from "./useHomePage";

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

      /* <h1>ReactJs Axios</h1>
      <Text textValue="Teste 123456789"/>/
      <TextCpf cpf="01234567890"/>
      <Link to="about">About</Link>
      <button>Página sobre</button>
      */

      const { users } = useHomePage();

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="flex flex-col gap-4">
        {users.length > 0 &&
          users.map((user) => {
            <Card key={user.id} email={user.email} nome={user.name} />;
          })}
      </div>
    </div>
  );
}
