import React from "react"
import { Theme } from "@/Themes/Theme"

import * as S from "./style"

type SubTittleType = {
    color: string,
    size?: string,
    children: React.ReactNode
}

export const SubTitle = ({ 
    color = Theme.Colors.black, 
    size = ".7em", 
    children }: SubTittleType) => {
    return (
        <S.SubiTittleContainer color={color} size={size}>
            <h2>
                {children}
            </h2>
        </S.SubiTittleContainer>
    )
}