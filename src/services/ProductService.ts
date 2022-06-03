import { ProductModel } from "../database";
import type { QueryResolvers } from "../generated/graphql";

export const ProductService: QueryResolvers = {
    getAllProducts: async () => {
        return await ProductModel.find({});
    },
};
