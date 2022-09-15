import type { GatsbyConfig } from "gatsby";
require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Limitless eCommerce Starter`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.SHOPIFY_SHOP_DOMAIN,
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_PROJECT_DATASET,
        token: process.env.SANITY_STUDIO_API_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

export default config;
