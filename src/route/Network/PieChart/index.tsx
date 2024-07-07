import { PieChart } from "@yamada-ui/charts";
import { NetworkResponse } from "@domain/network/payload";
import DomainService from "@domain/network/service";

const ResultPieChart: React.FC<{data: NetworkResponse}> = (props) => {
    console.log(props.data);
    return (
        <PieChart
            size="lg"
            w="full"
            color="#a0a0a0"
            data={new DomainService().formatResponse(props.data) || []}
            valueFormatter={(value) => `${value}%`}
            fillOpacity={[0.8, 0.5]}
            tooltipDataSource="segment"
        />
    );
}

export default ResultPieChart;