import { Mongoose, connect, set } from "mongoose";

type Config = {
    uri: string;
    devMode?: boolean;
};

export const connectDB = ({
    uri,
    devMode = true,
}: Config): Promise<Mongoose> => {
    set("debug", devMode);
    return connect(uri);
};
