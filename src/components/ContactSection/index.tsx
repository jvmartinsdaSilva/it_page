import { SubTitle } from "../SubTittle"
import { Description } from "../Description"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"
import { ButtonPill } from "../Buttons/Pill"

export const ContactContainer = () => {
    return (
            <S.Container id="contact">
                <S.Modal>
                    <S.TextContainer>
                        <SubTitle color={Theme.Colors.white} size="1em" >
                            Ready to get started? <br />
                            Get your Finance out of the way
                        </SubTitle>
                        <Description color={Theme.Colors.light_white}>
                            If you deliver enough value, making money becomes the easy part. Why should you be stressful? Let us make this easier for you.
                        </Description>
                        <ButtonPill text="Contact Us" />
                    </S.TextContainer>
                </S.Modal>
            </S.Container>
    )
}