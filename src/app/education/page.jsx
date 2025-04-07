"use client";
import React from 'react'
import background from '../../../public/images/education/background.png'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

const page = () => {
  
  const list = [
    { id: 1, title: "EVOLUTION", path: "#" },
    { id: 2, title: "THE 4CS", path: "#" },
    { id: 3, title: "ANATOMY", path: "#" }
    // { id: 4, title: "Why Lab Grown?", path: "/whyLab" },
    // { id: 5, title: "Diamond Simulants", path: "/simulants" },
    // { id: 6, title: "Myths & Facts", path: "/myth" },
  ];

  return (
    <div>
      <section className="relative pt-36 flex justify-center items-center">
        <Image
          src={background}
          alt="background-img"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-48 grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 px-4 xl:px-10 p-8">
        {list.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            className="bg-transparent xl:m-5 xl:p-5 p-4 shadow-md border border-[#6b6d6d] text-cente"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={item.path} className="text-[#6b6d6d] font-medium hover:underline hover:text-black text-xl font-montserrat r">
                                {item.title}
                            </Link>
                        </motion.div>
                    ))}
        </div>
      </section>
    </div>
  )
}

export default page