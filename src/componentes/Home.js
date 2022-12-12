import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "../style/Container"
import Filme from "./Filme"

export default function Home(){
    const [listaFilmes , setListaFilmes]= useState(undefined)

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
		requisicao.then(resposta => {
		    setListaFilmes(resposta.data);
		});
	}, []);

    return(
        <Container>
            <p>Selecione o filme</p>
            <EstiloHome>
                {listaFilmes?.map((f)=> <Filme id={f.id} posterURL={f.posterURL} tamanho={"G"} key={f.id}/>)}
            </EstiloHome>
        </Container>
    )
}

const EstiloHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    gap: 10px 30px;
`