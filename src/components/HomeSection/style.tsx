import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 501px;
    background-image:url("/HomeBackground.png");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
`

export const Content = styled.div`
        content: "";
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
        color: white;
        text-align: center;

`

export const DiscoverContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: .8em 0;
`

export const Contact = styled.span`
    margin: 0 .25em;
    font-size: 14px;
    color: ${props => props.theme.Colors.white};
    border-bottom: 1px solid ${props => props.theme.Colors.white};
`