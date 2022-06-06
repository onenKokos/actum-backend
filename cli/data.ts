import { Currency, Category } from "../src/database/product";
import type { Product } from "../src/database/product";

export const products: Product[] = [
    {
        name: "Reinforced",
        category: Category.Glass,
        price: 33.78,
        currency: Currency.Usd,
        image: {
            src: "",
            alt: "",
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
            src: "",
            alt: "",
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
            src: "",
            alt: "",
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
            alt: "",
            src: "",
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
            src: "",
            alt: "",
        },
        bestseller: false,
        featured: true,
        details: {
            weight: 2340,
            thickness: 2,
            description: "",
            recommendations: [
                {
                    src: "",
                    alt: "",
                },
                {
                    src: "",
                    alt: "",
                },
                {
                    src: "",
                    alt: "",
                },
            ],
        },
    },
];
