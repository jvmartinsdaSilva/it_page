import * as S from "./style"

type TypeButtonDefault = {
    txt: string
}

export const ButtonDefault = ({txt}: TypeButtonDefault) => {
    return(
        <S.ButtonContainer>
            {txt}
        </S.ButtonContainer>
    )
}