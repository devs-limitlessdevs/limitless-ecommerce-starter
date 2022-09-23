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
        downloadImages: true,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Catamaran`,
            file: `https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500;600;700&display=swap`,
          },
          {
            name: `Josefin Sans`,
            file: `https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
      },
    },
  ],
};

export default config;
