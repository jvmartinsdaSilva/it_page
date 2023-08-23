import * as S from "./style"

type ListInfosType = {
    title: string,
    infos: string[]
}

export const ListInfos = ({title, infos}: ListInfosType) => {
    return(
        <S.ListContainer>
            <S.ListTitle>{title}</S.ListTitle>
            {infos.map(info => (
                <S.ListItem>{info}</S.ListItem>
            ))}
        </S.ListContainer>
    )
}