import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html{
        scroll-behavior: smooth;
        scroll-padding-top: 3.5em;
    }
    
    body{
        background: ${props => props.theme.Colors.White};
        font-family: sans-serif;
    }

    body::-webkit-scrollbar{
        width: 12px;
    }

    body::-webkit-scrollbar-track{
        background: transparent;
    }
    
    body::-webkit-scrollbar-thumb{
        background: ${props => props.theme.Colors.blue};
    }
`