import { CardService } from "../CardService"

import * as S from "./style"

export const ServiceSection = () => {
    return(
        <S.Container>
            <CardService
                title="Core WordExpress"
                description="Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world."
                image="/serviceIcons/image1.svg"
                />
            <CardService
                title="Core WordExpress"
                description="Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world."
                image="/serviceIcons/image5.svg"
                />
            <CardService
                title="Core WordExpress"
                description="Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world."
                image="/serviceIcons/image1.svg"
                />
        </S.Container>
    )
}