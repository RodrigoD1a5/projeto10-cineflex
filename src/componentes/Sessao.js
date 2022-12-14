import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessao(props) {
    const { weekday, date, showtimes } = props
    return (
        <EstiloSessao data-test="movie-day">
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map((s) => 
                <Link key={s.id} to ={`/assentos/${s.id}`} data-test="showtime">
                <button>{s.name}</button>
                </Link>)}
            </div>
        </EstiloSessao>
    )
}

const EstiloSessao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    p{
        margin-bottom: 25px;
    }
    div{
        display: flex;
    }
    div button{
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        margin-right:8px;

        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        
        cursor: pointer;
        
    }
`
