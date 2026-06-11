import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => ({
  locale: "uk",
  messages: (await import("../messages/uk.json")).default,
}));