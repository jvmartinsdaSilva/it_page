import { info } from "console"
import { ListInfos } from "../ListInfos"
import { LogoSpinfluence } from "../LogoSpinfluence"

import * as S from "./style"

export const Footer = () => {
    const Icons = ['twitter', "faceboock", "google"]
    const infos = {
        Soluction: {
            title: "Soluction",
            infos: ["Finance Strategy", "Advertising", "SMM", "SEO", "Google AdWords"]
        },
        Company: {
            title: "Company",
            infos: ["8910 University Center Lane", "Suite 620 San Diego, CA 92102", "Phone 858-490-6910", "Fax 858-490-6985"]
        }
    }

    return (
    <S.Container>
        <S.InfosContainer>
            <S.SocialNetworksContainer>
                <LogoSpinfluence />
                <S.SocialNetworksList>
                    {Icons.map(icon => (
                        <S.SocialNetwork>
                            <img src={`/SocialNetworks/${icon}.svg`} alt={icon} />
                        </S.SocialNetwork>
                    ))}
                </S.SocialNetworksList>
            </S.SocialNetworksContainer>
            <S.ListsContainer>
                <ListInfos title={infos.Soluction.title} infos={infos.Soluction.infos} />
                <ListInfos title={infos.Soluction.title} infos={infos.Company.infos} />
            </S.ListsContainer>
        </S.InfosContainer>
        <S.Creditis>© 2018 Casumi, Made by DeoThemes.</S.Creditis>              
    </S.Container>
    )
}