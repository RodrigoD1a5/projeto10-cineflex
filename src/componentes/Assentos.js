import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../style/Container"
import Assento from "./Assento"
import Filme from "./Filme"

export default function Assentos(props) {
    const { listaAssentos, setListaAssentos, assentosSelecionados, setAssentosSelecionados, setNome, nome, setCpf, cpf } = props

    let ids= assentosSelecionados?.map((e)=> e.id)

    const reserva = {
        ids: ids,
        nome: {nome},
        cpf:{cpf}
    }

    console.log(reserva)

    const parametro = useParams();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametro.idSessao}/seats`);
        requisicao.then(resposta => {
            setListaAssentos(resposta.data);
        })
        requisicao.catch(() =>
            alert("Falha ao obter os dados"));
    }, []);

    function enviarReserva(){
        const requisicao= axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reserva)
        requisicao.then(()=>{
            alert("Reserva concluída!")
        })
        requisicao.catch(()=>{
            alert("Falha ao reservar!")
        })
        
    }

    function selecionarAssento(id, name, isAvailable) {
        if (!isAvailable) {
            alert("Assento indisponível")
            return;
        }
        else {
            if (ids?.includes(id)) {
                const filtrarAssento = assentosSelecionados?.filter((a) => !(a.id === id))
                setAssentosSelecionados([...filtrarAssento])
            }
            else {
                const obj = {id:id , name:name}
                setAssentosSelecionados([...assentosSelecionados, obj])
            }
        }
    }

    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <EstiloAssentos>
                <div className="assentos">

                    {listaAssentos?.seats.map((a) =>
                        <Assento
                            id={a.id}
                            name={a.name}
                            isAvailable={a.isAvailable}
                            ids={ids}
                            selecionarAssento={selecionarAssento}
                            key={a.id} />)}

                </div>
                <div className="legendas">
                    <div>
                        <div className="selecionado"></div>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <div className="disponivel"></div>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <div className="indisponivel"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="dados" data-test="client-name">
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} />
                </div>
                <div className="dados" data-test="client-cpf">
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} />
                </div>
                <Link to="/sucesso">
                    <button className="botao-reservar" onClick={()=>enviarReserva()} data-test="book-seat-btn">Reservar assento(s)</button>
                </Link>
            </EstiloAssentos>
            <FooterAssentos data-test="footer">
                <Filme posterURL={listaAssentos?.movie.posterURL} tamanho={"P"} />
                <div>
                    <p>{listaAssentos?.movie.title}</p>
                    <p>{listaAssentos?.day.weekday} - {listaAssentos?.name}</p>
                </div>
            </FooterAssentos>
        </Container>
    )
}

const EstiloAssentos = styled.div`
    margin-bottom: 117px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .assentos{
        display: flex;
        flex-wrap: wrap;
        gap: 18px 7px;
    }

    .legendas{
        width: 100%;
        margin-top: 16px;
        margin-bottom: 60px;
        display: flex;
        justify-content: space-around;
    }
    .legendas div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .legendas div div{
        width: 26px;
        height: 26px;
        border-radius: 50%;
    }
    .selecionado{
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
    }
    .disponivel{
        background: #C3CFD9;
        border: 1px solid #7B8B99;
    }
    .indisponivel{
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
    .legendas div p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        margin-bottom: 0;
        margin-top: 5px;
    }

    .dados{
        margin-top: 20px;
    }
    .dados p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 5px;
    }
    .dados input{
        width: 327px;
        height: 51px;
        margin-bottom: 10px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #AFAFAF;
    }
    .botao-reservar{
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

const FooterAssentos = styled.div`
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
        margin-top: 5px;
        margin-left: 14px;
    }
`