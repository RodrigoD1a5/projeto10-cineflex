import styled from "styled-components"

export default function Assento(props){
    const {id, name, isAvailable}= props
    return(
        <EstiloAssento isAvailable={isAvailable} >
            {name}
        </EstiloAssento>

    )
}

const EstiloAssento = styled.button`
    width: 26px;
    height: 26px;
    text-align: center;

    background-color: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};
    border: 1px solid #808F9D;
    border-radius: 50%;   

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
`
