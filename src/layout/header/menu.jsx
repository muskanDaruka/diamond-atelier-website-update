"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MenuList from "./menu-list";
import { usePathname } from "next/navigation";

function Menu({ route, scrolled }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuRef = useRef(null);
  const pathname = usePathname(); 

  const handleToggle = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    const currentIndex = route.findIndex((item) => item.path === pathname || item.href === pathname);
    setActiveIndex(currentIndex);
  }, [pathname, route]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul
      ref={menuRef}
      className="lg:flex flex-col lg:flex-row xl:justify-around md:justify-around justify-center lg:mt-0 mt-5 xl:text-xl gap-8 cursor-pointer"
    >
      {route.map((item, index) => (
        <li
          key={item.id}
          className={`group relative my-2 text-start m-2 p-2 lg:border-none border border-[#d9d1bc] rounded-md font-montserrat 
          ${scrolled ? "text-white" : "text-white"} hover:underline hover:underline-offset-4`}
        >
          <div
            className="flex justify-between items-center"
            onClick={() => item.items && handleToggle(item.id)}
          >
            {item.path || item.href ? (
              <Link
                href={item.path || item.href}
                className={`transition-colors duration-300 font-montserrat ${
                  index === activeIndex
                    ? "text-[#6b6d6d] hover:text-gray-500 underline underline-offset-4 font-bold"
                    : "hover:text-[#6b6d6d] text-white"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-montserrat">{item.label}</span>
            )}
          </div>
          {item.items && <MenuList list={item.items} isOpen={openMenu === item.id} />}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
