import { Button, ButtonGroup, Card, CardBody, CardHeader, Heading, Text } from '@yamada-ui/react';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaFilePowerpoint } from "@react-icons/all-files/fa/FaFilePowerpoint";

const DescriptCard: React.FC = () => {
    return (
        <Card 
            w="full" 
            backgroundImage="linear-gradient(135deg, #0083cf 0%, #a8a4ff 100%)"
        >
            <CardHeader>
                <Heading size="md">
                    「推定」ボタンで分析を開始
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>
                    このアプリではPythonライブラリ「pgmpy」を使ったベイジアンネットワークを構築しています。
                    「性別」⇨「使用時間」、「使った時刻」⇨「使用時間」、「使用時間」⇨「使ったアプリのカテゴリー」というネットワークを内部で構築しており、
                    入力された複数の項目の条件下で、推定したい項目の確率分布を計算します。

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
                            "https://docs.google.com/presentation/d/1rQbVaiXNp_AhYvjGyUoJ0c6lB7Aobr3YMpRuLD99H_Q/edit?usp=sharing", 
                            "_blank"
                        )}
                    >Documentation</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
}

export default DescriptCard;