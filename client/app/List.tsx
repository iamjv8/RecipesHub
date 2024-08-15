"use client";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
const List = ({ data }: any) => {
  const [recipes, setRecipes] = useState(data.recipes);

  const inputHandler = (event: any) => {
    const filteredData = data.recipes.filter((item: any) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecipes(filteredData);
  };

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Recipes Hub</h1>
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-100 focus:border-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-100"
              placeholder="Search Mockups, Logos..."
              required
              onChange={inputHandler}
            />
          </div>
        </form>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {recipes.map(({ id, name, image, rating }: any) => (
          <Link href={{ pathname: "/recipe", query: { id: id } }} key={id}>
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src={image}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Name
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {rating}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {/* $199 */}
                    </p>
                  </del>
                  <div className="ml-auto"></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default List;
