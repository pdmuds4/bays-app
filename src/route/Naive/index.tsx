import "./style.css";
import { Heading, Container, Text, SimpleGrid, List, ListItem } from "@yamada-ui/react"

import DescriptCard from "./Card";
import ResultPieChart from "./PieChart";
import LoadingDisplay from "./Loading";
import TextField from "./TextField";

const Naive:React.FC = () => {
    return (
        <Container className="naive-body">
            <Heading
                textAlign="center"
                size={{base: "3xl", md: "2xl", sm: "lg"}}
            >
                ニュース記事分類推定
            </Heading>
            <Text 
                textAlign="left"
                className="naive-descript" 
                fontSize={{base: "2xl", md: "lg", sm: "md"}}
            >
                任意のニュース記事の文章を、「天気」「生活」「スポーツ」「文化」「経済」からそれぞれに分類できる確率を円グラフで掲示します。

            </Text>
            <List 
                className="naive-descript"
                textAlign="left"
                fontSize={{base: "md", sm: "small"}}
            >
                <ListItem>- 日本語以外には対応していません</ListItem>
                <ListItem>- 少なくとも1文字以上の全角文字が含まれている必要があります</ListItem>
                <ListItem>- 文字数に制限はありませんが、文章が長い場合、推定に時間がかかることがあります</ListItem>
            </List>
            <SimpleGrid
                w="full" 
                columns={{base: 2, md: 1}}>
                <Container centerContent>
                    <TextField />
                </Container>
                <Container margin="auto 0" centerContent>
                    {/* <DescriptCard /> */}
                    {/* <ResultPieChart /> */}
                    {/* <LoadingDisplay /> */}
                </Container>
            </SimpleGrid>
        </Container>
    );
};

export default Naive;