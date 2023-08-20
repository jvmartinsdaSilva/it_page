import { LogoSpinfluence } from "../LogoSpinfluence"
import { Navegation } from "../Navegation"
import * as S from "./style"


export const Header = () => {
    return(
        <S.HeaderContainer>
            <LogoSpinfluence />
            <Navegation />
        </S.HeaderContainer>
    )
}