import "./style.css";
import { Container, Heading, SimpleGrid } from "@yamada-ui/react";
import ToPageButton from "./Button";

const Home: React.FC = () => {
    return (
        <Container className="home-body" centerContent>
            <Heading
                className="home-title"
                size={{base: "3xl", md: "2xl", sm: "xl"}}
            >
                ベイズ推論アプリ
            </Heading>

            <SimpleGrid 
                w="full" 
                columns={{base: 2, md: 2, sm: 1}}  
                padding="0 4vw"
                gap="5vw"
            >
                <ToPageButton 
                    title="ニュース記事分類推定" 
                    detail="任意のニュース記事の文章を、「天気」「生活」「スポーツ」「文化」「経済」からそれぞれに分類できる確率を掲示します" 
                    href="/naive"
                >
                    
                </ToPageButton>
                <ToPageButton 
                    title="スマホ利用状況推定" 
                    detail="「性別」「使用時間」「使った時刻」「使ったアプリのカテゴリー」のいずれかの情報から他の情報を推定します" 
                    href="/network"
                />
            </SimpleGrid>
            
        </Container>
    );
};

export default Home;