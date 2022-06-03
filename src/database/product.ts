import { Schema, model } from "mongoose";

// Steps taken from official mongoose documentation:
// https://mongoosejs.com/docs/typescript.html

// 1. Create an interface representing a document in MongoDB
enum Category {
    GLASS = "glass",
    STEEL = "steel",
    PLASTIC = "plastic",
}

enum Currency {
    USD = "USD",
    EUR = "EUR",
}

type Image = {
    src: string;
    alt: string;
};

type Details = {
    weight?: number;
    thickness?: number;
    description?: string;
    recommendations?: Image[];
};

export type Product = {
    name: string;
    category: Category;
    price: number;
    currency: Currency;
    image: Image;
    bestseller: boolean;
    featured: boolean;
    details: Details | null;
};

// 2. Create a Schema corresponding to the document interface
const ProductSchema = new Schema<Product>({
    name: String,
    category: {
        type: String,
        enum: [Category.GLASS, Category.PLASTIC, Category.STEEL],
    },
    price: Number,
    currency: {
        type: String,
        enum: [Currency.EUR, Currency.USD],
    },
    image: {
        src: String,
        alt: String,
    },
    bestseller: Boolean,
    featured: Boolean,
    details: {
        weight: Number,
        thickness: Number,
        description: String,
        recommendations: [
            {
                alt: String,
                src: String,
            },
        ],
    },
});

// 3. Create a model
export const ProductModel = model<Product>("Product", ProductSchema);
