/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEB_URL_DEV: string;
    readonly VITE_WEB_URL_PROD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
