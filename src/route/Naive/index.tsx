import "./style.css";
import { 
    Heading, Container, Text, SimpleGrid, List, ListItem, 
    useAsyncRetry
} from "@yamada-ui/react"
import { useState } from "react";

import TextField from "./TextField";
import DescriptCard from "./Card";
import LoadingDisplay from "./Loading";
import ErrorDisplay from "./Error";
import ResultPieChart from "./PieChart";

import RequestEntity from "@domain/naive/RequestEntity";
import DomainService from "@domain/naive/service";

const Naive:React.FC = () => {
    const [payload, setPayload] = useState<string>("");
    const { value: response, error, loading, retry: mockCallApi } = useAsyncRetry(
        async () => {
            console.log(payload);
            if (payload.length) {
                const request = new RequestEntity(payload);
                return await new DomainService().postToApi(request);
            }
        }, [],
    )
    
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
                    <TextField
                        getPayload={(arg: string) => setPayload(arg)}
                        submitEvent={mockCallApi}
                        resetEvent={()=>{
                            setPayload("")
                            mockCallApi()
                        }}
                    />
                </Container>
                <Container margin="auto 0" centerContent>
                    { loading ? 
                        <LoadingDisplay 
                            detail={payload.length ? "確率を計算しています..." : "読み込み中..."} 
                        /> 
                    : error ?
                        <ErrorDisplay error={error} />
                    : response ?
                        <ResultPieChart data={response}/>
                    : 
                        <DescriptCard />
                    }
                </Container>
            </SimpleGrid>
        </Container>
    );
};

export default Naive;