"use client";

import React, { useState } from "react";
import Link from "next/link";
import Clickbutton from "@/components/core/buttons/Clickbutton";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import {
  getSubCategories,
  PaginatedSubCategoriesResponse,
  SubCategoryProps,
  deleteSubCategory,
} from "@/services/request/subcaregory";
import { Spinner } from "@/components/core/loader/Spinner";
import EditSubCategoryModal from "../modal/EditSubCatModal";
import toast from "react-hot-toast";

const SubCategory = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategoryProps | null>(null);

  const {
    data: subCategoriesResponse,
    isLoading,
    isError,
  } = useQuery<PaginatedSubCategoriesResponse>({
    queryKey: ["subcategories", currentPage, searchTerm],
    queryFn: () => getSubCategories(currentPage + 1, searchTerm),
    refetchOnWindowFocus: false,
  });

  const { mutate: mutateDeleteCategory } = useMutation({
    mutationFn: deleteSubCategory,
    onSuccess: () => {
      toast.success("Subcategory deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["subcategories"] }); // Refresh the category list
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to delete Subcategory");
    },
  });

  const columnHelper = createColumnHelper<SubCategoryProps>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("categoryId.name", {
      header: "Category",
      cell: (info) => info.getValue() || "N/A",
    }),
    columnHelper.accessor("slug", {
      header: "Slug",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        const capsuleStyle =
          status === "active"
            ? "border-green-500 text-green-500"
            : "border-red-500 text-red-500";
        return (
          <span
            className={`px-3 py-1 border rounded-full text-xs font-bold ${capsuleStyle}`}
          >
            {status}
          </span>
        );
      },
    }),
    columnHelper.accessor("createdAt", {
      header: "Created At",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor("_id", {
      header: "Actions",
      cell: (info) => (
        <div className="flex space-x-6 justify-center">
          <button
            className="text-blue-600"
            onClick={() => handleEditClick(info.row.original)}
          >
            Edit
          </button>
          <button
            className="text-red-600"
            onClick={() => handleDelete(info.getValue())}
          >
            Delete
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: subCategoriesResponse?.subCategories || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Close modal and clear selected category
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSubCategory(null);
  };

  const handleEditClick = (subcategory: SubCategoryProps) => {
    setSelectedSubCategory(subcategory);
    setIsModalOpen(true);
  };

  const handleDelete = (SubcategoryID: string) => {
    console.log(`deleting this id: ${SubcategoryID}`)
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this Subcategory?"
      
    );
    if (userConfirmed) {
      mutateDeleteCategory(SubcategoryID);
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="flex space-x-4 justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-gray-900">Subcategory List</h1>
          <Link href="/admin/subcategory/create">
            <Clickbutton
              type="button"
              color="from-green-400 to-blue-600"
              text="Create"
            />
          </Link>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by subcategory name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded w-[300px]"
          />
        </div>

        {isLoading && (
          <div className="flex justify-center items-center mt-20 gap-4">
            <Spinner size="large" />
            <p className="font-bold text-base">Loading Sub Categories...</p>
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center mt-20">
            <p className="text-red-500 text-center">
              Failed to load sub categories. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !isError && subCategoriesResponse && (
          <>
            {subCategoriesResponse.subCategories.length === 0 ? (
              <div className="text-center text-red-500 font-bold">
                No subcategories found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse border border-gray-300">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="border border-gray-300 p-4"
                          >
                            {header.isPlaceholder
                              ? null
                              : header.column.columnDef.header instanceof
                                Function
                              ? header.column.columnDef.header(
                                  header.getContext()
                                )
                              : header.column.columnDef.header}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="border border-gray-300 p-4 text-center"
                          >
                            {cell.column.columnDef.cell instanceof Function
                              ? cell.column.columnDef.cell(cell.getContext())
                              : cell.renderValue()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-8">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={subCategoriesResponse.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                containerClassName={"pagination flex justify-center space-x-2"}
                pageClassName={"page-item"}
                pageLinkClassName={
                  "page-link p-2 border border-gray-300 rounded"
                }
                activeClassName={"active bg-blue-500 text-white"}
              />
            </div>
          </>
        )}

        {isModalOpen && selectedSubCategory && (
          <EditSubCategoryModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            initialData={selectedSubCategory}
          />
        )}
      </div>
    </div>
  );
};

export default SubCategory;
