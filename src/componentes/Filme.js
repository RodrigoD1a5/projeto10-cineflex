import styled from "styled-components"

export default function Filme(props) {
    const { posterURL , tamanho} = props
    return (
        <EstiloFilme tamanho={tamanho}>
            <img src={posterURL} />
        </EstiloFilme>
    )
}

const EstiloFilme = styled.div`
    width: ${props => props.tamanho === "G" ? "145px" : "64px"};
    height: ${props => props.tamanho === "G" ? "209px" : "89px"};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background-color: #FFFFFF;
    
    img{
        width: ${props => props.tamanho === "G" ? "129px" : "48px"};
        height: ${props => props.tamanho === "G" ? "193px" : "72px"};
    }

`