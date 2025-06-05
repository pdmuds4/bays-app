import { NaiveRequest, NaiveResponse } from "@domain/naive/payload";
import RequestEntity from "@domain/naive/RequestEntity";
import { callAPI } from "@utils/callAPI";

export default class NaiveDomainService {
    async postToApi(request: RequestEntity): Promise<NaiveResponse> {
        return await callAPI<NaiveRequest, NaiveResponse>(
            "/baysapp/predict_naive",
            "POST",
            request.json
        );
    }

    formatResponse(response: NaiveResponse): {
        name: string,
        value: number,
        color: string
    }[] {
        return [
            {
                name: "天気",
                value: Math.round(response.weather) * 100,
                color: "#6999ff",
            },
            {
                name: "生活",
                value: Math.round(response.life) * 100,
                color: "#69ff94",
            },
            {
                name: "スポーツ",
                value: Math.round(response.sports) * 100,
                color: "#ff6969",
            },
            {
                name: "文化",
                value: Math.round(response.culture) * 100,
                color: "#ffc369",
            },
            {
                name: "経済",
                value: Math.round(response.economy) * 100,
                color: "#9e69ff",
            }
        ]
    }
}