import { Flex, Select, Text, Option } from "@yamada-ui/react";

const CategorySelect: React.FC<{
    value: string;
    placeholder: string;
    disabled: boolean;
    options: string[];
    onChange: (value: string) => void;
}> = (props) => {
    return (
        <Flex w="full" justifyContent="center">
            <Text 
                width="50%" 
                fontSize={{base: "xl", lg: "lg", md:"md", sm: "small"}} 
                margin="auto 0"
                opacity={props.disabled ? 0.5 : 1}
            >
                {props.placeholder}
            </Text>
            <Select
                width="50%"
                placeholder="条件を設定"
                variant="fill" 
                color="#716aff" 
                bgColor="white"
                value={props.value}
                onChange={props.onChange}
                isReadOnly={props.disabled}
                opacity={props.disabled ? 0.5 : 1}
            >
                {props.options?.map((label, i) => (
                    <Option key={i} value={String(i)}>{label}</Option>
                ))}
            </Select>
        </Flex>
    );
}

export default CategorySelect;