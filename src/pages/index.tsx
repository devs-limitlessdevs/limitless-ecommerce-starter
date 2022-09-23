import * as React from "react";
import type { HeadFC, graphql } from "gatsby";
import "../css/global.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Banner from "../components/home/Banner";
import Collections from "../components/home/Collections";
import Benefits from "../components/home/Benefits";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/footer/Footer";

const IndexPage = ({ data }: any) => {
  const { products, collection } = data;
  console.log("The data, ", products);

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts products={products} />
      <Banner />
      <Collections collection={collection} />
      <Benefits />
      <Testimonials />
      <Footer />
    </>
  );
};

export const getAllProducts = graphql`
  query {
    products: allShopifyProduct {
      nodes {
        title
        description
        handle
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredMedia {
          preview {
            image {
              src
            }
          }
        }
      }
    }
    collection: allShopifyCollection {
      edges {
        node {
          title
          image {
            src
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
