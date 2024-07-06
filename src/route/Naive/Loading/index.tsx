import { Heading, Loading } from "@yamada-ui/react";

const LoadingDisplay: React.FC = () => {
    return (
        <>  
            <Loading variant="grid" size="6xl" color="white"/>
            <Heading>
                確率を計算中...
            </Heading>
        </>
    );
}

export default LoadingDisplay;