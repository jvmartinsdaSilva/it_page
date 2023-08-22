import { SubTitle } from "../SubTittle"
import { Description } from "../Description"
import { CardSoluction } from "../CardSoluction"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"


export const SoluctionSecetion = () => {
    return(
        <S.Container>
            <S.Title>
                <SubTitle size="1em" color={Theme.Colors.medium_black}>IT solutions foryour business.</SubTitle>
                <Description color={Theme.Colors.medium_black}>Hub IT allows your business and technology computers to store, transmit, analyze,and manipulate big data in the digital world</Description>
            </S.Title>
            <S.Soluctions>
                <CardSoluction
                    image="/soluctions/image1.png"
                    title="It Security"
                    description="Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world." 
                    />
                <CardSoluction
                    image="/soluctions/image2.png"
                    title="Mobile Data"
                    description="Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world." 
                    />
                <CardSoluction
                    image="/soluctions/image1.png"
                    title="For Companies"
                    description="Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world." 
                    />
            </S.Soluctions>
        </S.Container>
    )
}