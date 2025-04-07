"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import cubic from '../../../public/images/about/cubic.png'
import cubic2 from '../../../public/images/about/cubic2.png'
import Table from '../common/Table';


function Simulants() {

    const listItemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      };

    const tableData = [
        {
            headers: [
                ["BASIC FACTS", "DIAMONDS", "SIMULANTS"],
                ["", "EARTH MINED", "LAB GROWN", "CUBIC ZIRCONIA (CZ)", "MOISSANITE"]
            ],
            colSpans: {
                colSpan: { 0: { 0: 1, 1: 2, 2: 2 } },
            },
            rows: [
                ["Is it a diamond?", "Yes", "Yes", "No", "No"],
                ["Is it synthetic?", "No", "No", "Yes", "Yes"],
                ["Is it fake?", "No", "No", "Yes", "Yes"],
                ["Is it ethical?", "Maybe", "Yes", "Yes", "Yes"],
                ["Is it eco-conscious?", "No", "Yes", "Yes", "Yes5"],
                ["Is it artificial?", "No", "No", "Yes", "Yes"],
                ["Is it affordable?", "Maybe", "Yes", "Yes", "Yes"],
                ["What is the life of expectancy?", "Forever", "Forever", "Limited", "Limited"],
                ["Is it certified by lab?", "Yes", "Yes", "No", "No"]
            ]
        }
    ]

    return (
        <div>
            <section className="relative bg-black xl:pt-48 md:pt-48 pt-24 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className="uppercase font-medium font-montserrat text-white text-center xl:text-3xl md:text-2xl text-md">
                        What are Diamond Simulants?
                    </h1>
                </motion.div>
            </section>
            <section className='bg-[#e9e9e9] p-8'>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={listItemVariant}
                    className="text-md md:text-lg xl:text-xl leading-relaxed font-montserrat text-[#6b6d6d]"
                >
                    A diamond simulant is a manufactured stone that is meant to mimic the appearance of a diamond. Simulants are made using a wide variety of materials, so they are not chemically identical to mined diamonds. This means that they will not have the same durability, brilliance, or color of a traditional diamond.
                </motion.p>
                <div className='bg-[#6b6d69] text-white m-8 ml-0 mr-0 p-1 rounded-full'>
                    <motion.h3
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        variants={fadeLeft}
                        className="uppercase font-medium font-montserrat text-white text-center xl:text-3xl md:text-2xl text-md"
                    >
                        Lab grown diamonds are not simulants diamonds
                    </motion.h3>
                </div>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={listItemVariant}
                    className="mt-4 text-md md:text-lg xl:text-xl leading-relaxed font-montserrat text-[#6b6d6d]"
                >
                    Diamond simulants and lab-created diamonds often get mixed up, but they’re completely different. Lab grown diamonds comes in no way of diamond simulants! A diamond simulant is not a diamond at all, because the chemical properties are completely different.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={listItemVariant}
                        className="col-span-1 md:col-span-2 flex justify-center items-center text-md md:text-lg xl:text-xl leading-relaxed font-montserrat text-[#6b6d6d]"
                    >
                        They can be made out of anything from glass to cubic zirconia. While they may look similar at first, diamond simulants aren’t as hard and don’t have the same optical properties as diamonds, so they’ll show signs of wear and won’t be as sparkly.
                    </motion.p>

                    <div className="grid place-items-center">
                        <Image src={cubic} className="w-auto h-auto" alt="cubic" />
                        <p className="text-[#6b6d6d] text-center mt-2 font-montserrat">Cubic Zirconia</p>
                    </div>

                    <div className="grid place-items-center">
                        <Image src={cubic2} className="w-auto h-auto" alt="moissanite" />
                        <p className="text-[#6b6d6d] text-center mt-2 font-montserrat">Moissanite</p>
                    </div>
                </div>

            </section>
            <section className='bg-black text-white'>
                <Table tableData={tableData} />
            </section>
        </div>
    )
}

export default Simulants