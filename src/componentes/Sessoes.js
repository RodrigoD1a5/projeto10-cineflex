import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../style/Container"
import Filme from "./Filme"
import Sessao from "./Sessao"

export default function Sessoes(){
    const[listaSessoes, setListaSessoes]= useState(undefined)
    const parametro = useParams();

    useEffect(()=>{
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${parametro.idFilme}/showtimes`)
        requisicao.then((resposta)=> {
            setListaSessoes(resposta.data)
        })
    }, [])

    return(
        <Container>
            <p>Selecione o horário</p>
            <EstiloSessoes>
                {listaSessoes?.days.map((s)=> <Sessao weekday={s.weekday} date ={s.date} showtimes={s.showtimes} key={s.id}/>)}
            </EstiloSessoes>
            <FooterSessao data-test="footer">
                <Filme posterURL={listaSessoes?.posterURL} tamanho={"P"}/>
                <div>
                    <p>{listaSessoes?.title}</p>
                </div>
            </FooterSessao>
        </Container>
    )
}

const EstiloSessoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    margin-bottom: 117px;

`
const FooterSessao = styled.div`
    position:fixed ;
    bottom:0;
    display:flex;
    align-items:center;
    padding: 0 10px;
    min-width:375px;
    height:117px;
    background-color: #DFE6ED;
    div p{
        display: flex;
        align-items: center;
        margin-bottom: 0;
        margin-left: 14px;
    }

`