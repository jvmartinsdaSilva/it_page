import * as S from "./style"

type IconType = {
    icon: string
}

export const Icon = ({icon}: IconType) => {
    return(
        <S.IconService>
            <img src={icon} />
        </S.IconService>
    )
}