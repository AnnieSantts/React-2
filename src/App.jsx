import { Navbar } from './components/navbar';
import { Title } from './components/title';
import { NavItem} from "./components/nav-item";
import{Header} from "./components/header";
import { Avatar } from './components/avatar';
import{Text} from './components/text';
import{Button} from './components/Button';




const items = ["Página Inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
  "mais"
];

function App() {
  return (
    <>
      <Navbar>
        <Title />
        {items.map((item) => (
          <NavItem key={item} text={item}/>
        ))}
      </Navbar>
      <Header> 
        <Avatar/>
          <Text bold={true}>@adaTechbr</Text>
          <Button> Seguindo</Button>
          <Button>Enviar Mensagem</Button>
          <Text> 211 Publicações</Text>
          <Text> 44,2 Mil seguidores</Text>
          <Text>2 Seguindo</Text>
        
      </Header> 
    </>
  );
}

export default App;
