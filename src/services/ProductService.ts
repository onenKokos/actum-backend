import { ProductModel, Product } from "../database";
import { QueryResolvers, MutationResolvers } from "../generated/graphql";

export const ProductServiceQueries: QueryResolvers = {
    getAllProducts: async (): Promise<Product[]> => {
        return await ProductModel.find();
    },
};

export const ProductServiceMutations: MutationResolvers = {
    deleteAllProducts: async (): Promise<boolean> => {
        await ProductModel.deleteMany({});

        return true;
    },

    createProduct: async (_, { input }): Promise<Product> => {
        if (process.env.NODE_ENV === "production") {
            throw new Error("Please don't.");
        }

        return await ProductModel.create(input);
    },
};
