"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import cvd from "../../../public/images/about/cvd.jpeg";
import hpht from "../../../public/images/about/hpht.jpeg";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Method() {
    const hphtsection = [
        { id: 1, description: "Diamond seed is placed in a specifically designed press." },
        { id: 2, description: "The growth chamber is heated to 1300-1600 °C with pressures above 870,000 pounds per square inch." },
        { id: 3, description: "The molten metal dissolves the high purity carbon source." },
        { id: 4, description: "Carbon atoms precipitate on a small diamond seed crystal, and a synthetic diamond begins to grow." },
        { id: 5, description: "The lab-grown crystal is then cut and polished by a diamond cutter." }
    ];

    const cvdsection = [
        { id: 1, description: "Diamond seed crystals are placed in a diamond growth chamber which is filled with carbon-containing gas." },
        { id: 2, description: "The chamber is heated to about 900-1200°C." },
        { id: 3, description: "A microwave beam causes carbon to precipitate out of a plasma cloud and deposit onto a seed crystal." },
        { id: 4, description: "Diamonds are removed every few days to have the top surface polished to remove any non-diamond carbon. Each batch of diamonds may require several stop/start cycles, and the entire growth process can take three or four weeks." },
        { id: 5, description: "After the synthetic diamond crystals are removed, they are ready to be cut and polished into the final product." }
    ];

    return (
        <div>
            <section className="relative bg-black pt-24 p-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="uppercase font-medium font-montserrat text-white text-center xl:text-3xl md:text-2xl text-md"
                >
                    Methods of Growing Lab Grown Diamonds
                </motion.h1>
                <div className="flex justify-center items-center gap-4 p-4">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#153a66] text-white px-10 py-1">HPHT</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#153a66] text-white px-10 py-1">CVD</motion.button>
                </div>
            </section>
            <section className="bg-[#e9e9e9] p-6">
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-[#6b6d6d] md:text-md text-sm xl:text-xl p-4"
                >
                    Creating diamonds in a lab is still a fairly new technology, but is growing in popularity. The composition is identical to that of earth-mined diamonds, but the methods in which they are derived differ greatly. There are two different methods for farming lab-grown diamonds: High Pressure High Temperature (HPHT) and Chemical Vapor Deposition (CVD). The quality is continually increasing, and to the naked eye, you won’t have a clue that you are looking at a manufactured creation.
                </motion.p>
                <div className="flex flex-col md:flex-row xl:flex-row justify-around items-stretch p-6">
                    {[{ title: "HPHT", img: hpht, data: hphtsection }, { title: "CVD", img: cvd, data: cvdsection }].map((item) => (
                        <motion.div
                            key={item.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-[#f4f4f4] m-4 p-4 rounded-lg shadow-md flex flex-col flex-1 relative pt-16"
                        >
                            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
                                <Image src={item.img} alt={item.title} className="rounded-full w-32 h-32 border-4 border-[#f4f4f4] bg-white" />
                            </div>
                            <h4 className="text-[#153a66] font-semibold text-3xl uppercase text-center mt-12">{item.title}</h4>
                            <ul className="list-disc pl-5 text-[#333] flex-1">
                                {item.data.map((desc) => (
                                    <motion.li
                                        key={desc.id}
                                        variants={fadeInUp}
                                        className="mt-4 text-md md:text-md xl:text-lg leading-relaxed font-montserrat"
                                    >
                                        {desc.description}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Method;
