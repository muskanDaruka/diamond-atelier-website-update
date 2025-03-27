"use client";
import React, { useState, useEffect } from "react";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useRouter } from "next/navigation";
import logo from '../../../public/images/logo/OnlyLogo.svg'
import Menu from "../header/menu";
import Image from "next/image";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const route = [
    { id: 1, label: "INVENTORY", href: "https://inventory.diamondatelier.in/" },
    { id: 2, label: "HOME", path: "/" },
    {
      id: 3, label: "LABGROWN", path: "#",
      items: [
        { label: "ABOUT", path: "#" },
        { label: "DIFFERENCE", path: "#" },
        { label: "METHODS OF GROWING", path: "#" },
        { label: "WHY LAB", path: "#" },
        { label: "DIAMOND SIMULANTS", path: "#" },
        { label: "MYTHS & FACTS", path: "#" },
      ],
    },
    {
      id: 4, label: "EDUCATION", path: "#",
      items: [
        { label: "EVOLUTION", path: "#" },
        { label: "THE 4CS", path: "#" },
        { label: "ANATOMY", path: "#" },
      ],
    },
    { id: 5, label: "CONTACT", path: "#" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full shadow-md z-50 p-4 font-montserrat transition-all duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}>
      <div className="flex justify-between items-center mx-auto">
        <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <IoClose size={25} /> : <IoReorderThree size={25} />}
        </div>
        <div className="flex items-center gap-4">
          <Image src={logo} className="w-auto h-auto" alt="DIAMOND ATELIER" />
          <div
            className={`font-medium text-md font-montserrat xl:text-2xl uppercase text-center cursor-pointer transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => router.push("/")}
          >
            Diamond Atelier
          </div>
        </div>
        <div className="hidden lg:block">
          <Menu route={route} scrolled={scrolled}/>
        </div>
      </div>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden p-4">
          <Menu route={route} scrolled={true}/>
        </div>
      )}
    </header>
  );
}

export default Header;
