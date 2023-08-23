import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    text-align: start;
    width: 200px;
    height: 250px;
    /* border: 1px solid red; */
    margin: 2em .3em;
`
export const InfosArea = styled.span`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    height: 70px;
`


export const LearnMore = styled.a`
    color: ${props => props.theme.Colors.blue_link};
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`