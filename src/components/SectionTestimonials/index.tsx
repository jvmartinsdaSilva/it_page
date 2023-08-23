import { SubTitle } from "../SubTittle"
import { Description } from "../Description"

import Image from "next/image"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"

export const SectionTestimonials = () => {
    return(
        <S.Container>
            <S.TestiMonialsContainer>
                <Image
                    src="/people.jpg"
                    alt=""
                    width={250}
                    height={250}
                    />
            <S.Testimonial>
                <SubTitle size="1em" color={Theme.Colors.white}> Satisfied Customers</SubTitle>
                <Description color={Theme.Colors.white} font="Merriweather">Every detail has been taken care these team are realy amazing and talented! They can help me with fast and accurate solutions to all kinds of issues. Love it! Five stars for them.</Description>
                <S.InfosPeople>
                    Joeby Rapga <br/>
                    Associate
                </S.InfosPeople>
            </S.Testimonial>
            </S.TestiMonialsContainer>
        </S.Container>
    )
}