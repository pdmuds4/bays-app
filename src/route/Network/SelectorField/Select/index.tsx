import { Flex, Select, Text, Option } from "@yamada-ui/react";


const CategorySelect: React.FC<{
    placeholder: string;
    disabled?: boolean;
    options?: {value: string, label: string}[];
    onChange?: (value: string) => void;
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
                placeholder="選択されていません"
                variant="fill" 
                color="#716aff" 
                bgColor="white"
                onChange={props.onChange}
                isReadOnly={props.disabled}
                opacity={props.disabled ? 0.5 : 1}
            >
                {props.options?.map((option) => (
                    <Option value={option.value}>{option.label}</Option>
                ))}
            </Select>
        </Flex>
    );
}

export default CategorySelect;