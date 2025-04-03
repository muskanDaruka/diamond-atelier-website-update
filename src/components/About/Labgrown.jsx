"use client";
import Image from 'next/image';
import React from 'react';
import img from '../../../public/images/about/img.png';
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
        <div 
            className="bg-black min-h-screen flex items-center justify-center px-6 py-12 xl:pt-0 md:pt-24 pt-24"
        >
            <section className="flex flex-col md:flex-row xl:flex-row items-center justify-between w-full max-w-5xl gap-10">
                <motion.div 
                    className="text-center md:text-left xl:flex-row md:w-1/2 space-y-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className="font-semibold text-3xl uppercase text-[#d9d9d9]">
                        Great technology enables big dreams
                    </h1>
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={img}
                            alt="Lab Grown Diamonds"
                            width={500}
                            height={500}
                            className="object-contain rounded mx-auto md:mx-0"
                        />
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="flex flex-col space-y-4 md:w-1/2 mt-8 md:mt-0"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {list.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            className="bg-[#d9d9d9] p-4 shadow-md"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={item.path} className="text-[#6b6d6d] font-medium hover:underline hover:text-black text-xl">
                                {item.title}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}

export default Labgrown;