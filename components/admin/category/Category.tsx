"use client";
import React from "react";
import Image from "next/image";
import images from "@/public/images";
import Link from "next/link";
import Clickbutton from "@/components/core/buttons/Clickbutton";
import { useQuery } from "@tanstack/react-query";
import { CategoryProps, getCategories } from "@/services/request/category";


const Category = () => {
  
  const {data: categories, isLoading, isError} = useQuery<CategoryProps[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false, // Avoid frequent refetches
  });

  console.log("Categories from useQuery:", categories);

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (isError) {
    return <div>Failed to load categories. Please try again later.</div>;
  }


  return (
    <div className="p-4 sm:ml-64 bg-gray-200 h-full">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="flex space-x-4 justify-between items-center mb-10 ">
          <h1 className="text-2xl font-bold text-gray-900">List of Categories</h1>
          <Link href="/admin/category/create">
            <Clickbutton 
              type="button" 
              color="from-green-400 to-blue-600" 
              text="Add new category"
            />
          </Link>
        </div>
        <div className="flex flex-col xl:grid grid-cols-3 gap-4 mb-2">
          {categories?.map((category) => (
            <div key={category._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="#">
                <Image 
                  className="rounded-t-lg h-[350px]" 
                  src={images.catgreen} //this is static for all categories
                  alt={category.name} 
                />
              </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name} </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category.description || "No description available."}</p>
                  <Clickbutton type="button" color="from-purple-600 to-blue-500" text="Edit category"/>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
