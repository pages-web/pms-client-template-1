import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "http://localhost:4000",
    NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://localhost:4000/graphql",
    NEXT_PUBLIC_PIPELINE_ID: "MAZjRBrYqyc8pLwDUUqit",
    NEXT_PUBLIC_CATEGORY_ID: "NzL4ujauXwDnr2YXQ7wZR",
    NEXT_PUBLIC_EXTRAS_ID: "IAXTsv5semM6TtkL7WAoK",
    NEXT_PUBLIC_ROOT_CATEGORY_ID: "uJbP19-R7pKZDsui6fHdw",
    NEXT_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImFkbWluIiwiY3JlYXRlZEF0IjoiMjAyNC0xMC0yM1QxMjoyNDoyNy4wMDRaIiwidXNlckdyb3VwSWQiOiIiLCJleHBpcmVEYXRlIjoiMjAyNC0xMS0yMlQxMjo0OTowNS44NThaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiUk13S0RPUGk5akozdjVVNDJweVNyIiwiX192IjowfSwiaWF0IjoxNzI5Njg3NzUyfQ.bju-7tdUywPb0wEnUkw256PYQ2cbQilfTjTX_U-prnA",
  },
};

export default withNextIntl(nextConfig);
