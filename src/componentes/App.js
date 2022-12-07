import styled from "styled-components";
import Assentos from "./Assentos";
import Header from "./Header";
import Home from "./Home";
import Sessoes from "./Sessoes";
import Sucesso from "./Sucesso";

export default function App() {
  return (
    <EstiloApp>
      <Header/>
      <Sucesso/>
    </EstiloApp>
  );
}

const EstiloApp = styled.div`
  display: flex ;
  flex-direction:column;
  max-width: 375px;
  margin: 0 auto;
`
