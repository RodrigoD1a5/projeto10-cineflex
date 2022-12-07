import styled from "styled-components"
import { Container } from "../style/Container"
import Assento from "./Assento"
import Filme from "./Filme"

const ListaAssentos = {
    "id": 1,
    "name": "15:00",
    "day": {
        "id": 24062021,
        "weekday": "Quinta-feira",
        "date": "24/06/2021",
    },
    "movie": {
        "id": 1,
        "title": "2067",
        "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
    },
    "seats": [
        {
            "id": 1,
            "name": "1",
            "isAvailable": false,
        },
        {
            "id": 2,
            "name": "2",
            "isAvailable": true,
        },
        {
            "id": 3,
            "name": "3",
            "isAvailable": true,
        },
        {
            "id": 4,
            "name": "4",
            "isAvailable": true,
        },
        {
            "id": 5,
            "name": "5",
            "isAvailable": true,
        },
        {
            "id": 6,
            "name": "6",
            "isAvailable": true,
        },
        {
            "id": 7,
            "name": "7",
            "isAvailable": true,
        },
        {
            "id": 8,
            "name": "8",
            "isAvailable": true,
        },
        {
            "id": 9,
            "name": "9",
            "isAvailable": true,
        },
        {
            "id": 10,
            "name": "10",
            "isAvailable": true,
        },
        {
            "id": 11,
            "name": "11",
            "isAvailable": true,
        },
        {
            "id": 12,
            "name": "12",
            "isAvailable": true,
        },
        {
            "id": 13,
            "name": "13",
            "isAvailable": true,
        },
        {
            "id": 14,
            "name": "14",
            "isAvailable": true,
        },
        {
            "id": 15,
            "name": "15",
            "isAvailable": true,
        },
        {
            "id": 16,
            "name": "16",
            "isAvailable": true,
        },
        {
            "id": 17,
            "name": "17",
            "isAvailable": true,
        },
        {
            "id": 18,
            "name": "18",
            "isAvailable": true,
        },
        {
            "id": 19,
            "name": "19",
            "isAvailable": true,
        },
        {
            "id": 20,
            "name": "20",
            "isAvailable": true,
        },
        {
            "id": 21,
            "name": "21",
            "isAvailable": true,
        },
        {
            "id": 22,
            "name": "22",
            "isAvailable": true,
        },
        {
            "id": 23,
            "name": "23",
            "isAvailable": true,
        },
        {
            "id": 24,
            "name": "24",
            "isAvailable": true,
        },
        {
            "id": 25,
            "name": "25",
            "isAvailable": true,
        },
        {
            "id": 26,
            "name": "26",
            "isAvailable": true,
        },
        {
            "id": 27,
            "name": "27",
            "isAvailable": true,
        },
        {
            "id": 28,
            "name": "28",
            "isAvailable": true,
        },
        {
            "id": 29,
            "name": "29",
            "isAvailable": true,
        },
        {
            "id": 30,
            "name": "30",
            "isAvailable": true,
        },
        {
            "id": 31,
            "name": "31",
            "isAvailable": true,
        },
        {
            "id": 32,
            "name": "32",
            "isAvailable": true,
        },
        {
            "id": 33,
            "name": "33",
            "isAvailable": true,
        },
        {
            "id": 34,
            "name": "34",
            "isAvailable": true,
        },
        {
            "id": 35,
            "name": "35",
            "isAvailable": true,
        },
        {
            "id": 36,
            "name": "36",
            "isAvailable": true,
        },
        {
            "id": 37,
            "name": "37",
            "isAvailable": true,
        },
        {
            "id": 38,
            "name": "38",
            "isAvailable": true,
        },
        {
            "id": 39,
            "name": "39",
            "isAvailable": true,
        },
        {
            "id": 40,
            "name": "40",
            "isAvailable": true,
        },
        {
            "id": 41,
            "name": "41",
            "isAvailable": true,
        },
        {
            "id": 42,
            "name": "42",
            "isAvailable": true,
        },
        {
            "id": 43,
            "name": "43",
            "isAvailable": true,
        },
        {
            "id": 44,
            "name": "44",
            "isAvailable": true,
        },
        {
            "id": 45,
            "name": "45",
            "isAvailable": true,
        },
        {
            "id": 46,
            "name": "46",
            "isAvailable": true,
        },
        {
            "id": 47,
            "name": "47",
            "isAvailable": true,
        },
        {
            "id": 48,
            "name": "48",
            "isAvailable": true,
        },
        {
            "id": 49,
            "name": "49",
            "isAvailable": true,
        },
        {
            "id": 50,
            "name": "50",
            "isAvailable": true,
        },
    ]
}

export default function Assentos() {
    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <EstiloAssentos>
                <div className="assentos">
                    {ListaAssentos.seats.map((a) => <Assento id={a.id} name={a.name} isAvailable={a.isAvailable} />)}
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
                <div className="dados">
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." />
                </div>
                <div className="dados">
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..." />
                </div>
                <button className="botao-reservar">Reservar assento(s)</button>
            </EstiloAssentos>
            <FooterAssentos>
                <Filme posterURL={ListaAssentos.movie.posterURL} tamanho={"P"} />
                <div>
                    <p>{ListaAssentos.movie.title}</p>
                    <p>{ListaAssentos.day.weekday} - {ListaAssentos.name}</p>
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