const typeDefinitions = `
    type Query {
        recipes: [recipe]
        recipe(id: ID!): recipe
    }

    type recipe {
        id: ID!
        name: String!
        image: String!
        ingredients: [String!]
        instructions: [String!]
        rating: Float
        reviewCount: Int
        cuisine: String
        cookTime: Int
        mealType: [String]
        difficulty: String
        caloriesPerServing: Int
        tags: [String]
    }
`;

export default typeDefinitions;
