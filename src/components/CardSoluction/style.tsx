import styled from "styled-components"


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 300px;
    margin: 0 .5em;
    padding: .25em;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;


    &:hover{
        border: 2px solid ${props => props.theme.Colors.blue_37};

    }
`

export const Title = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 40px;
    background: ${props => props.theme.Colors.white};
    color: ${props => props.theme.Colors.black};
    margin: -25px 0 0 0;
    text-align: center;
    box-shadow: 0px 10px 10px #0000002a;
    font-weight: bold;

`