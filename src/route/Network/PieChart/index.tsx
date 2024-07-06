import { PieChart } from "@yamada-ui/charts";

const ResultPieChart: React.FC = () => {
    return (
        <PieChart
            size="lg"
            w="full"
            data={[
                {
                    name: "HP",
                    value: 106,
                    color: "green.500",
                },
                {
                    name: "こうげき",
                    value: 110,
                    color: "red.500",
                }]} 
            tooltipDataSource="segment" 
        />
    );
}

export default ResultPieChart;