import { ExampleModel } from "../database";
import type { QueryResolvers, MutationResolvers } from "../generated/graphql";

export const ExampleServiceQueries: QueryResolvers = {
    getExamples: async () => {
        return ExampleModel.find({});
    },
};

export const ExmapleServiceMutations: MutationResolvers = {
    createExample: async (_, { input }) => {
        return await ExampleModel.create(input);
    },
};
