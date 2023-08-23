import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: ${props => props.heigth};
    background-position: left;
    background-size: cover;
    margin: 1em 0;
    
    img{
        width: 100%;
        height: ${props => props.heigth};
    }
`
