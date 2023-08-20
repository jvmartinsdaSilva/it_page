import React from "react"

import * as S from "./style"

type SubTittleType = {
    color: string,
    children: React.ReactNode
}

export const SubTitle = ({ color, children }: SubTittleType) => {
    return (
        <S.SubiTittleContainer color={color}>
            <h2>
                {children}
            </h2>
        </S.SubiTittleContainer>
    )
}