"use client";
import React, { useState, useEffect } from "react";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useRouter } from "next/navigation";
import logo from '../../../public/images/logo/diamondatelierlogo.jpg'
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
    {
      id: 2, label: "ABOUT", path: "/",
      items: [
        { label: "LABGROWN", path: "/labgrown" },
        { label: "DIFFERENCE", path: "/difference" },
        { label: "METHODS OF GROWING", path: "/methods" },
        { label: "WHY LAB", path: "/whyLab" },
        { label: "DIAMOND SIMULANTS", path: "/simulants" },
        { label: "MYTHS & FACTS", path: "/myth" },
      ],
    },
    { id: 3, label: "SHAPES", path: "#", },
    { id: 4, label: "EDUCATION", path: "/education", 
      items: [
        { label: "EVOLUTION", path: "#" },
        { label: "THE 4CS", path: "#" },
        { label: "ANATOMY", path: "#" },
      ]
    },
    { id: 5, label: "CONTACT US", path: "#" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full shadow-md z-50 xl:p-4 md:p-4 font-montserrat transition-all duration-300 bg-black`}>
      <div className="lg:hidden flex items-center justify-center">
        <div className="lg:hidden cursor-pointer p-4" onClick={() => setOpen(!open)}>
          {open ? <IoClose size={25} color="white" /> : <IoReorderThree size={25} color="white" />}
        </div>
        <div className="flex justify-center items-center gap-4">
          <div
            className="cursor-pointer transition-colors duration-300"
            onClick={() => router.push("/")}
          >
            <Image src={logo} width={350} height={60} alt="DIAMOND ATELIER" className="invert"/>
          </div>
        </div>
        <div className="hidden lg:block">
          <Menu route={route} scrolled={scrolled} />
        </div>
      </div>
      <div className="hidden lg:block">
      <div className="flex justify-center items-center gap-4 p-2">
          <div
            className="cursor-pointer transition-colors duration-300"
            onClick={() => router.push("/")}
          >
            <Image src={logo} width={350} height={60} alt="DIAMOND ATELIER" className="invert" />
          </div>
        </div>
        <div className="hidden lg:block">
          <Menu route={route} scrolled={scrolled} />
        </div>
        </div>
      {open && (
        <div className="absolute w-full bg-black shadow-md lg:hidden p-4">
          <Menu route={route} scrolled={true} />
        </div>
      )}
    </header>
  );
}

export default Header;
