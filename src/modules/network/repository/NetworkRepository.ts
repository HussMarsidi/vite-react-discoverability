import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { NetworkConstants } from '../constants/NetworkConstants';

export class NetworkRepositoryAxiosImpl {
    readonly #baseURL: string;
    #instance: AxiosInstance;

    constructor(baseURL: string) {
        this.#baseURL = baseURL;
        this.#instance = axios.create({
            baseURL,
            timeout: NetworkConstants.TIMEOUT, // in milliseconds
        });
    }

    public async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.#instance.get<T>(url, config).then((response) => response.data);
    }

    public async post<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        return this.#instance.post<T>(url, data, config).then((response) => response.data);
    }

    public async put<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        return this.#instance.put<T>(url, data, config).then((response) => response.data);
    }

    public async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.#instance.delete<T>(url, config).then((response) => response.data);
    }

    public async patch<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        return this.#instance.patch<T>(url, data, config).then((response) => response.data);
    }

    public requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig = (config) => config;
    public responseInterceptor: (response: unknown) => unknown = (response) => response;

    public getBaseURL(): string {
        return this.#baseURL;
    }
}
