import Category from "@/components/admin/category/Category";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Category />
    </div>
  );
};

export default Page;
