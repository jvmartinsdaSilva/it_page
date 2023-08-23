import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InfosContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 3em;
    justify-content: space-between;

    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const SocialNetworksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 250px;
    min-height: 150px;

`
export const SocialNetworksList = styled.ul`
    display: flex;
    width: 100%;
    margin: 3em 0;
`

export const SocialNetwork = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${props => props.theme.Colors.ice_blue};
    border-radius: 50%;
    margin-right: 1em;
    cursor: pointer;
    
    &:hover{
        transform: scale(1.2);
    }
`

export const ListsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 100%;
`

export const Creditis = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: .5em 2em;
    width: 100%;
    color: ${props => props.theme.Colors.gray};
    font-size: 14px;
`