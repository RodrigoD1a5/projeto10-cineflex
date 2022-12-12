import styled from "styled-components";
import Assentos from "./Assentos";
import Header from "./Header";
import Home from "./Home";
import Sessoes from "./Sessoes";
import Sucesso from "./Sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [assentosSelecionados, setAssentosSelecionados] = useState([])
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
   
  return (
    <BrowserRouter>
      <EstiloApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Sessoes />} />
          <Route path="/assentos/:idSessao" element={<Assentos 
            assentosSelecionados={assentosSelecionados}
            setAssentosSelecionados={setAssentosSelecionados}
            setNome={setNome}
            nome={nome}
            setCpf={setCpf}
            cpf={cpf}/>} 
          />

          <Route path="/sucesso/:idSessao" element={<Sucesso
            setAssentosSelecionados={setAssentosSelecionados}
            assentosSelecionados={assentosSelecionados}
            setNome={setNome}
            nome={nome}
            setCpf={setCpf}
            cpf={cpf}/>}/>
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
