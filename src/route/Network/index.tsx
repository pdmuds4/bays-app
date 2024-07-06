import "./style.css";
import { Container, Heading, Text, SimpleGrid, List, ListItem } from "@yamada-ui/react";
import DescriptCard from "./Card";
import SelectorField from "./SelectorField";
import ResultPieChart from "./PieChart";
import LoadingDisplay from "./Loading"

const Network:React.FC = () => {
    return (
        <Container className="network-body">
            <Heading
                textAlign="center"
                size={{base: "3xl", md: "2xl", sm: "lg"}}
            >
                ニュース記事分類推定
            </Heading>
            <Text 
                textAlign="left"
                className="network-descript" 
                fontSize={{base: "2xl", md: "lg", sm: "md"}}
            >
                「性別」「使用時間」「使った時刻」「使ったアプリのカテゴリー」のいずれかの情報から他の情報を推定します。

            </Text>
            <List 
                className="network-descript"
                textAlign="left"
                fontSize={{base: "md", sm: "small"}}
            >
                <ListItem>- </ListItem>
            </List>
            <SimpleGrid
                w="full" 
                columns={{base: 2, md: 1}}>
                <Container centerContent>
                    <SelectorField />
                </Container>
                <Container margin="auto 0" centerContent>
                    <DescriptCard />
                    {/* <ResultPieChart /> */}
                    {/* <LoadingDisplay /> */}
                </Container>
            </SimpleGrid>
        </Container>
    );
};

export default Network;