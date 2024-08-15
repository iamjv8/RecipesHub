"use client";
import { gql, useQuery } from "@apollo/client";
import List from "./List";
const Recipes = () => {
  const GET_RECIPES = gql`
    query AllRecipes {
      recipes {
        id
        name
        image
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RECIPES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="bg-slate-100">
      <List data={data} />
    </div>
  );
};

export default Recipes;
