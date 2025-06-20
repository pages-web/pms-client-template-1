import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://tourism.api.erxes.io/gateway",
    NEXT_PUBLIC_CP_ID: "P4Fi2ltY9rq3U5XGljLBV",
    NEXT_PUBLIC_PMS_TOKEN: "cplOSUugJWEsxHRjbD8N1jzuVdsPmwN8",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkhvdGVsIHRva2VuIiwiY3JlYXRlZEF0IjoiMjAyNS0wMS0yN1QwNzowMTo0MC44NzdaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTAyLTI2VDEwOjM2OjQ0LjQ3M1oiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJ5NjZTTlRKZW9jd1VhYVFqWU5FVHciLCJfX3YiOjB9LCJpYXQiOjE3Mzc5NzQyMTV9.lLwFmzMudhQK9hu3WatkS4LlXYgMJEq4Zf4CbWzkmno",
  },
};

export default withNextIntl(nextConfig);
