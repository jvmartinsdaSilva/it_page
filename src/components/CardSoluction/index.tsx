import Image from "next/image"
import { Description } from "../Description"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"

type CardSoluctionType = {
    title: string,
    description: string,
    image: string,
}

export const CardSoluction = ({title, description ,image}: CardSoluctionType) => {
    return(
        <S.CardContainer>
            <Image
                src={image}
                width={175}
                height={175}
                alt=""
            />
            <S.Title>{title}</S.Title>
            <Description color={Theme.Colors.light_gray}>{description}</Description>
        </S.CardContainer>
    )
}