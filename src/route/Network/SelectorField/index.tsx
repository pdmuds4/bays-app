import { useState } from "react";
import { Select, Option, Button, ButtonGroup, Divider } from "@yamada-ui/react";
import { FaChartPie } from "@react-icons/all-files/fa/FaChartPie";
import { BiReset } from "@react-icons/all-files/bi/BiReset"
import CategorySelect from "./Select";

const SelectorField: React.FC = () => {
    const [payload, setPayload] = useState({type: "", evidence: null});
    
    return (
        <>
            <Select 
                placeholder="推定したい項目を選択" 
                variant="fill" 
                color="#716aff" 
                bgColor="white"
                onChange={
                    (value) => setPayload({...payload, type: value})
                }
            >
                <Option value="category">アプリのカテゴリー</Option>
                <Option value="sex">性別</Option>
                <Option value="time">使用時刻</Option>
                <Option value="use_time">使用時間</Option>
            </Select>
            <Divider />

            <CategorySelect 
                placeholder="アプリのカテゴリー" 
                onChange={
                    (value) => console.log(value)
                }
                disabled={payload.type === "" || payload.type === "category"}
            />
            <CategorySelect 
                placeholder="性別" 
                onChange={
                    (value) => console.log(value)
                }
                disabled={payload.type === "" || payload.type === "sex"}
            />
            <CategorySelect 
                placeholder="使用時刻" 
                onChange={
                    (value) => console.log(value)
                }
                disabled={payload.type === "" || payload.type === "time"}
            />
            <CategorySelect 
                placeholder="使用時間" 
                onChange={
                    (value) => console.log(value)
                }
                disabled={payload.type === "" || payload.type === "use_time"}
            />

            <ButtonGroup w="full" gap="lg">
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="indigo"
                    size="lg"
                    leftIcon={<FaChartPie />}
                    disabled={payload.type === "" || payload.evidence === null}
                >推定</Button>
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="emerald"
                    size="lg"
                    leftIcon={<BiReset />}
                    disabled={payload.type === "" && payload.evidence === null}
                >リセット</Button>
            </ButtonGroup>
        </>
    );
}

export default SelectorField;