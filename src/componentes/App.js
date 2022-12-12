import styled from "styled-components";
import Assentos from "./Assentos";
import Header from "./Header";
import Home from "./Home";
import Sessoes from "./Sessoes";
import Sucesso from "./Sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <EstiloApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
          <Route path="/assentos/:idSessao" element={<Assentos/>}/>
        </Routes>
      </EstiloApp>
    </BrowserRouter>
  );
}

const EstiloApp = styled.div`
  display: flex ;
  flex-direction:column;
  max-width: 375px;
  margin: 0 auto;
`
