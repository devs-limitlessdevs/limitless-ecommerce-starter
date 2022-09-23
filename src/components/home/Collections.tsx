import * as React from "react";

const Collections = ({ collection }: any) => {
  return (
    <>
      <div className="home-page-collections flex flex-col items-center py-16 mx-24">
        <h1 className="text-3xl font-bold">Explore by Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex flex-row w-full mt-8">
          {collection.edges.map((collection: any) => {
            return (
              <div className="col-span-1 w-full py-4 flex flex-col items-center">
                <div className="single-product flex flex-col items-center">
                  <div
                    style={{
                      backgroundImage: `url(${collection.node.image.src})`,
                    }}
                    className="product-image bg-cover bg-center h-40 w-40 rounded-lg"
                  ></div>
                  <h3 className="text-lg font-semibold mt-4">
                    {collection.node.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collections;
