import { Button, ButtonGroup, Card, CardBody, CardHeader, Heading, Text } from '@yamada-ui/react';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaFilePowerpoint } from "@react-icons/all-files/fa/FaFilePowerpoint";

const DescriptCard: React.FC = () => {
    return (
        <Card 
            w="full" 
            backgroundImage="linear-gradient(135deg, #0083cf 0%, #5dffbc 100%)"
        >
            <CardHeader>
                <Heading size="md">
                    「推定」ボタンで分析を開始
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>
                    このアプリではPythonライブラリ「MeCab」を使った文章の形態要素解析を行なっています。
                    形態要素解析によって分類された品詞ごとに、あらかじめ分類された学習データに含まれる確率を計算します。
                    そのカテゴリーの算出値が高いほど、そのカテゴリーに分類される確率が高いと判断されます。
                </Text>
                <ButtonGroup w="full" gap="lg">
                    <Button 
                        margin="0 auto"
                        w="full"
                        size="lg"
                        colorScheme='gray'
                        leftIcon={<FaGithub />}
                        onClick={() => window.open(
                            "https://github.com/pdmuds4/bays-app", 
                            "_blank"
                        )}
                    >GitHub</Button>
                    <Button 
                        margin="0 auto"
                        w="full"
                        size="lg"
                        colorScheme='gray'
                        leftIcon={<FaFilePowerpoint />}
                        onClick={() => window.open(
                            "https://docs.google.com/presentation/d/1y2cvjIIU264NNkVlBFIMAkp00QBK9B6pdNWhBWY02ds/edit?usp=sharing", 
                            "_blank"
                        )}
                    >Documentation</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
}

export default DescriptCard;