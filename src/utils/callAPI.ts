import axios, { AxiosError } from "axios";

export const callAPI = async <ReqType, ResType>
    (
        endpoint: string, 
        method: string, 
        data?: ReqType
    ): Promise<ResType> => 
{
    const response_data = 
        await axios({
            method: method,
            url: `https://python-tinyapi-sagh.onrender.com${endpoint}`,
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

    return response_data as ResType;
}