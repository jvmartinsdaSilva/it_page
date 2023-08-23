import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 450px;
    background-image:url("/ContactBackground.jpg");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    margin: 1em 0;
    
`

export const Modal = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #000000a4;
        top: 0;
        left: 0;
        position: relative;
        width: 100%;
        height: 100%;
        color: ${props => props.theme.Colors.white};
        text-align: center;

`

export const TextContainer = styled.span`
    display:flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;

`