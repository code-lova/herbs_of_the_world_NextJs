"use client";
import React, { useState } from "react";
import Link from "next/link";
import Clickbutton from "@/components/core/buttons/Clickbutton";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createSubCategoryProps } from "@/services/request/subcaregory/type";
import { createSubCategorySchema } from "@/services/request/subcaregory/schema";
import { createSubCategory } from "@/services/request/subcaregory";
import LoaderButton from "@/components/core/buttons/LoaderButtons";
import { CategoryProps, getCategories } from "@/services/request/category";

const initialValues: createSubCategoryProps = {
  name: "",
  slug: "",
  description: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
  categoryId: "",
  status: "active",
};

const Create = () => {
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
    mutationFn: createSubCategory,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      toast.success("Subcategory created successfully");
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error?.message || "An error occurred creating subcategory");
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (
    values: createSubCategoryProps,
    { resetForm }: FormikHelpers<createSubCategoryProps>
  ) => {
    mutate(values, {
      onSuccess: () => {
        resetForm(); // Reset the form after success
      },
    });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="flex space-x-4 justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-gray-900">Create Category</h1>
          <Link href="/admin/subcategory">
            <Clickbutton
              type="button"
              color="from-green-400 to-blue-600"
              text="Subcategories"
            />
          </Link>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={createSubCategorySchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="space-y-12">
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Subcategory Name
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="slug"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Slug
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="slug"
                        id="slug"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="slug"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="categoryId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select Category
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="categoryId"
                        name="categoryId"
                        className="form-style"
                        disabled={isFetchingCategories}
                      >
                        <option value="">Select a category</option>
                        {categories?.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="categoryId"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="status"
                        name="status"
                        className="form-style"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </Field>
                    </div>
                    <ErrorMessage
                      name="status"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="canonicalUrl"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Canonical URL
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="canonicalUrl"
                        id="canonicalUrl"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="canonicalUrl"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <Field
                        as="textarea"
                        name="description"
                        id="description"
                        rows="5"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="metaTitle"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Meta Title
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="metaTitle"
                        id="metaTitle"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="metaTitle"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="metaKeywords"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Meta Keywords
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="metaKeywords"
                        id="metaKeywords"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="metaKeywords"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="metaDescription"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Meta Description
                    </label>
                    <div className="mt-2">
                      <Field
                        as="textarea"
                        name="metaDescription"
                        id="metaDescription"
                        rows="5"
                        className="form-style"
                      />
                      <ErrorMessage
                        name="metaDescription"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <LoaderButton
                  loading={loading}
                  loadingText="Processing..."
                  type="submit"
                  text="Create Subcategory"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Create;
