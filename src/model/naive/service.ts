import { NaiveRequest, NaiveResponse } from "naive";
import RequestEntity from "@domain/naive/RequestEntity";
import { callAPI } from "@utils/callAPI";

export default class NaiveDomainService {
    async postToApi(request: RequestEntity): Promise<NaiveResponse> {
        return await callAPI<NaiveRequest, NaiveResponse>(
            "/api/bays/naive",
            "POST",
            request.json
        );
    }
}