import { SubTitle } from "../SubTittle"
import { Description } from "../Description"
import { Icon } from "../Icon"

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
                <Icon icon={image} />
                <SubTitle color={Theme.Colors.black} size=".7em">{title}</SubTitle>
                <Description color={Theme.Colors.light_black}>{description}</Description>
        </S.CardContainer>
    )
}