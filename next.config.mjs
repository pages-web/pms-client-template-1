import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "http://localhost:4000",
    NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://localhost:4000/graphql",
    NEXT_PUBLIC_PIPELINE_ID: "QnItB1903kt838KBouGjE",
    NEXT_PUBLIC_CATEGORY_ID: "eSYLfG64d-vqL6Z3KOX78",
    NEXT_PUBLIC_EXTRAS_ID: "PqJX1sm3IDyPT030t1gdK",
    NEXT_PUBLIC_ROOT_CATEGORY_ID: "AN_DK0XNW89BGaRMbIxN5",
  },
};

export default withNextIntl(nextConfig);
