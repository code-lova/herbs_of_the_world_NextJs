import API from "@/config/apiClient";

import { Status, SubCategory, createSubCategoryProps } from "./type";

export interface SubCategoryProps {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  categoryId: {
    _id: string;
    name: string;
  } | string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}



export interface PaginatedSubCategoriesResponse {
  subCategories: SubCategoryProps[];
  total: number;
  currentPage: number;
  totalPages: number;
}

interface GetSubCategoryResponse {
  message: string;
  subCategories: {
    subCategories: SubCategoryProps[];
    total: number; // Total number of subcategories
    currentPage: number; // Current page number
    totalPages: number; // Total pages available
  };
}

interface CreateResponse {
  message: string;
  subCategory: SubCategory;
}

interface DeleteResponse {
  message: string;
}

export const getSubCategories = async (
  page: number,
  searchTerm: string
): Promise<PaginatedSubCategoriesResponse> => {
  const response: GetSubCategoryResponse = await API.get(
    "/api/subcategory/all",
    {
      params: {
        page, // Current page number
        limit: 10, // (optional; adjust as needed)
        searchTerm,
      },
    }
  );
  return response.subCategories;
};

export const createSubCategory = async (
  data: createSubCategoryProps
): Promise<SubCategory> => {
  const response: CreateResponse = await API.post(
    "/api/subcategory/create",
    data
  );
  return response.subCategory;
};

export const updateSubCategory = async (
  data: SubCategoryProps
): Promise<SubCategory> => {
  const { _id, ...subCategoryData } = data;
  const response: CreateResponse = await API.put(
    `/api/subcategory/${_id}`,
    subCategoryData
  );
  return response.subCategory;
};

export const deleteSubCategory = async (subCategoryId: string) => {
  const response: DeleteResponse = await API.delete(
    `/api/subcategory/${subCategoryId}`
  );
  return response;
};
