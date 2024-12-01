"use client";

import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createSubCategorySchema } from "@/services/request/subcaregory/schema";
import {
  SubCategoryProps,
  updateSubCategory,
} from "@/services/request/subcaregory";
import LoaderButton from "@/components/core/buttons/LoaderButtons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CategoryProps, getCategories } from "@/services/request/category";

interface EditSubCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: SubCategoryProps; // Initial data for the form
}

const EditSubCategoryModal: React.FC<EditSubCategoryModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch categories for the dropdown
  const { data: categories, isLoading: isFetchingCategories } = useQuery<
    CategoryProps[]
  >({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false, // Avoid frequent refetches
  });

  const { mutate } = useMutation({
    mutationFn: updateSubCategory,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      toast.success("Subcategory updated successfully");
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      setLoading(false);
      onClose();
    },
    onError: (error) => {
      toast.error(
        error?.message || "An error occurred updating the subcategory"
      );
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (values: SubCategoryProps) => {
    mutate(values);
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit SubCategory
                </Dialog.Title>

                <Formik
                  initialValues={{
                    ...initialData,
                    categoryId:
                      typeof initialData.categoryId === "string"
                        ? initialData.categoryId
                        : initialData.categoryId._id, // Ensure categoryId is just the _id if it's an object
                  }}
                  validationSchema={createSubCategorySchema}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="space-y-6 mt-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Sub Category Name
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-style"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="slug"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Slug
                          </label>
                          <Field
                            type="text"
                            id="slug"
                            name="slug"
                            className="form-style"
                          />
                          <ErrorMessage
                            name="slug"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="categoryId"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Category
                          </label>
                          <Field
                            as="select"
                            id="categoryId"
                            name="categoryId"
                            className="form-style"
                            disabled={isFetchingCategories}
                          >
                            {/* Show the selected category first */}
                            <option
                              value={
                                typeof initialData.categoryId === "string"
                                  ? initialData.categoryId
                                  : initialData.categoryId._id
                              }
                            >
                              {typeof initialData.categoryId === "string"
                                ? "Select a category"
                                : initialData.categoryId.name}
                            </option>

                            {/* Show the remaining categories */}
                            {categories
                              ?.filter(
                                (category) =>
                                  category._id !==
                                  (typeof initialData.categoryId === "string"
                                    ? initialData.categoryId
                                    : initialData.categoryId._id)
                              ) // Exclude the current category
                              .map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.name}
                                </option>
                              ))}
                          </Field>
                          <ErrorMessage
                            name="categoryId"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="status"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Status
                          </label>
                          <Field
                            as="select"
                            id="status"
                            name="status"
                            className="form-style"
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </Field>
                          <ErrorMessage
                            name="status"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <Field
                            as="textarea"
                            id="description"
                            name="description"
                            rows="4"
                            className="form-style"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="metaTitle"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Meta Title
                          </label>
                          <Field
                            type="text"
                            id="metaTitle"
                            name="metaTitle"
                            className="form-style"
                          />
                          <ErrorMessage
                            name="metaTitle"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="metaKeywords"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Meta Keywords
                          </label>
                          <Field
                            type="text"
                            id="metaKeywords"
                            name="metaKeywords"
                            className="form-style"
                          />
                          <ErrorMessage
                            name="metaKeywords"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="metaDescription"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Meta Description
                          </label>
                          <Field
                            as="textarea"
                            id="metaDescription"
                            name="metaDescription"
                            rows="4"
                            className="form-style"
                          />
                          <ErrorMessage
                            name="metaDescription"
                            component="div"
                            className="text-sm text-red-500"
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex justify-end gap-4">
                        <button
                          type="button"
                          className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                          onClick={onClose}
                        >
                          Cancel
                        </button>
                        <LoaderButton
                          loading={loading}
                          loadingText="Saving..."
                          type="submit"
                          text="Save Changes"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditSubCategoryModal;
