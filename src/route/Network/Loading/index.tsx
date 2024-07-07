import { Heading, Loading } from "@yamada-ui/react";

const LoadingDisplay: React.FC<{detail: string}> = (props) => {
    return (
        <>  
            <Loading variant="grid" size="6xl" color="white"/>
            <Heading>
                {props.detail}
            </Heading>
        </>
    );
}

export default LoadingDisplay;