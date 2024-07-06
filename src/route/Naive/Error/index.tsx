import { Card, CardBody, CardHeader, Heading, Text } from '@yamada-ui/react';
import { MdErrorOutline } from "@react-icons/all-files/md/MdErrorOutline"

const ErrorDisplay:React.FC<{error:Error}> = (props) => {
    return (
        <Card 
            w="full" 
            bgColor="red.400"
        >
            <CardHeader>
                <MdErrorOutline size="2em" />
                <Heading size={{base: "md", sm: "sm"}}>
                    エラーが発生しました
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>
                    {props.error.message}
                </Text>
            </CardBody>
        </Card>
    );
}

export default ErrorDisplay;