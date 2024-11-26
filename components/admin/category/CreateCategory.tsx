"use client";
import React, { useState } from "react";
import Link from "next/link";
import Clickbutton from "@/components/core/buttons/Clickbutton";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { createCategoryProps } from "@/services/request/category/type";
import { createCategorySchema } from "@/services/request/category/schema";
import { createCategory } from "@/services/request/category";
import LoaderButton from "@/components/core/buttons/LoaderButtons";

const initialValues: createCategoryProps = {
  name: "",
  slug: "",
  description: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
};

const CreateCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationFn: createCategory,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      toast.success("Category created successfully");
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error?.message || "An error occurred creating category");
      setLoading(false);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (
    values: createCategoryProps,
    { resetForm }: FormikHelpers<createCategoryProps>
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
          <h1 className="text-2xl font-bold text-gray-900">
            Create Category
          </h1>
          <Link href="/admin/category">
            <Clickbutton 
              type="button" 
              color="from-green-400 to-blue-600" 
              text="Categories"
            />
          </Link>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={createCategorySchema}
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
                      Category Name
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
                        rows="3"
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
                        rows="3"
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

              <div className="mt-6">
                <LoaderButton 
                  loading={loading}
                  loadingText="Processing..."
                  type="submit"
                  text="Create Category"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCategory;
