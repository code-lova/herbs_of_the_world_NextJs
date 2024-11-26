import API from "@/config/apiClient";
import { Category, createCategoryProps } from "./type";

export interface CategoryProps {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    canonicalUrl?: string;
    createdAt: string;
    updatedAt: string;
};

interface GetCategoriesResponse {
    message: string;
    categories: CategoryProps[];
}

interface CreateResponse {
    message: string;
    category: Category;
}


export const getCategories = async(): Promise<CategoryProps[]> => {
    const response: GetCategoriesResponse = await API.get("/api/category/all");
    return response.categories;
};

export const createCategory = async(data: createCategoryProps): Promise<Category> => {
    const response: CreateResponse = await API.post("/api/category/create", data);
    return response.category
};

export const updateCategory = async (data: CategoryProps): Promise<Category> => {
    const { _id, ...categoryData } = data; // Extract the category ID and other fields
    const response: CreateResponse = await API.put(`/api/category/${_id}`, categoryData);
    return response.category;
};