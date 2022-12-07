import styled from "styled-components";
import { Container } from "../style/Container";

export default function Sucesso(){
    return(
        <EstiloSucesso>
            <p>Pedido feito com sucesso!</p>
            <div className="infos">
                <h1>Filme e sessão</h1>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div className="infos">
                <h1>Ingressos</h1>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div className="infos">
                <h1>Comprador</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <button>Voltar pra Home</button>
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
