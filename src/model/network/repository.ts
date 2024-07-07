export default class NetworkRepository {
    static getCategoryNames() {
        return {
            name: "category",
            label: "アプリのカテゴリー",
            evidence: {
                entertainment: "エンターテイメント",
                sns: "SNS",
                game: "ゲーム",
                utility: "ユーティリティ",
                creativity: "クリエイティビティ",
                work: "仕事",
                shopping: "ショッピング",
                travel: "旅行",
                reading: "読書",
                study: "勉強"
            }
        }
    }

    static getSexNames() {
        return {
            name: "sex",
            label: "性別",
            evidence: {
                male: "男性",
                female: "女性"
            }
        }
    }

    static getTimeNames() {
        return {
            name: "time",
            label: "使用時刻",
            evidence: {
                morning: "3:00~9:00",
                afternoon: "9:00~15:00",
                evening: "15:00~21:00",
                night: "21:00~3:00"
            }
        }
    }

    static getUseTimeNames() {
        return {
            name: "use_time",
            label: "使用時間",
            evidence: {
                short: "0~2時間",
                middle: "2~4時間",
                long: "4~6時間",
                very_long: "6時間以上"
            }
        }
    }

    static getAllNames() {
        return [
            this.getCategoryNames(),
            this.getSexNames(),
            this.getTimeNames(),
            this.getUseTimeNames()
        ]
    }
}