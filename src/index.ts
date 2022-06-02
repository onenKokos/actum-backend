import express from "express";
import type { Request, Response } from "express";
import { config } from "dotenv";
import { middleware } from "./middleware";
import { connectDB } from "./database/connectDB";

config();

console.log("Config loaded: ", process.env.MONGO_URI);
const dev = process.env.NODE_ENV !== "production";

connectDB({ uri: process.env.MONGO_URI ?? "", devMode: dev });

const PORT = process.env.PORT || 5001;

const app = express();

const unusedConst = "";

app.use(middleware);

app.get("/", (_: Request, res: Response) => {
    console.log("Hello world!");
    res.json({
        status: "ok",
    }).status(200);
});

app.listen(PORT, () => {
    console.log(`[server]: Started on port ${PORT}`);
});
