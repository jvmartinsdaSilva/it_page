import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 250px;
    height: calc(270px + 3em);
    position: relative;
    margin: .5em;
    border-bottom: 2px solid ${props => props.theme.Colors.light_white};
    padding-bottom: 3em;

`

export const Category = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 75px;
    height: 30px;
    background: ${props => props.theme.Colors.blue_transparent};
    border-radius: 10px;
    position: absolute;
    margin: 10px;
    color: ${props => props.theme.Colors.white};
    font-weight: bold;
`

export const Write = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    width: 100%;
    justify-content: space-between;
`

export const WriteName = styled.p`
    color: ${props => props.theme.Colors.blue};
`
export const Date = styled.p`
    color: ${props => props.theme.Colors.light_gray}
`