import Yup from 'yup';
import { createCategorySchema } from "./schema";

export type Category = Yup.InferType<typeof createCategorySchema>;

export type createCategoryProps = {
    name: string;
    slug: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    canonicalUrl: string;
};