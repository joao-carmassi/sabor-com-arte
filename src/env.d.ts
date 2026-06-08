interface ImportMetaEnv {
  readonly PUBLIC_BASE_PATH: string;
  readonly PUBLIC_CARDAPIO_PDF_URL: string;
  readonly PUBLIC_ZAP_NUMBER: string;
  readonly PUBLIC_PHONE_NUMBER: string;
  readonly PUBLIC_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
