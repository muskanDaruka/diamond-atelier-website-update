import React from "react";
import Link from "next/link";

function MenuList({ list = [] }) {
  return (
    <div className="absolute left-0 right-auto min-w-[12rem] w-max bg-white shadow-md rounded-md mt-2 hidden group-hover:block">
      <ul className="py-1">
        {list.map((subitem, subIndex) => (
          <li key={subIndex} className="px-4 py-2 hover:bg-stone-100 rounded-md whitespace-nowrap">
            <Link href={subitem.path || "#"} className="text-base block font-montserrat text-[#adafa7]">
              {subitem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
