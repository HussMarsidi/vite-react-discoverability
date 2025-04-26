import { useMemo } from 'react';
import { AppUrl } from '../modules/appUrl/AppURL';

/**
 * Hook for generating application URLs with proper base URL handling
 */
export function useAppUrl() {
    const URL = useMemo(() => {
        return new AppUrl();
    }, []);

    const createUrl = (path: string) => {
        return URL.createUrl(path);
    };

    return {
        createUrl,
        baseUrl: URL.getBaseUrl(),
    };
}
