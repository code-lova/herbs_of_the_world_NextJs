import API from "@/config/apiClient";

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


export const getCategories = async(): Promise<CategoryProps[]> => {
    const response: GetCategoriesResponse = await API.get("/api/category/all");
    return response.categories;
}