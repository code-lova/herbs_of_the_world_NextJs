"use client";
import React, { useState } from "react";
import Image from "next/image";
import images from "@/public/images";
import Link from "next/link";
import Clickbutton from "@/components/core/buttons/Clickbutton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CategoryProps,
  deleteCategory,
  getCategories,
} from "@/services/request/category";
import { Spinner } from "@/components/core/loader/Spinner";
import EditCategoryModal from "../modal/EditCategoryModal";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Category = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(null);

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<CategoryProps[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false, // Avoid frequent refetches
  });

  const { mutate: mutateDeleteCategory } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success("Category deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] }); // Refresh the category list
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to delete category");
    },
  });

  // Close modal and clear selected category
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const handleEditClick = (category: CategoryProps) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (categoryId: string) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (userConfirmed) {
      mutateDeleteCategory(categoryId);
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="flex space-x-4 justify-between items-center mb-10 ">
          <h1 className="text-2xl font-bold text-gray-900">
            List of Categories
          </h1>
          <Link href="/admin/category/create">
            <Clickbutton
              type="button"
              color="from-green-400 to-blue-600"
              text="Add new category"
            />
          </Link>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center mt-20 gap-4">
            <Spinner size="large" />
            <p className="font-bold text-base">Loading categories...</p>
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center mt-20 ">
            <p className="text-red-500 text-center">
              Failed to load categories. Please try again later.
            </p>
          </div>
        )}
        {!isLoading && !isError && (
          <div className="flex flex-col xl:grid grid-cols-3 gap-4 mb-2">
            {categories?.map((category) => (
              <div
                key={category._id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href="#">
                  <Image
                    className="rounded-t-lg h-[350px]"
                    src={images.catgreen} // this is static for all categories
                    alt={category.name}
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {category.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {category.description || "No description available."}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Clickbutton
                      type="button"
                      color="from-purple-600 to-blue-500"
                      text="View category"
                      onClick={() => handleEditClick(category)}
                    />
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteClick(category._id)}
                    >
                      <FaTrashAlt size={30} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedCategory && (
          <EditCategoryModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            initialData={selectedCategory}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
