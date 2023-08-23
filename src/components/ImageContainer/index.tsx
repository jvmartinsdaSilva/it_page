import * as S from "./style"


type ImgContainerType = {
    img: string;
    heigth: string
}

export const ImgContainer = ({img, heigth}: ImgContainerType) => {
    return(
        <S.Container heigth={heigth}>
            <img src={img} />
        </S.Container>
    )
}
