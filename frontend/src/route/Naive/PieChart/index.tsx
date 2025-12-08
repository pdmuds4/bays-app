import { PieChart } from "@yamada-ui/charts";
import { NaiveResponse } from "@domain/naive/payload";
import DomainService from "@domain/naive/service";

const ResultPieChart: React.FC<{data: NaiveResponse}> = (props) => {
    return (
        <PieChart
            size="lg"
            w="full"
            color="#a0a0a0"
            data={new DomainService().formatResponse(props.data)}
            valueFormatter={(value) => `${value}%`}
            fillOpacity={[0.8, 0.5]}
        />
    );
}

export default ResultPieChart;