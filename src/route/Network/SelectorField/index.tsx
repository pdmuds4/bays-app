import { useState } from "react";
import { Select, Option, Button, ButtonGroup, Divider } from "@yamada-ui/react";
import { BiReset } from "@react-icons/all-files/bi/BiReset";
import { FaChartPie } from "@react-icons/all-files/fa/FaChartPie";
import CategorySelect from "./Select";

import NetworkRepository from "@domain/network/repository";

const SelectorField: React.FC<{
    getPayload: (arg: {type: string, evidence: {[key: string]: number}}) => void,
    submitEvent: () => void,
    resetEvent: () => void,
}> = (props) => {
    const [selectValues, setSelect] = useState<{
        type: string, 
        evidence: { 
            category: string,
            sex: string,
            time: string,
            use_time: string,
        } & Record<string, string> // Add string index signature
    }>({
        type: "", 
        evidence: {
            category: "",
            sex: "",
            time: "",
            use_time: "",
        }
    });

    return (
        <>
            <Select 
                placeholder="推定したい項目を選択" 
                variant="fill" 
                color="#716aff" 
                bgColor="white"
                value={selectValues.type}
                onChange={
                    (value) => {
                        setSelect({...selectValues, type: value})
                    }
                }
            >
                { 
                    NetworkRepository.getAllNames().map((c, i) => {
                        return <Option key={i} value={c.name}>{c.label}</Option>
                    })
                }
            </Select>
            <Divider />
            {
                NetworkRepository.getAllNames().map((c,i) => {
                    return (
                        <CategorySelect
                            key={i}
                            value={selectValues.evidence[c.name]}
                            placeholder={c.label}
                            onChange={(value) => {
                                setSelect({
                                    ...selectValues, 
                                    evidence: {...selectValues.evidence, [c.name]: value}
                                })
                            }}
                            options={Object.values(c.evidence)}
                            disabled={selectValues.type === "" || selectValues.type === c.name}
                        />
                    )
                })
            }

            <ButtonGroup w="full" gap="lg">
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="indigo"
                    size="lg"
                    leftIcon={<FaChartPie />}
                    disabled={
                        selectValues.type === "" || 
                        Object.values(selectValues.evidence).filter(
                            (p)=>!Number.isNaN(p)
                        ).length === 0
                    }
                    onClick={() => {
                        props.getPayload(
                            {
                                type: selectValues.type, 
                                evidence: Object.fromEntries(
                                    Object.entries(selectValues.evidence).filter(
                                        ([k,v]) => k !== selectValues.type && v !== ""
                                    ).map(([k,v]) => [k,Number(v)])
                                )
                            }
                        );
                        props.submitEvent();
                    }}
                >推定</Button>
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="emerald"
                    size="lg"
                    leftIcon={<BiReset />}
                    disabled={
                        selectValues.type === ""
                    }
                    onClick={()=>{
                        setSelect({
                            type: "", 
                            evidence: {
                                category: "",
                                sex: "",
                                time: "",
                                use_time: "",
                        }});
                        props.getPayload({type: "", evidence: {}});
                        props.resetEvent();
                    }}
                >リセット</Button>
            </ButtonGroup>
        </>
    );
}

export default SelectorField;