"use client";
import { Inter } from "next/font/google";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}