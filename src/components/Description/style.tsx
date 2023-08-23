import styled from "styled-components"


export const DescriptionContainer = styled.span`
    margin: .8em 0;
    font-size: 13px;
    color: ${props => props.color};
    line-height: 1.5em;
    font-family: ${props => props.font || "san-serif"};
`