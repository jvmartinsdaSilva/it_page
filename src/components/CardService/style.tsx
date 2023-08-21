import styled from "styled-components"


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 .35em;
    width: 25%;
    height: 270px;
    border: 2px solid ${props => props.theme.Colors.blue_37};
    border-radius: 10px;
    text-align: center;

    @media (max-width: 600px){
        width: 40%;
        margin: .35em 0;
    }
`

export const IconService = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${props => props.theme.Colors.blue};

`