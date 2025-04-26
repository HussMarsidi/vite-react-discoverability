/**
 * Class for generating application URLs with proper base URL handling
 */
export class AppUrl {
    private readonly baseUrl: string;

    constructor(baseUrl = process.env.BASE_URL || '') {
        this.baseUrl = baseUrl;
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

    createUrl(path: string): string {
        const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
        return `${this.baseUrl}/${normalizedPath}`;
    }
}
