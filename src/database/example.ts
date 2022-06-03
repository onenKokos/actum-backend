import { Schema, model } from "mongoose";

type Example = {
    name: string;
};

const ExampleSchema = new Schema<Example>({
    name: {
        type: String,
        required: [true, "Please provide a name."],
    },
});

export const ExampleModel = model<Example>("Example", ExampleSchema);
