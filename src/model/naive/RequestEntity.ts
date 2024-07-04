import { NaiveRequest } from "@domain/naive/payload";

export default class NaiveRequestEntity {
    constructor(
        private _sentence: NaiveRequest["sentence"],
    ) {}

    get json(): NaiveRequest {
        return {
            sentence: this._sentence
        }
    }
}