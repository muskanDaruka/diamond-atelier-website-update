import Link from "next/link";
import React from "react";
import MenuList from "./menu-list";

function Menu({ route, scrolled }) {
  return (
    <ul className="lg:flex flex-col lg:flex-row justify-around lg:mt-0 mt-5 xl:text-xl w-full cursor-pointer relative">
      {route.map((item) => (
        <li
          key={item.id}
          className={`group relative my-2 text-start m-2 p-2 lg:border-none border border-[#d9d1bc] rounded-md font-montserrat 
          ${scrolled ? "text-black" : "text-white"} hover:underline hover:underline-offset-4`}
        >
          {item.path || item.href ? (
            <Link
              href={item.path || item.href}
              className="transition-colors duration-300 hover:text-gray-500 font-montserrat"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-montserrat">{item.label}</span>
          )}
          {item.items && <MenuList list={item.items} />}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
