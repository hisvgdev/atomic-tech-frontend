/**
 * Base API client for making HTTP requests
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiError } from './types';

export interface ApiClientConfig {
    baseURL: string;
    apiPrefix?: string;
    timeout?: number;
    headers?: Record<string, string>;
}

export class ApiClient {
    private client: AxiosInstance;
    private baseURL: string;
    private apiPrefix: string;

    constructor(config: ApiClientConfig) {
        this.baseURL = config.baseURL;
        this.apiPrefix = config.apiPrefix || '/api/v1';

        this.client = axios.create({
            baseURL: `${this.baseURL}${this.apiPrefix}`,
            timeout: config.timeout || 30000,
            headers: {
                'Content-Type': 'application/json',
                ...config.headers,
            },
        });

        // Request interceptor
        this.client.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response interceptor
        this.client.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response) {
                    const apiError: ApiError = {
                        detail: error.response.data?.detail || error.message,
                    };
                    throw apiError;
                }
                throw error;
            }
        );
    }

    /**
     * Make a GET request
     */
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.get(url, config);
        return response.data;
    }

    /**
     * Make a POST request
     */
    async post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.post(url, data, config);
        return response.data;
    }

    /**
     * Make a PATCH request
     */
    async patch<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.patch(url, data, config);
        return response.data;
    }

    /**
     * Make a PUT request
     */
    async put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.put(url, data, config);
        return response.data;
    }

    /**
     * Make a DELETE request
     */
    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.delete(url, config);
        return response.data;
    }

    /**
     * Set authorization token
     */
    setAuthToken(token: string): void {
        this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    /**
     * Remove authorization token
     */
    removeAuthToken(): void {
        delete this.client.defaults.headers.common['Authorization'];
    }

    /**
     * Get base URL
     */
    getBaseURL(): string {
        return this.baseURL;
    }
}
