import * as React from "react";
import { Link } from "gatsby";

const FeaturedProducts = ({ products }: any) => {
  console.log("Here are the products: ", products);
  return (
    <>
      <div className="home-page-featured-products flex flex-col items-center py-16 mx-24">
        <h1 className="text-3xl font-bold">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex flex-row w-full mt-8">
          {products?.nodes.map((product: any) => {
            return (
              <div className="col-span-1 w-full py-4 flex flex-col items-center">
                <Link to={`products/${product.handle}`}>
                  <div className="single-product flex flex-col items-center">
                    <div
                      className="product-image bg-cover h-40 w-40 rounded-lg"
                      style={{
                        backgroundImage: `url(${product.featuredMedia.preview.image.src})`,
                      }}
                    ></div>
                    <h3 className="text-lg font-semibold mt-4">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
