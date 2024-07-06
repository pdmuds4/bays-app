import { useState } from "react";
import { Textarea, Button, ButtonGroup } from "@yamada-ui/react";
import { FaChartPie } from "@react-icons/all-files/fa/FaChartPie";
import { BiReset } from "@react-icons/all-files/bi/BiReset"

const TextField: React.FC = () => {
    const [inText, setInText] = useState<string>("");
    return (
        <>
            <Textarea
                variant="filled"
                focusBorderColor="#74ffc3"
                isInvalid
                errorBorderColor="white"
                autosize
                minRows={7}
                size={{base: "md", md: "sm"}}
                placeholder="ニュース記事の文章を入力してください"
                _placeholder={{ opacity: 0.7, color: "white" }}
                onKeyUp={(e) => setInText(
                    /[^\u0020-\u007E\uFF61-\uFF9F]/.test((e.target as HTMLInputElement).value) 
                    ? (e.target as HTMLInputElement).value : ""
                )}
            />
            <ButtonGroup w="full" gap="lg">
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="blue"
                    size="lg"
                    leftIcon={<FaChartPie />}
                    disabled={!inText.length}
                >推定</Button>
                <Button 
                    margin="0 auto"
                    w="full"
                    colorScheme="emerald"
                    size="lg"
                    leftIcon={<BiReset />}
                    disabled={!inText.length}
                >リセット</Button>
            </ButtonGroup>
        </>
    );
}

export default TextField;