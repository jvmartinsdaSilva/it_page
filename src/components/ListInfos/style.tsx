import styled from "styled-components"

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: auto;
    list-style: none;
    text-align: start;
    align-items: start;


`

export const ListTitle = styled.h3`
    font-size: 1.3em;
    font-weight: bold;
    color: ${props => props.theme.Colors.navy_blue};
    margin: .7em 0;
`

export const ListItem = styled.li`
    color: ${props => props.theme.Colors.gray};
    margin: .25em 0;
    font-size: 12px;
    
`