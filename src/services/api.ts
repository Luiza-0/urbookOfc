import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const request = async ({
    url,
    data,
    method = 'POST',
    timeout = 10000,
    params,
    ...config
}: AxiosRequestConfig) => {

    try {
        const response = await axios({
            
            ...config,
            baseURL: 'https://www.googleapis.com/books/v1',
            url,
            timeout: timeout,
            method,
            params: {
                ...params,
                key: 'AIzaSyAQZ6qsHkkNVh8rTLkIeKXuC_vbG3SCHEs',
            },
            data: {
                ...data,
            },
        });
        return response;
    } catch (error) {
        console.log("🚀 ~ file: api.tsx:27 ~ error:", error)
        const err = error as AxiosError;
        console.log("🚀 ~ file: api.tsx:29 ~ err:", err.request, err.cause)

        console.log('REQUEST ERROR: ' + err.message);
        throw err;
    }
};



