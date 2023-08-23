import styled from "styled-components"


export const ButtonPill = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: 50px;
    background: ${props => props.theme.Colors.blue};
    color: ${props => props.theme.Colors.white};
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: .5s;

    &:hover{
    background: ${props => props.theme.Colors.blue};
        background: ${props => props.theme.Colors.dark_blue};
    }
`