import { products } from "./data";
import { ProductModel, connectDB } from "../src/database";
import { config } from "dotenv";

config();

const { NODE_ENV, MONGO_URI } = process.env;
const dev = NODE_ENV !== "production";

const populate = async () => {
    await connectDB({ uri: MONGO_URI ?? "", devMode: dev });
    await ProductModel.create(products);
    process.exit();
};

const destroy = async () => {
    await connectDB({ uri: MONGO_URI ?? "", devMode: dev });
    await ProductModel.deleteMany({});
    process.exit();
};

switch (process.argv[2]) {
    case "--populate":
        populate();
        break;

    case "--destroy":
        destroy();
        break;

    default:
        console.log(`Unknown argument ${process.argv[2]}.`);
        process.exit(1);
}
