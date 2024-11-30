"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "@/services/request/auth/logoutRequest";
import { useRouter } from "next/navigation";
import { queryClient } from "@/providers/tanstackQuery";
import { useUserContext } from "@/context/UserContext";
import UserCreationDate from "../core/date/UserCreationDate";
import * as faIcons from "react-icons/fa";

const Sidebar = () => {
  const { user, setUser } = useUserContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const navigate = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const { mutate: signOut } = useMutation({
    mutationFn: logoutRequest,
    onSettled: () => {
      queryClient.clear();
      navigate.replace("/signin");
      setUser(null);
    },
  });

  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="admin-sidebar-toggleopen"
      >
        <span className="sr-only">Open sidebar</span>
        <faIcons.FaAlignLeft className="w-6 h-6 text-gray-500" />
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="relative h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            onClick={toggleSidebar}
            className="admin-sidebar-toggleclose"
          >
            <faIcons.FaWindowClose className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex items-center gap-4 mb-10">
            <Image
              src="../../icons/account.svg"
              width={45}
              height={50}
              alt="account"
            />
            {user && (
              <div className="font-medium dark:text-white">
                <div>
                  <p>{`${user.firstname}, ${user.lastname}`}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined <UserCreationDate createdAt={user.createdAt} />
                </div>
              </div>
            )}
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/admin" className="admin-sidebar">
                <faIcons.FaChartPie className="w-5 h-5 text-gray-500" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/product" className="admin-sidebar">
                <faIcons.FaStore className="w-5 h-5 text-gray-500" />
                <span className="ms-3">Store</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/category" className="admin-sidebar">
                <faIcons.FaBoxOpen className="w-5 h-5 text-gray-500" />
                <span className="ms-3">Category</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/subcategory" className="admin-sidebar">
                <faIcons.FaCubes className="w-5 h-5 text-gray-500" />
                <span className="ms-3">SubCategory</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="admin-sidebar">
                <faIcons.FaUser className="w-5 h-5 text-gray-500" />
                <span className="ms-3">Users</span>
              </Link>
            </li>
            <li>
              <Link href="/product" className="admin-sidebar">
                <faIcons.FaBuffer className="w-5 h-5 text-gray-500" />
                <span className="ms-3">Products</span>
              </Link>
            </li>
            <li className="admin-sidebar">
              <faIcons.FaSignOutAlt className="w-5 h-5 text-gray-500" />
              <span>
                <button onClick={() => signOut()} className="ms-3">
                  Sign Out
                </button>
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
