import { Button, Text, Heading, Tooltip, Container, Divider } from "@yamada-ui/react";

type Props = {
    children?: React.ReactNode;
    title: string;
    detail: string;
    href: string;
}

const ToPageButton: React.FC<Props> = (props) => {
    return (
        <Tooltip 
            maxWidth={{base: "lg", md:"300px", sm: "300px"}}
            label={
                <Container padding="1vw">
                    <Text size="4xl">
                        {props.detail}
                    </Text>
                    <Divider variant="solid" />
                    {props.children}
                </Container>
            }
        >
            <Button
                color="#3b9dff"
                bgColor="white"
                padding="7vh 0"
                onClick={()=>location.href = props.href}
            >   
                <Heading size={{base: "lg", md: "md", sm: "md"}}>
                    {props.title}
                </Heading>
            </Button>
        </Tooltip>
    );
}

export default ToPageButton;