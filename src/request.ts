import { getRequestConfig, RequestConfig } from "next-intl/server";

export const locales = ["en", "ne"] as const;
export const defaultLocale = "en" as const;

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  const validLocale = locale && locales.includes(locale as any) ? locale : "en";
  return {
    messages: (await import(`./messages/${validLocale}.json`)).default,
    locale: validLocale,
  };
});
