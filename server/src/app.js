import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

// Import Apollo Server
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import resolvers from "./resolvers.js";
import typeDefinitions from "./typeDefinitions.js";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers: resolvers,
});
const start = async () => {
  // Note you must call `start()` on the `ApolloServer`
  // instance before passing the instance to `expressMiddleware`
  await server.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));
};
start();

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
