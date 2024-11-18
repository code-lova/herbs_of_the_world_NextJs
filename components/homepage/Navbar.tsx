"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import images from "@/public/images";
import { useUserContext } from "@/context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logoutRequest } from "@/services/request/auth/logoutRequest";
import { queryClient } from "@/providers/tanstackQuery";
import { AUTH } from "@/hooks/useUser";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const navigate = useRouter();

  const [toggle, setToggle] = useState<boolean>(false);
  // const [active, setActive] = useState('');
  const [showSubMenu, setShowSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setShowSubMenu(id);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

  const handleSubMenuToggle = (id: string) => {
    setShowSubMenu(showSubMenu === id ? null : id);
  };

  const { mutate: signOut } = useMutation({
    mutationFn: logoutRequest,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [AUTH]});
      setUser(null);
      navigate.replace("/signin");
    },
    onError: (error) => {
      console.error("Logout failed. Please try again.", error);
    },
  });

  return (
    <nav className="bg-gray-200 fixed shadow-md z-50 top-0 left-0 w-full text-black padding">
      <div className="flex items-center justify-between lg:px-12">
        <div className="cursor-pointer">
          <Image
            src={images.logodark}
            width={120}
            height={60}
            alt="herb of the world logo"
            className="object-contain w-[98px] h-[80] md:w-24 "
          />
        </div>

        {/* nav display as flex for small screens if there is user */}
        <div className="flex flex-row item-center mt-2 cursor-pointer lg:hidden">
          {user && (
            <div className="flex flex-row space-x-4 mt-2">
              <Link href="/user">
                <Image
                  src="/icons/account.svg"
                  width={25}
                  height={30}
                  alt="account"
                />
              </Link>
              <Link href="/cart/4">
                <div className="flex mr-6">
                  <p className="bg-white h-4 text-black rounded-full px-1 text-[10px]">
                    2
                  </p>
                  <Image
                    src="/icons/cart.svg"
                    width={25}
                    height={30}
                    alt="cart"
                  />
                </div>
              </Link>
            </div>
          )}
          <Image
            src={toggle ? "/icons/close.svg" : "/icons/menu.svg"}
            width={40}
            height={30}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Nav links for larger screens */}
        <ul className="hidden lg:flex items-center justify-center space-x-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-black hover:underline py-2 hover:lg:text-custom-green font-bold lg:transitioning lg:py-4 text-[16px] relative"
              onMouseEnter={() => handleMouseEnter(nav.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={nav.link || "#"}>{nav.title}</Link>

              {/* Render submenu if available */}
              {nav.subMenu && showSubMenu === nav.id && (
                <ul className="absolute left-0 top-full font-light w-[180px] mt-0 bg-white text-black py-2 shadow-lg rounded">
                  {nav.subMenu.map((subNav) => (
                    <li
                      key={subNav.title}
                      className="px-4 py-2 hover:bg-gray-200"
                    >
                      <Link href={subNav.link}>{subNav.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {user ? (
            <div className="flex item-center justify-center space-x-4">
              <Link href="/user">
                <Image
                  src="/icons/account.svg"
                  width={25}
                  height={30}
                  alt="account"
                />
              </Link>
              <Link href="/cart/4">
                <div className="flex mr-6">
                  <p className="bg-white h-4 text-black rounded-full px-1 text-[10px]">
                    2
                  </p>
                  <Image
                    src="/icons/cart.svg"
                    width={25}
                    height={30}
                    alt="cart"
                  />
                </div>
              </Link>
              <button
                onClick={() => signOut()}
                className="text-custom-green hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <li className="text-black hover:underline py-2 hover:lg:text-custom-green font-bold lg:transitioning lg:py-4 text-[16px] relative">
                <Link href="/signin">Login</Link>
              </li>
              <li className="text-black hover:underline py-2 hover:lg:text-custom-green font-bold lg:transitioning lg:py-4 text-[16px] relative">
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Display as drop down on mobile view */}
      <ul
        className={`${
          toggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300 bg-mobile-nav overflow-y-auto`}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-black hover:font-bold py-2 font-light text-[16px] flex items-center justify-between"
          >
            <Link
              onClick={() => handleSubMenuToggle(nav.id)}
              href={nav.link || "#"}
            >
              {nav.title}
            </Link>
            {nav.subMenu && (
              <Image
                src="/icons/arrow-down.svg"
                width={15}
                height={15}
                alt="toggle submenu"
                className="cursor-pointer"
              />
            )}
            {nav.subMenu && (
              <ul
                className={`transition-all duration-300 overflow-y-auto max-h-0 ${
                  showSubMenu === nav.id ? "max-h-40" : "max-h-0"
                } w-full mt-0 bg-white text-black shadow-lg rounded`}
              >
                {nav.subMenu.map((subNav) => (
                  <li
                    key={subNav.title}
                    className="px-4 py-2 hover:bg-gray-200"
                  >
                    <Link href={subNav.link}>{subNav.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {user ? (
          <button  onClick={() => signOut()} className="text-custom-green hover:underline">Logout</button>
        ) : (
          <>
            <li className="text-black hover:font-bold py-2 hover:lg:text-custom-green lg:transitioning lg:py-4 text-[16px] ">
              <Link href="/signin">Login</Link>
            </li>
            <li className="text-black hover:font-bold py-2 hover:lg:text-custom-green lg:transitioning lg:py-4 text-[16px]">
              <Link href="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
