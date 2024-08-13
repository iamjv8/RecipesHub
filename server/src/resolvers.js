import { recipes } from "./recipes";
const resolvers = {
  Query: {
    recipe: (_, { id }) => {
      return recipes.find((recipe) => recipe.id === id);
    },
    recipes: () => {
      return recipes;
    },
  },
};

export default resolvers;
