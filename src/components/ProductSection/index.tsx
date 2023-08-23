import { SubTitle } from "../SubTittle"
import { CardProduct } from "../CardProduct"
 
import * as S from "./style"
import { Theme } from "@/Themes/Theme"

export const ProductSection = () => {
    return(
        <S.Container>
            <SubTitle color={Theme.Colors.navy_blue_dark} size="1em">Why our product are different</SubTitle>
            <S.ProductsList>
                <CardProduct 
                    icon="/productIcons/category.svg" 
                    title="Solve Problems Real Time"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    />
                <CardProduct 
                    icon="/productIcons/category.svg" 
                    title="Solve Problems Real Time"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    />
                <CardProduct 
                    icon="/productIcons/category.svg" 
                    title="Solve Problems Real Time"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    />
            </S.ProductsList>
        </S.Container>
    )
}