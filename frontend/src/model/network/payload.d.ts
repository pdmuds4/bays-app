import { CategoryScore, SexScore, TimeScore, UseTimeScore } from "@domain/naive/score";

export type NetworkRequest = {
    type: "category" | "sex" | "time" | "use_time";
    evidence: {
        category?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 ,
        sex?: 0 | 1 ,
        time?: 0 | 1 | 2 | 3,
        use_time?: 0 | 1 | 2 | 3,
    }
}

export type NetworkResponse = {
    type: "category" | "sex" | "time" | "use_time";
    score: CategoryScore | SexScore | TimeScore | UseTimeScore;
}