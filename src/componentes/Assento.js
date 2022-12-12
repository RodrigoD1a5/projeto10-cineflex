import styled from "styled-components"

export default function Assento(props) {
    const { id, name, isAvailable , ids, selecionarAssento} = props
    
    return (
        <>  
            {ids?.includes(id)?
            <EstiloAssentoSelecionado onClick={()=> selecionarAssento(id, name , isAvailable)}>
                {name}
            </EstiloAssentoSelecionado>
            :
            <EstiloAssento isAvailable={isAvailable} onClick={()=>selecionarAssento(id, name, isAvailable)} >
                {name}
            </EstiloAssento>
            }
        </>

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
    cursor: pointer;
`
const EstiloAssentoSelecionado = styled.button`
    width: 26px;
    height: 26px;
    text-align: center;

    background-color: #1AAE9E ;
    border: 1px solid #0E7D71;
    border-radius: 50%;   

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    cursor: pointer;
`