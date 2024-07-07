import { NetworkRequest } from "@domain/network/payload";

export default class NetworkRequestEntity {
    constructor(
        private _type: string,
        private _evidence: NetworkRequest["evidence"]
    ) {}

    get json(): NetworkRequest {
        return {
            type: this._type,
            evidence: this._evidence
        }
    }
}
