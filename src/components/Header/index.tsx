import { LogoSpinfluence } from "../LogoSpinfluence"
import { Navegation } from "../Navegation"
import * as S from "./style"


export const Header = () => {
    return (
        <S.HeaderContainer>
            <a href="#home">
                <LogoSpinfluence />

            </a>
            <Navegation />
        </S.HeaderContainer>
    )
}