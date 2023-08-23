import Image from "next/image"
import { SubTitle } from "../SubTittle"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"

type CardNewType = {
    category: string,
    title: string,
    image: string
    write: {
        name: string,
        img: string
        date: string,
    }
}

export const CardNews = ({category, title, image, write}: CardNewType) => {
    return(
        <S.Container>
            <Image
                src={image}
                width={250}
                height={150}
                alt=""
                />
            <S.Category>{category}</S.Category>
            <SubTitle color={Theme.Colors.navy_blue} size=".7em" >{title}</SubTitle>
            <S.Write>
                <Image
                    src={write.img}
                    width={30}
                    height={30}
                    alt=""
                    />
                    <S.WriteName>{write.name}</S.WriteName>
                    <S.Date>{write.date}</S.Date>
            </S.Write>
        </S.Container>
    )
}