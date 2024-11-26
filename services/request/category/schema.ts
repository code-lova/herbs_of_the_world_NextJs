import * as yup from "yup";

export const createCategorySchema = yup.object().shape({
    name: yup.string().required("Category name is required"),
    slug: yup.string().required("Slug is required"),
    description: yup.string().required("Category description is required"),
    metaTitle: yup.string().required("Category meta title is required"),
    metaDescription: yup.string().required("Category meta description is required"),
    metaKeywords: yup.string().required("Category meta keywords is required"),
    canonicalUrl: yup.string().required("Category conical url is required"),
});