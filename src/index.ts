import express from "express";
import type { Request, Response, Express } from "express";
import { config } from "dotenv";
import { connectDB } from "./database";
import { createApolloServer } from "./graphql";

config();

const { NODE_ENV, PORT, MONGO_URI } = process.env;

const dev = NODE_ENV !== "production";
const port = PORT || 5001;

const prepareServer = async (): Promise<Express> => {
    const app = express();

    app.get("/", (_, res) => {
        res.sendStatus(200);
    });

    await connectDB({ uri: MONGO_URI ?? "", devMode: dev });

    const apolloServer = await createApolloServer(dev);

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    return app;
};

prepareServer()
    .then((server) =>
        server.listen(port, () => {
            console.log(`[server] Running on port: ${port}`);
        })
    )
    .catch((err: unknown) => console.log(`Some unholy error occured: ${err}.`));
