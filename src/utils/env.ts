export const getBasePath = () => {
  const env = import.meta.env.PUBLIC_BASE_PATH;
  if (!env) {
    throw new Error(
      'PUBLIC_BASE_PATH is not defined in the environment variables',
    );
  }
  return env;
};

export const getCardapioPdfUrl = () => {
  const env = import.meta.env.PUBLIC_CARDAPIO_PDF_URL;
  if (!env) {
    throw new Error(
      'PUBLIC_CARDAPIO_PDF_URL is not defined in the environment variables',
    );
  }
  return env;
};

export const getZapNumber = () => {
  const env = import.meta.env.PUBLIC_ZAP_NUMBER;
  if (!env) {
    throw new Error(
      'PUBLIC_ZAP_NUMBER is not defined in the environment variables',
    );
  }
  return env;
};

export const getPhoneNumber = () => {
  const env = import.meta.env.PUBLIC_PHONE_NUMBER;
  if (!env) {
    throw new Error(
      'PUBLIC_PHONE_NUMBER is not defined in the environment variables',
    );
  }
  return env;
};

export const getPUBLIC_EMAIL = () => {
  const env = import.meta.env.PUBLIC_EMAIL;
  if (!env) {
    throw new Error('PUBLIC_EMAIL is not defined in the environment variables');
  }
  return env;
};
