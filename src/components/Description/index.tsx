import React from "react"

import * as S from "./style"

type SubTittleType = {
    color: string,
    children: React.ReactNode
}

export const Description = ({ color, children }: SubTittleType) => {
    return (
        <S.DescriptionContainer color={color}>
            <p>
                {children}
            </p>
        </S.DescriptionContainer>
    )
}