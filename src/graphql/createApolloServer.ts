import { ApolloServer } from "apollo-server-express";
import type { Config } from "apollo-server-express";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

const schema = loadSchemaSync(join(__dirname, "../../schema/root.graphql"), {
    loaders: [new GraphQLFileLoader()],
});

const Resolvers = {
    Query: {
        hello: () => "Hello",
    },
};

export const createApolloServer = async (
    dev: boolean,
    config?: Pick<Config, "resolvers" | "typeDefs">
): Promise<ApolloServer> => {
    return new ApolloServer({
        ...config,
        introspection: dev,
        typeDefs: schema,
        plugins: [
            dev
                ? ApolloServerPluginLandingPageGraphQLPlayground()
                : ApolloServerPluginLandingPageDisabled(),
        ],
        resolvers: Resolvers,
        // context: () => {} wont need probably
    });
};
