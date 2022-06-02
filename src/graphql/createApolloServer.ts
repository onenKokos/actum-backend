import { ApolloServer, gql } from "apollo-server-express";
import type { Config } from "apollo-server-express";
import { importSchema } from "graphql-import";
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

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
        typeDefs: gql`
            ${importSchema("schema/root.graphql")}
        `,
        plugins: [
            dev
                ? ApolloServerPluginLandingPageGraphQLPlayground()
                : ApolloServerPluginLandingPageDisabled(),
        ],
        resolvers: Resolvers,
        // context: () => {} wont need probably
    });
};
