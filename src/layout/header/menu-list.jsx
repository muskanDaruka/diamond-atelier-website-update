import React from "react";
import Link from "next/link";

function MenuList({ list = [], isOpen }) {
  return (
    <div className={`absolute lg:left-0 lg:right-auto min-w-[12rem] w-max bg-white shadow-md rounded-md mt-2 z-50
      ${isOpen ? "block" : "hidden"} lg:group-hover:block`}>
      <ul className="py-1">
        {list.map((subitem, subIndex) => (
          <li key={subIndex} className="px-4 py-2 hover:bg-stone-100 rounded-md whitespace-nowrap">
            <Link href={subitem.path || "#"} className="text-base block font-montserrat xl:text-black text-black cursor-pointer">
              {subitem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
