import { useState, useRef } from "react";
import { Textarea, Button, ButtonGroup } from "@yamada-ui/react";
import { FaChartPie } from "@react-icons/all-files/fa/FaChartPie";
import { BiReset } from "@react-icons/all-files/bi/BiReset"

const TextField: React.FC<{
    getPayload: (arg: string) => void,
    submitEvent: () => void,
    resetEvent: () => void
}> = (props) => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [textValue, setText] = useState<string>("");
    return (
        <>
            <Textarea
                ref={textRef}
                variant="filled"
                focusBorderColor="#74ffc3"
                isInvalid
                errorBorderColor="white"
                autosize
                minRows={7}
                size={{base: "md", md: "sm"}}
                placeholder="ニュース記事の文章を入力してください"
                _placeholder={{ opacity: 0.7, color: "white" }}
                onKeyUp={() => {
                    const inputValue = textRef.current ? textRef.current.value : "";
                    setText(
                        /[^\u0020-\u007E\uFF61-\uFF9F]/.test(inputValue)
                        ? inputValue : ""
                    )
                    console.log(inputValue);
                    props.getPayload(inputValue)
                }}
            />
            <ButtonGroup w="full" gap="lg">
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="blue"
                    size="lg"
                    leftIcon={<FaChartPie />}
                    disabled={!textValue.length}
                    onClick={props.submitEvent}
                >推定</Button>
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="emerald"
                    size="lg"
                    leftIcon={<BiReset />}
                    disabled={!textValue.length}
                    onClick={()=>{
                        props.resetEvent()
                        textRef.current ? textRef.current.value = "" : null;
                        setText("")
                    }}
                >リセット</Button>
            </ButtonGroup>
        </>
    );
}

export default TextField;