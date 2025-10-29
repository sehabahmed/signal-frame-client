"use client";

import React, {useState} from "react";

// react icons
import {IoIosSearch} from "react-icons/io";
import {FaDiscord} from "react-icons/fa";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";

const ResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between w-full relative">

            {/* logo */}
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[60px] "/>

            {/* nav menus */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">home</li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">about
                    us
                </li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">services</li>
            </ul>

            {/* search bar and community links */}
            <div className="flex items-center gap-[10px]">
                <div className="relative md:flex hidden">
                    <input
                        className="py-1.5 dark:bg-transparent dark:border-slate-700 dark:placeholder:text-slate-500 dark:text-[#abc2d3] pr-4 border border-text pl-10 rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch
                        className="absolute top-[9px] dark:text-slate-500 left-3 text-[#424242] text-[1.3rem]"/>
                </div>

                <FaDiscord
                    className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 "/>
                <TbBrandGithubFilled
                    className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500"/>

                <CiMenuFries
                    className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer md:hidden flex"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] dark:bg-slate-700 right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 dark:bg-slate-800 dark:text-[#abc2d3] pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch
                        className="absolute top-[9px] dark:text-slate-400 left-5 text-[#424242] text-[1.3rem]"/>
                </div>

                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] dark:text-[#abc2d3] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] dark:text-[#abc2d3] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
                        us
                    </li>
                    <li className="hover:border-b-[#3B9DF8] dark:text-[#abc2d3] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
                </ul>

            </aside>

        </nav>
    );
};

export default ResponsiveNavbar;
          