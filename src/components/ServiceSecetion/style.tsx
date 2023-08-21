import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1em;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`