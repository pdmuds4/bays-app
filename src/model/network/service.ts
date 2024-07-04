import { NetworkRequest, NetworkResponse } from "@domain/network/payload";
import RequestEntity from "@domain/network/RequestEntity";
import { callAPI } from "@utils/callAPI";

export default class NetworkDomainService {
    async postToApi(request: RequestEntity): Promise<NetworkResponse> {
        return await callAPI<NetworkRequest, NetworkResponse>(
            "http://localhost:5173/api/bays/network",
            "POST",
            request.json
        );
    }
}