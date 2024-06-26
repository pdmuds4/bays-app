import axios, { AxiosError } from "axios";

export const callAPI = async <ReqType, ResType>(endpoint: string, method: string, data?: ReqType) => {
    const response_data: ResType = 
        await axios({
            method: method,
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': import.meta.env.VITE_API_KEY as string
            },
            data: data
        }).then((response) => {
            return response.data;
        }).catch((error: AxiosError) => {
            throw error;
        });

    return response_data;
}