import { styled } from "styled-components";


export const Nav = styled.nav`
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: space-between;
`
export const NavItem = styled.span`
    width: 75px;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.Colors.black};
    cursor: pointer;
    
    
    
    &:hover{
        color: ${props => props.theme.Colors.blue};
        text-decoration: underline;
    }
`
