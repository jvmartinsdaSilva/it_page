import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 250px;
    height: 270px;
    position: relative;
    margin: .5em;
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
    color: white;
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