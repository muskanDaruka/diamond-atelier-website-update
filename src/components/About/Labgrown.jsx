"use client";
import Image from 'next/image';
import React from 'react';
import background from '../../../public/images/education/background.png'
import Link from 'next/link';
import { motion } from 'framer-motion';

function Labgrown() {
  const list = [
    { id: 1, title: "About Lab Grown Diamonds", path: "#" },
    { id: 2, title: "Difference between Mined & Lab Grown", path: "/difference" },
    { id: 3, title: "Methods of Growing Diamonds", path: "/methods" },
    { id: 4, title: "Why Lab Grown?", path: "/whyLab" },
    { id: 5, title: "Diamond Simulants", path: "/simulants" },
    { id: 6, title: "Myths & Facts", path: "/myth" },
  ];

  return (
    // <div 
    //     className="bg-black min-h-screen flex items-center justify-center px-6 py-12 xl:pt-48 md:pt-48 pt-24"
    // >
    //     <section className="flex flex-col md:flex-row xl:flex-row items-center justify-between w-full  gap-10">
    //         <motion.div 
    //             className="text-center md:text-left xl:flex-row md:w-1/2 space-y-6"
    //             initial={{ opacity: 0, y: -30 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.8 }}
    //             viewport={{ once: false, amount: 0.2 }}
    //         >
    //             <h1 className="font-semibold text-xl md:text-2xl xl:text-4xl uppercase text-[#d9d9d9] font-montserrat">
    //                 Great technology enables big dreams
    //             </h1>
    //             <motion.div 
    //                 initial={{ scale: 0.8, opacity: 0 }}
    //                 whileInView={{ scale: 1, opacity: 1 }}
    //                 transition={{ duration: 0.8 }}
    //                 viewport={{ once: true }}
    //             >
    //                 <Image
    //                     src={img}
    //                     alt="Lab Grown Diamonds"
    //                     width={500}
    //                     height={500}
    //                     className="object-contain rounded w-full"
    //                 />
    //             </motion.div>
    //         </motion.div>
    //         <motion.div 
    //             className="flex flex-col space-y-4 md:w-1/2 mt-8 xl:mt-0 md:mt-0"
    //             initial={{ x: 100, opacity: 0 }}
    //             whileInView={{ x: 0, opacity: 1 }}
    //             transition={{ duration: 0.8 }}
    //             viewport={{ once: true }}
    //         >
    //             {list.map((item, index) => (
    //                 <motion.div 
    //                     key={item.id} 
    //                     className="bg-[#d9d9d9] xl:m-5 xl:p-5 p-4 shadow-md"
    //                     initial={{ y: 20, opacity: 0 }}
    //                     whileInView={{ y: 0, opacity: 1 }}
    //                     transition={{ duration: 0.6, delay: index * 0.1 }}
    //                     viewport={{ once: true }}
    //                 >
    //                     <Link href={item.path} className="text-[#6b6d6d] font-medium hover:underline hover:text-black text-xl font-montserrat">
    //                         {item.title}
    //                     </Link>
    //                 </motion.div>
    //             ))}
    //         </motion.div>
    //     </section>
    // </div>
    <div>
      <section className="relative xl:pt-36 md:pt-24 pt-24 flex justify-center items-center h-screen">
        <Image
          src={background}
          alt="background-img"
          className="w-full h-screen object-cover"
        />
        <div className="absolute xl:top-48 grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 px-4 xl:px-10 p-8">
          {list.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-transparent xl:m-5 xl:p-5 p-1 m-2 shadow-md border border-[#6b6d6d] text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={item.path} className="text-[#6b6d6d] font-medium hover:underline hover:text-black text-xl font-montserrat">
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Labgrown;