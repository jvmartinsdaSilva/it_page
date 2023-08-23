import { SubTitle } from "../SubTittle"
import { Description } from "../Description"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"
import { Icon } from "../Icon"

type CardProductTypes = {
    icon: string
    title: string,
    description: string,
}

export const CardProduct = ({ icon, title, description }: CardProductTypes) => {
    return (
        <S.Container>
            <Icon icon={icon} />
            <S.InfosArea>
                <SubTitle size="1em" color={Theme.Colors.navy_blue_dark}>{title}</SubTitle>
                <Description color={Theme.Colors.light_gray}>{description}</Description>
            </S.InfosArea>
            <S.LearnMore>Learn More </S.LearnMore>
        </S.Container>
    )
}  