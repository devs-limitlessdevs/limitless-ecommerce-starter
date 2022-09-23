import * as React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  return (
    <>
      <div className="home-page-collections flex flex-col items-center py-16 mx-24">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <div className="grid grid-cols-1 flex flex-row w-full mt-8">
          <div className="col-span-1 w-full py-4 flex flex-col items-center">
            <div className="single-testimonial flex flex-col items-center lg:mx-24">
              <p className="text-md font-light">
                "Spicy jalapeno meatloaf alcatra kevin proident tri-tip
                exercitation rump, ribeye non velit. Corned beef sed nulla, pork
                do nostrud ex turducken in elit. Quis eu beef, deserunt magna
                commodo excepteur voluptate spare ribs tongue irure. Id et
                turkey, ham in cupidatat rump ground round minim burgdoggen
                veniam. Laboris culpa irure fugiat nisi corned beef porchetta
                deserunt aute. Et sirloin ball tip ipsum dolore. Exercitation
                enim bresaola ham hock leberkas consectetur lorem mollit eu non
                pork belly fatback aliquip ipsum sirloin."
              </p>
              <div className="stars flex flex-row mt-4">
                <StarIcon className="h-8 w-8 text-yellow-400 m-1" />
                <StarIcon className="h-8 w-8 text-yellow-400 m-1" />
                <StarIcon className="h-8 w-8 text-yellow-400 m-1" />
                <StarIcon className="h-8 w-8 text-yellow-400 m-1" />
                <StarIcon className="h-8 w-8 text-yellow-400 m-1" />
              </div>
              <h4 className="text-xl font-bold mt-2">Joe Bloggs</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
