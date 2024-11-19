import React from "react";

const CreateCategory = () => {
  return (
    <div className="p-4 sm:ml-64 bg-gray-200 h-full">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="flex space-x-4 justify-between items-center mb-10 ">
          <h1 className="text-2xl font-bold text-gray-900">
            Add New Product Category
          </h1>
        </div>

        <form>
            <div className="space-y-12">

                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">

                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" className="form-style" />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" className="form-style" />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" className="form-style" />
                        </div>
                    </div>
                </div>



            </div>

            

          </form>
      </div>
    </div>
  );
};

export default CreateCategory;
