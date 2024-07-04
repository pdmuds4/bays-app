import { NaiveRequest } from "naive";

export default class NaiveRequestEntity {
    constructor(
        private _sentence: string
    ) {}

    get json(): NaiveRequest {
        return {
            sentence: this._sentence
        }
    }
}