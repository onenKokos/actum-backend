import express from "express";
import type { Request, Response } from "express";
import { config } from "dotenv";
import { middleware } from "./middleware";

config();

console.log("Config loaded: ", process.env.MONGO_URI);

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
