"use client";
import React from 'react';
import rough from '../../../public/images/about/rough.png';
import seed from '../../../public/images/about/seed.png';
import Image from 'next/image';
import diamond from "../../../public/images/about/diamond.png";
import { motion } from "framer-motion";
import Table from '../common/Table';
import price from '../../../public/images/about/Difference - Lab Grown-Price-.png'
import tree from '../../../public/images/about/Difference - Lab Grown-Sustainability-.png'
import value from '../../../public/images/about/Difference - Lab Grown-Value-.png'
import future from '../../../public/images/about/FutureIcon.png'

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function DifferenceBetweenDiamonds() {
    const commitmentList = [
        { id: 1, icon: <Image src={price} alt="Price Icon" width={120} height={60} />, title: "PRICE", description: "A Lab Grown diamond of the same grade (according to the 4C’s) will be priced about 8% - 12% of natural diamonds with the same carat, cut, color, and clarity.", img: diamond },
        { id: 2, icon: <Image src={tree} alt="Price Icon" width={120} height={60} />, title: "VALUE", description: "Initially, when Lab Grown diamonds came to the market, no one took it seriously. But, as they say, change is the law of nature. Lab Grown diamonds became evident in the market and even the most sophisticated gem laboratories certified them as diamonds.", content: "Does it fade or get cloudy over time? No! It stays forever just like a mined diamond." },
        { id: 3, icon: <Image src={value} alt="Price Icon" width={120} height={60} />, title: "SUSTAINABILITY", description: "We have a duty to care for the environment. Lab grown diamonds do not involve any excavation or dispersion of natural resources. The future is lab-grown diamonds.", content: "For every carat of diamond that is mined, nearly 100 sq ft of land is disturbed and almost 6000 lbs of mineral waste is created." },
        { id: 4, icon: <Image src={future} alt="Price Icon" width={120} height={60} />, title: "FUTURE", description: "Lab-grown diamonds are positioned as the future of the diamond industry, driven by ethical, environmentally friendly characteristics, and technological advancements.", content: "They have a projected growth rate of 22% between 2021 and 2026" }
    ];

    const tableData = [
        {
            headers: [
                ["INDUSTRIAL ADVANTAGE", "EARTH MINED", "LAB GROWN"]
            ],
            rows: [
                ["Origin Guaranteed", "No", "Yes"],
                ["Security of Supply", "No", "Yes"],
                ["Security of Future Growth", "No", "Yes"],
                ["Security of Employment", "No", "Yes"],
            ]
        },
        {
            headers: [
                ["PROPERTIES", "DIAMONDS", "SIMULANTS"],
                ["", "EARTH MINED", "LAB GROWN", "CUBIC ZIRCONIA (CZ)", "MOISSANITE"]
            ],
            colSpans: {
                colSpan: { 0: { 0: 1, 1: 2, 2: 2 } },
            },
            rows: [
                ["Composition", "C", "C", "ZrO2", "SiC"],
                ["Structure", "Cubic", "Cubic", "Cubic", "Hexagonal"],
                ["Refractive Index", "2.42", "2.42", "2.2", "2.7"],
                ["Dispersion", "0.44", "0.44", "0.066", "0.104"],
                ["Hardness", "10", "10", "8.25", "9.25"],
                ["Density", "3.52", "3.52", "5.70", "3.21"],
                ["Thermal", "Excellent", "Excellent", "Poor", "High"],
                ["Purity", "Only 2% are Type IIa", "Rare and Purest (100% Type IIa)", "NA", "NA"],
                ["Measured In", "Carats", "Carats", "Carats", "Carats"],
                ["Blue Fluorescence", "Strong to None", "None", "None", "None"],
                ["Phosphorences", "No", "Some", "NA", "NA"],
                ["Color", "Even", "Even", "NA", "NA"],
            ]
        }
    ];
    return (
        <div>
            <section className="relative bg-black xl:pt-48 md:pt-48 pt-24 pb-10 cursor-pointer">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className="uppercase font-medium font-montserrat text-white text-center xl:text-3xl md:text-2xl text-md">
                        Difference Between Earth Mined and Lab Grown Diamonds
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='flex xl:flex-row md:flex-row flex-col justify-center items-center font-montserrat'>

                        <div className="gap-4 pt-2">
                            <button className="bg-[#777678] uppercase text-white px-9.5 py-1 ml-3">Rough Stone</button>
                            <Image src={rough} alt="diamonds" width={200} className="object-contain px-10 py-5 ms-3 mr-5 bg-white" />
                        </div>
                        <div className="xl:pt-1 pt-4">
                            <button className="bg-[#777678] uppercase text-white px-8.5 py-1">Diamond Seed</button>
                            <Image src={seed} alt="diamonds" width={200} className="object-contain px-10 py-6.5 xl:mr-5 md:mr-5 bg-white " />
                        </div>

                    </div>
                </motion.div>
            </section>
            <section className="bg-[#e9e9e9] p-6 cursor-pointer">
                <motion.div
                    className="flex flex-col items-center xl:text-left md:text-left text-center h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <p className="text-[#6b6d6d] md:text-md text-sm xl:text-xl font-montserrat">
                        The only difference between a lab-created diamond and a mined diamond is their origin. A lab-grown diamond is created in a lab using extraordinary technology that replicates the natural diamond formation process. The result is a man-made diamond with identical physical, chemical, and optical properties to a mined diamond.
                    </p>
                </motion.div>
                <div className="text-center py-10 font-montserrat">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {commitmentList.map((item) => (
                            <motion.div
                                key={item.id}
                                className="flex flex-col items-center text-center h-full"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={fadeInVariants}
                            >
                                <div className="p-3 bg-white rounded-full mb-4 text-[#777678]">{item.icon}</div>
                                <h3 className="text-2xl font-medium">{item.title}</h3>
                                <div className="flex flex-col items-center text-center bg-white p-6 shadow-md mt-4 flex-grow w-full min-h-[200px]">
                                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                </div>
                                {item.content && (
                                    <motion.div
                                        className="flex flex-col items-center text-center bg-[#777678] text-white p-6 shadow-md flex-grow w-full min-h-[100px]"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                        variants={fadeInUp}
                                    >
                                        <p className="text-sm text-white mt-2">{item.content}</p>
                                    </motion.div>
                                )}
                                {item.id === 1 && (
                                    <motion.div
                                        className="flex flex-col items-center text-center bg-[#777678] text-white p-2 pt-8 shadow-md flex-grow w-full"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                        variants={fadeInVariants}
                                    >
                                        <div className="flex justify-evenly items-center w-full">
                                            <div className="flex flex-col items-center">
                                                <Image src={diamond} className="rounded-full" alt="Natural Diamond" />
                                                <p>Natural Diamond $10,000</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <Image src={diamond} alt="Lab Grown Diamond" className="rounded-full" />
                                                <p>Lab Grown Diamond $1,000</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='bg-black text-white cursor-pointer'>
                <Table tableData={tableData} className="border-separate border-spacing-y-4"/>
            </section>
        </div>
    );
}

export default DifferenceBetweenDiamonds;
