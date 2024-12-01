import * as yup from "yup";

export const createSubCategorySchema = yup.object().shape({
    name: yup.string().required("SubCategory name is required"),
    slug: yup.string().required("Slug is required"),
    description: yup.string().required("SubCategory description is required"),
    metaTitle: yup.string().optional(),
    metaDescription: yup.string().optional(),
    metaKeywords: yup.string().optional(),
    canonicalUrl: yup.string().required("SubCategory conical url is required"),
    categoryId: yup.string().required("CategoryID is required"),
    status: yup.string().required("Status is required"),
});