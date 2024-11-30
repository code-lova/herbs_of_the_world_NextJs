import React from "react";
import Link from "next/link";
import Clickbutton from "@/components/core/buttons/Clickbutton";

const CreateSubCategory = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="flex space-x-4 justify-between items-center mb-10 ">
          <h1 className="text-2xl font-bold text-gray-900">
            Subcategory List
          </h1>
          <Link href="/admin/category/create">
            <Clickbutton
              type="button"
              color="from-green-400 to-blue-600"
              text="Create"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateSubCategory;
