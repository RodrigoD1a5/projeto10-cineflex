import styled from "styled-components"

export default function Header(){
    return(
        <EstiloHeader>
            CINEFLEX
        </EstiloHeader>
    )
}

const EstiloHeader = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C3CFD9;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    color: #E8833A;
`