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
    { id: 1, label: "ABOUT", path: "/" },
    { id: 3, label: "GALLERY", path: "#",},
    { id: 2, label: "INVENTORY", href: "https://inventory.diamondatelier.in/" },
    { id: 4, label: "CONTACT US", path: "#" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full shadow-md z-50 p-4 font-montserrat transition-all duration-300 bg-black`}>
  <div className="flex justify-between items-center mx-auto">
    <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
      {open ? <IoClose size={25} color="white" /> : <IoReorderThree size={25} color="white" />}
    </div>
    <div className="flex items-center gap-4">
      <div
        className="cursor-pointer transition-colors duration-300"
        onClick={() => router.push("/")}
      >
        <Image src={logo} width={200} height={60} alt="DIAMOND ATELIER" className="invert" />
      </div>
    </div>
    <div className="hidden lg:block">
      <Menu route={route} scrolled={scrolled} />
    </div>
  </div>
  {open && (
    <div className="absolute top-full left-0 w-full bg-black shadow-md lg:hidden p-4">
      <Menu route={route} scrolled={true} />
    </div>
  )}
</header>


  );
}

export default Header;
