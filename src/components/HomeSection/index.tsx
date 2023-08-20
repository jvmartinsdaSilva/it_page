import { ButtonDefault } from "../Buttons/Default"
import { Description } from "../Description"
import { SubTitle } from "../SubTittle"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"


export const HomeSection = () => {
    return(
        <S.Container>
            <S.Content>
                <SubTitle color={Theme.Colors.white}>
                    The best IT servicefor <br/> 
                    your security
                </SubTitle>
                <Description color={Theme.Colors.white}>
                    Hub IT allows your business and technology computers to store and <br/>
                     manipulate big data in the digital world.
                </Description>
                <S.DiscoverContainer>
                    <ButtonDefault txt="Discover Hub"/>
                    <S.Contact>Hotline: (733)865-5485</S.Contact>
                </S.DiscoverContainer>
            </S.Content>
        </S.Container>
    )
}