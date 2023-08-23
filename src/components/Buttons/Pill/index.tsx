import * as S from "./style"

type ButtonTypes = {
    text: string
}


export const ButtonPill = ({text}: ButtonTypes) => {
    return(
        <S.ButtonPill>{text}</S.ButtonPill>
    )
}