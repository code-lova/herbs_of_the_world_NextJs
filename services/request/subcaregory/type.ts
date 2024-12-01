import Yup from "yup";
import { createSubCategorySchema } from "./schema";

export type SubCategory = Yup.InferType<typeof createSubCategorySchema>;

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export type createSubCategoryProps = {
    name: string;
    slug: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    canonicalUrl: string;
    categoryId: string;
    status: string;
};
