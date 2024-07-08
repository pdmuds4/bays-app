import { NetworkRequest, NetworkResponse } from "@domain/network/payload";
import RequestEntity from "@domain/network/RequestEntity";
import NetworkRepository from "@domain/network/repository";
import { callAPI } from "@utils/callAPI";

export default class NetworkDomainService {
    async postToApi(request: RequestEntity): Promise<NetworkResponse> {
        return await callAPI<NetworkRequest, NetworkResponse>(
            "/bays/network",
            "POST",
            request.json
        );
    }

    formatResponse(response: NetworkResponse): {
        name: string,
        value: number,
        color: string
    }[] | undefined {
        if (response.type === "category") {
            const category_colors: string[] = [
                "red.500",
                "orange.500",
                "yellow.500",
                "green.500",
                "teal.500",
                "blue.500",
                "cyan.500",
                "purple.500",
                "pink.500",
                "gray.500"
            ];

            return Object.entries(NetworkRepository.getCategoryNames().evidence).map(
                ([value, label], i)=>{
                    return {
                        name: label,
                        value: Math.round(response.score[value]*100) as number,
                        color: category_colors[i]
                    }
                }
            )
        } else if (response.type === "sex") {
            const category_colors: string[] = [
                "red.500",
                "blue.500"
            ];

            return Object.entries(NetworkRepository.getSexNames().evidence).map(
                ([value, label], i)=>{
                    return {
                        name: label,
                        value: Math.round(response.score[value]*100) as number,
                        color: category_colors[i]
                    }
                }
            )
        } else if (response.type === "time") {
            const category_colors: string[] = [
                "#8bff7b",
                "#3a90ff",
                "#ffac4e",
                "#284f8e"
            ];

            return Object.entries(NetworkRepository.getTimeNames().evidence).map(
                ([value, label], i)=>{
                    return {
                        name: label,
                        value: Math.round(response.score[value]*100) as number,
                        color: category_colors[i]
                    }
                }
            )
        } else if (response.type === "use_time") {
            const category_colors: string[] = [
                "#ffd34e",
                "#ffa94e",
                "#ff894e",
                "#ff4e4e",
            ];

            return Object.entries(NetworkRepository.getUseTimeNames().evidence).map(
                ([value, label], i)=>{
                    return {
                        name: label,
                        value: Math.round(response.score[value]*100) as number,
                        color: category_colors[i]
                    }
                }
            )
        }
        
    }
}