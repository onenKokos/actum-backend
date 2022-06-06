import { Schema, model } from "mongoose";

// Steps taken from official mongoose documentation:
// https://mongoosejs.com/docs/typescript.html

// 1. Create an interface representing a document in MongoDB
export enum Category {
    Glass = "GLASS",
    Plastic = "PLASTIC",
    Steel = "STEEL",
}

export enum Currency {
    Usd = "USD",
    Eur = "EUR",
}

type Image = {
    src: string;
    alt: string;
};

type Details = {
    weight: number;
    thickness: number;
    description: string;
    recommendations: Image[];
};

export type Product = {
    name: string;
    category: Category;
    price: number;
    currency: Currency;
    image: Image;
    bestseller: boolean;
    featured: boolean;
    details?: Details;
};

// 2. Create a Schema corresponding to the document interface
const ProductSchema = new Schema<Product>({
    name: String,
    category: {
        type: String,
        enum: [Category.Glass, Category.Plastic, Category.Steel],
    },
    price: Number,
    currency: {
        type: String,
        enum: [Currency.Eur, Currency.Usd],
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
