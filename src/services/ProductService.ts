import { ProductModel, Product, Category, Currency } from "../database";
import { QueryResolvers, MutationResolvers } from "../generated/graphql";

export const ProductServiceQueries: QueryResolvers = {};

export const ProductServiceMutations: MutationResolvers = {
    deleteAllProducts: async (): Promise<boolean> => {
        await ProductModel.deleteMany({});

        return true;
    },

    createProduct: async () => {
        const x: Product = {
            name: "cunt",
            category: Category.Glass,
            price: 666,
            image: {
                src: "",
                alt: "",
            },
            currency: Currency.Eur,
            details: undefined,
            featured: false,
            bestseller: false,
        };

        return x;
    },
};
