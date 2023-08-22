import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media (max-width: 706px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }

    `

export const ImgContainer = styled.div`
        margin: .5em;
        position: relative;
        padding: .5em;

        @media (max-width: 706px){
            margin: 1em auto;
            transform: scale(0.85);
            
        }
`

export const RetangleBottom = styled.div`
    position: absolute;
    display: block;
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    width: 75px;
    height: 75px;
    background: ${props => props.theme.Colors.blue};
    border-bottom-left-radius: 20px;
    top: calc(100% - 75px);
    left: 0;
    z-index: -1;
`

export const RetangleMessage = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 12px;
    width: 125px;
    height: 50px;
    background: ${props => props.theme.Colors.blue};
    color: ${props => props.theme.Colors.white};
    top: 0;
    left: -10px;
    text-align: center;
    `

export const SubImage = styled.div`
    position: absolute;
    outline: 4px solid white;
    border-radius: 5px;
    display: flex;
    bottom: -10px;
    left: 205px;
    `

export const InfoContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: start;
    margin: 0 6em;

    @media (max-width: 706px){
        width: 80%;
            
    }
`

export const Info = styled.span`
    font-size: 11px;
    color: ${props => props.theme.Colors.dark_blue};
    margin: .5em 0;
`