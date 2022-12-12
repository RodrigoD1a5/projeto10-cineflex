import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AssentosEscolhidos from "./AssentosEscolhidos";
import { useNavigate } from "react-router-dom";

export default function Sucesso(props){
    const {setAssentosSelecionados ,assentosSelecionados, setNome, nome, setCpf,cpf} = props
    const [infoFilmeSessao , setInfoFilmeSessao]= useState(undefined)
    const parametro = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametro.idSessao}/seats`);
        requisicao.then(resposta => {
            setInfoFilmeSessao(resposta.data);
        })
        requisicao.catch(() =>
            alert("Falha ao obter os dados"));
    }, []);
    function voltarHome(){
        navigate('/')
        setAssentosSelecionados(undefined)    
        setCpf("")
        setNome("") 
    }
    return(
        <EstiloSucesso>
            <p>Pedido feito com sucesso!</p>
            <div className="infos" data-test="movie-info">
                <h1>Filme e sessão</h1>
                <p>{infoFilmeSessao?.movie.title}</p>
                <p>{infoFilmeSessao?.day.date} {infoFilmeSessao?.name}</p>
            </div>
            <div className="infos" data-test="seats-info">
                <h1>Ingressos</h1>
                {assentosSelecionados?.map((id)=> <AssentosEscolhidos id={id.name} key={id.name}/>)}
            </div>
            <div className="infos" data-test="client-info">
                <h1>Comprador</h1>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
            </div>
            <button onClick={() => voltarHome()} data-test="go-home-btn" >Voltar pra Home</button>
        </EstiloSucesso>
    )
}

const EstiloSucesso = styled.div`
    width:100% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    gap: 50px;
    p{  
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        color: #247A6B;
        margin-bottom: 20px;
    }
    
    .infos{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .infos h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #293845;
        margin-bottom: 10px;
    }
    .infos p{
        color: #293845;
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 5px;
    }

    button{
        margin-top: 57px;
        width: 225px;
        height: 42px;

        background-color: #E8833A;
        border-radius: 3px;
        border: none;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
`
