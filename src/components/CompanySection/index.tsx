import Image from "next/image"

import { SubTitle } from "../SubTittle"
import { Description } from "../Description"
import { ButtonDefault } from "../Buttons/Default"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"

export const CompanySection = () => {
    return(
        <S.Container>
            <S.ImgContainer>
                <Image 
                src="/company/image1.png"
                width={286}
                height={300}
                alt=""
                />
                <S.RetangleBottom />
                <S.RetangleMessage>
                    <span>45+ <br/> Years of Sperence</span>
                </S.RetangleMessage>
                <S.SubImage>
                    <Image
                        src="/company/image2.png" 
                        width={136}
                        height={150}
                        alt=""
                        />
                </S.SubImage>
            </S.ImgContainer>
            <S.InfoContainer>
                <S.Info>COMPANY'S VISION</S.Info>
                <SubTitle color={Theme.Colors.medium_black} size="1.3em">
                    It solutions <br/>
                    foryou business.
                </SubTitle>
                <Description color={Theme.Colors.medium_black}>
                    Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.
                </Description>
                <ButtonDefault txt="Read More" />
            </S.InfoContainer>
        </S.Container>
    )
}