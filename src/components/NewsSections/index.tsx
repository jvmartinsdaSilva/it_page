import { CardNews } from "../CardNews"
import { SubTitle } from "../SubTittle"

import * as S from "./style"
import { Theme } from "@/Themes/Theme"

export const NewsSection = () => {
    return (
        <S.Container id="news">
            <SubTitle color={Theme.Colors.black} size="1.5em">Last News</SubTitle>
            <S.NewsList>
                <CardNews
                    image="/news/post1.jpg"
                    category="Finace"
                    title="Business Mistakes to Avoid When Starting a Business"
                    write={{
                        name: "Alexander Samokhin",
                        date: "July 06, 2018",
                        img: "/writes/write1.png"
                    }}
                />
                <CardNews
                    image="/news/post2.jpg"
                    category="Stock"
                    title="Utilize these nine resources to help you take the stress out of preparing your taxes"
                    write={{
                        name: "Alexander Samokhin",
                        date: "July 12, 2018",
                        img: "/writes/write1.png"
                    }}
                />
                <CardNews
                    image="/news/post1.jpg"
                    category="Finace"
                    title="Business Mistakes to Avoid When Starting a Business"
                    write={{
                        name: "Alexander Samokhin",
                        date: "July 06, 2018",
                        img: "/writes/write1.png"
                    }}
                />
            </S.NewsList>
        </S.Container>
    )
}