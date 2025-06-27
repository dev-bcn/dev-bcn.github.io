/// <reference types="vite-plugin-pwa/client" />
interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_MAP_API_KEY: string;
  readonly VITE_GOOGLE_ANALYTICS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
