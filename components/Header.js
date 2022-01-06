import Head from "next/head";
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const showHide = () => {
    if (isOpenMenu == false) {
      setisOpenMenu(true);
    } else {
      setisOpenMenu(false);
    }
  };
  return (
    <>
      <Head>
        <title>Microsoft 2.0</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <header className="h-[54px] relative ">
        <div className="max-w-screen-2xl mx-5 2xl:mx-auto flex justify-between md:justify-start items-center">
          <img
            src="/images/mslogo.png"
            className="w-[108px] h-[54px] cursor-pointer object-contain order-2 md:order-1"
          />

          <div className="md:flex-1 md:ml-10 order-1">
            <div className="flex items-center space-x-5 md:space-x-0 ">
              <MenuIcon
                className="navIcon h-6 block md:hidden text-black"
                onClick={showHide}
              />
              <SearchIcon className="navIcon h-5 block md:hidden -scale-x-100 text-black" />

              <nav className="text-sm space-x-5 mt-1 hidden md:inline-flex">
                <span className="navLink">Microsoft 365</span>
                <span className="navLink">Office</span>
                <span className="navLink">Windows</span>
                <span className="navLink">Support</span>
              </nav>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 md:space-x-5 order-3">
            <div className=" justify-center items-center text-sm mt-1 lg:mr-5 space-x-0 hidden md:inline-flex lg:space-x-1 ">
              <span className="navLink hidden md:inline-flex">
                All Microsoft
              </span>
              <ChevronDownIcon className="navIcon h-4 text-black" />
            </div>
            <div className=" justify-center items-center text-sm mt-1 space-x-1 hidden md:flex">
              <span className="navLink hidden 2xl:inline-flex">Search</span>
              <SearchIcon className="navIcon h-5 -scale-x-100 text-black " />
            </div>
            <div className="flex justify-center items-center text-sm mt-1 space-x-1 ">
              <span className="navLink hidden 2xl:inline-flex">Cart</span>
              <ShoppingCartIcon className="navIcon h-5 text-black" />
            </div>
            <div className="flex justify-center items-center text-sm mt-1 space-x-2 ">
              <span className="navLink hidden 2xl:inline-flex">Sign in</span>
              <UserCircleIcon className="navIcon h-10 text-gray-600" />
            </div>
          </div>

          {isOpenMenu && (
            <div className="bg-[#f2f2f2] h-auto md:hidden absolute inset-x-0 top-[54px] z-50">
              <ol className="flex flex-col ">
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Microsoft 365
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Office
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Windows
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Support
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Software
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  PCs & Devices
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Entertaiment
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Business
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Developer & IT
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  Other
                </li>
                <li className="border-b border-gray-200 p-[14px] cursor-pointer">
                  View Sitemap
                </li>
              </ol>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
