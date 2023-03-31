
import { Container, Nav, Navbar } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from "../components/Pagina";

export default function Home() {
  return (
    <>
    <Cabecalho/>
    <Pagina/>
     


      <Container>
        <h1 >hello world</h1>
        <p>qualquer texto</p>
        <p>qualquer texto</p>
        <p>qualquer texto</p>
        <Rodape/>
      </Container>
      </>

  )
}
