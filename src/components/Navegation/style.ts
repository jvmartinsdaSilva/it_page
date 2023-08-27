import { styled } from "styled-components";


export const Nav = styled.nav`
    display: flex;
    width: 55%;
    align-items: center;
    justify-content: space-between;
    
`
export const NavItem = styled.a`
    width: 75px;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.Colors.black};
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    a{
        color: inherit;
    }
    
    &:hover{
        color: ${props => props.theme.Colors.blue};
        text-decoration: underline;
    }
`
