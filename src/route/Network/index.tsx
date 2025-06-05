import "./style.css";
import { useState } from "react";
import { 
    Container, Heading, Text, SimpleGrid, List, ListItem,
    useAsyncRetry
} from "@yamada-ui/react";

import SelectorField from "./SelectorField";
import DescriptCard from "./Card";
import LoadingDisplay from "./Loading"
import ErrorDisplay from "./Error";
import ResultPieChart from "./PieChart";

import RequestEntity from "@domain/network/RequestEntity";
import DomainService from "@domain/network/service";

const Network:React.FC = () => {
    const [payload, setPayload] = useState({type: "", evidence: {}});
    const { value: response, error, loading, retry: mockCallApi } = useAsyncRetry(
        async () => {
            if (["category", "sex", "time", "use_time"].some((t) => t === payload.type)) {
                console.log(payload);
                const request = new RequestEntity(
                    payload.type as "category" | "sex" | "time" | "use_time",
                    payload.evidence
                );
                return await new DomainService().postToApi(request);
            }
        }, [],
    )

    return (
        <Container className="network-body">
            <Heading
                textAlign="center"
                size={{base: "3xl", md: "2xl", sm: "lg"}}
            >
                スマホ利用状況推定
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
                <ListItem>- 大学生10人のスマホから、1日分のスクリーンタイムを集計したデータを使用しています</ListItem>
                <ListItem>- 推定したい項目と同じ条件項目を設定することはできません</ListItem>
            </List>
            <SimpleGrid
                w="full" 
                columns={{base: 2, md: 1}}>
                <Container centerContent>
                    <SelectorField 
                        getPayload={(arg) => setPayload(arg)}
                        submitEvent={mockCallApi}
                        resetEvent={() => {
                            mockCallApi()
                        }}
                    />
                </Container>
                <Container margin="auto 0" centerContent>
                    { loading ? 
                        <LoadingDisplay 
                            detail={payload.type==="" ? "確率を計算しています..." : "読み込み中..."} 
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

export default Network;