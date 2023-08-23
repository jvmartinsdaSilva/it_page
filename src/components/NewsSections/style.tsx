import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 3em 0;
    min-height: 300px;
`

export const NewsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    height: auto;
    margin-top: 2em;

    @media (max-width: 600px){
        flex-direction: column;
        justify-content: center;
    }
`