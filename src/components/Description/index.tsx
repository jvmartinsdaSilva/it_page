import React from "react"

import * as S from "./style"

type SubTittleType = {
    color: string,
    children: React.ReactNode,
    
}

export const Description = ({ color, children, ...props }: SubTittleType) => {
    return (
        <S.DescriptionContainer color={color} {...props}>
            <p>
                {children}
            </p>
        </S.DescriptionContainer>
    )
}