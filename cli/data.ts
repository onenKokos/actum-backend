import { Currency, Category } from "../src/database/product";
import type { Product } from "../src/database/product";

export const products: Product[] = [
    {
        name: "Reinforced",
        category: Category.Glass,
        price: 33.78,
        currency: Currency.Usd,
        image: {
            src: "reinforced",
            alt: "Reinforced",
        },
        bestseller: true,
        featured: false,
    },
    {
        name: "Shape",
        category: Category.Steel,
        price: 93.89,
        currency: Currency.Usd,
        image: {
            src: "shape-1",
            alt: "shape-1",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Wave",
        category: Category.Steel,
        price: 120.21,
        currency: Currency.Usd,
        image: {
            src: "wave",
            alt: "wave",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Shape",
        category: Category.Steel,
        price: 101,
        currency: Currency.Usd,
        image: {
            alt: "shape-2",
            src: "shape-2",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Recycled Plastic",
        category: Category.Plastic,
        price: 101,
        currency: Currency.Usd,
        image: {
            src: "recycled-plastic",
            alt: "Recycled Plastic",
        },
        bestseller: false,
        featured: true,
        details: {
            weight: 2340,
            thickness: 2,
            description: "A random description",
            recommendations: [
                {
                    src: "recommendation-1",
                    alt: "recommendation-1",
                },
                {
                    src: "recommendation-2",
                    alt: "recommendation-2",
                },
                {
                    src: "recommendation-3",
                    alt: "recommendation-3",
                },
            ],
        },
    },
];
