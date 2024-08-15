/* eslint-disable @next/next/no-img-element */
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import RatingReview from "../components/RatingReview";

const Item = () => {
  const searchParam = useSearchParams();
  const id = searchParam.get("id");
  const GET_RECIPE = gql`
    query Recipe($id: ID!) {
      recipe(id: $id) {
        name
        image
        id
        ingredients
        instructions
        rating
        reviewCount
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(searchParam.get("id"));
  return (
    <Suspense>
      <section className="relative h-full">
        <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 h-full">
            <div className="img">
              <div className="img-box h-full max-lg:mx-auto ">
                <img
                  src={data.recipe.image}
                  alt="Yellow Tropical Printed Shirt image"
                  className="max-lg:mx-auto lg:ml-auto h-full"
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                {/* <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                Clothing&nbsp; /&nbsp; Menswear
              </p> */}
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                  {data.recipe.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <RatingReview rating={data.recipe.rating} />
                    </div>
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                      {data.recipe.reviewCount} review
                    </span>
                  </div>
                </div>
                <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                  Ingredients
                </p>
                <div className="w-full pb-8 border-b  flex-wrap">
                  <div className="min-[400px]:grid-cols-5 gap-3 max-w-md">
                    {data.recipe.ingredients.map(
                      (ingredient: string, index: number) => (
                        <span key={index}>{ingredient},</span>
                      )
                    )}
                  </div>
                </div>
                <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                  Instructions to prepare
                </p>
                <ul className="grid gap-y-4 mb-8">
                  {data.recipe.instructions.map(
                    (item: string, index: number) => (
                      <li className="flex items-center gap-3" key={index}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#4F46E5" />
                          <path
                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="font-normal text-base text-gray-900 ">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Item;
