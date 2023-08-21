import { SubTitle } from "../SubTittle"
import { Description } from "../Description"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"

type CardServiceType = {
    title: string,
    description: string,
    image: string
}

export const CardService = ({title, description, image}: CardServiceType) => {
    return(
        <S.CardContainer>
            <S.IconService>
                <img src={image} />
            </S.IconService>
                <SubTitle color={Theme.Colors.black} size=".7em">{title}</SubTitle>
                <Description color={Theme.Colors.light_black}>{description}</Description>
        </S.CardContainer>
    )
}