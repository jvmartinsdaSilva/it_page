import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    align-items: center;
    width: 90%;
    min-height: 300px;
    height: auto;
    margin: 1em 0 ;
    margin-left: 10%;
    position: relative;
    z-index: -1;
    
    
    &::before{
        content: "";
        display: flex;
        position: absolute;
        width: 70%;
        height: 100%;
        margin-left: 30%;
        z-index: -1;
        background: blue;

        @media (max-width: 650px){
            display: none;
        }        

    }

    @media (max-width: 650px){
        flex-direction: column;
        background: blue;
        align-items: center;
        width: 100%;
        margin: 1em 0;

    }
    
`

export const Testimonial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 1em 2em;
    width: 60%;

    @media (max-width: 650px){
        width: 80%;
    }
`

export const TestimonialDescription = styled.span`
    font-family: helvetica;
    `

export const TestiMonialsContainer = styled.div`
    display: flex;
    width: 80%;
    height: 250px;
    margin-left: 10%;
    
    @media (max-width: 650px){
        flex-direction: column;
        align-items: center;
        height: auto;
        justify-content: start;
    }
`

export const InfosPeople = styled.span`
    font-size: 14px;
    font-weight: lighter;
    line-height: 1.6em;
    color: ${props => props.theme.Colors.white};
`