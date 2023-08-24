import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 3;
    background: ${props => props.theme.Colors.white};
    border-bottom: 1px solid ${props => props.theme.Colors.light_white};
`