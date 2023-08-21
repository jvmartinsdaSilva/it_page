import styled from "styled-components"


export const ButtonContainer = styled.button`
    width: 150px;
    height: 45px;
    background: ${props => props.theme.Colors.blue};
    color: ${props => props.theme.Colors.white};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: .8s;

    &:hover{
        background: ${props => props.theme.Colors.dark_blue};

    }

`