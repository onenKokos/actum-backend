import { ApolloServer } from "apollo-server-express";
import type { Config } from "apollo-server-express";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    // ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

// import { ProductServiceQueries } from "../services";
import { ExampleServiceQueries, ExmapleServiceMutations } from "../services";
const schema = loadSchemaSync(join(__dirname, "../../schema/root.graphql"), {
    loaders: [new GraphQLFileLoader()],
});

const Resolvers = {
    Query: {
        // getAllProducts: ProductServiceQueries.getAllProducts,
        getExamples: ExampleServiceQueries.getExamples,
    },
    Mutation: {
        createExample: ExmapleServiceMutations.createExample,
    },
};

const Schema = makeExecutableSchema({
    typeDefs: schema,
});

export const createApolloServer = async (
    dev: boolean,
    config?: Pick<Config, "resolvers" | "typeDefs">
): Promise<ApolloServer> => {
    return new ApolloServer({
        ...config,
        introspection: dev,
        typeDefs: Schema,
        // I want to have playground enable in production aswell for now
        // plugins: [
        //     dev
        //         ? ApolloServerPluginLandingPageGraphQLPlayground()
        //         : ApolloServerPluginLandingPageDisabled(),
        // ],
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        resolvers: Resolvers,
        // context: () => {} wont need probably
    });
};
