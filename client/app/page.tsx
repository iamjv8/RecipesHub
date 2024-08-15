"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Recipes from "./Recipes";
export default function Home() {
  const client = new ApolloClient({
    uri: "https://recipeshub-3fa3.onrender.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Recipes />
    </ApolloProvider>
  );
}
