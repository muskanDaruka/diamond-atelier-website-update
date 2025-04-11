"use client";
import React from 'react'
import volcano from '../../../public/images/about/volcano.png'
import img1 from '../../../public/images/about/img1.png'
import img2 from '../../../public/images/about/img2.png'
import img3 from '../../../public/images/about/img3.png'
import img4 from '../../../public/images/about/img4.png'
import img5 from '../../../public/images/about/img5.png'
import Image from 'next/image'
import { motion } from 'framer-motion';

function WhyLabGrown() {
    const list = [
        { id: 1, img: img1, title: "LESSER PRICE", content: "Mined Diamonds can trade 15 hands and travel across 3 continents before reaching the consumer. Lab Grown Diamonds have a much shorter trip between origin and retail purchase, resulting in significantly lower pricing and hence making end consumer's pocket easy." },
        { id: 2, img: img2, title: "NO CHILD LABOUR", content: "Children are considered an easy source of cheap labour, they are regularly employed in the diamond mining industry. Lab-Grown Diamond Industry, being a technology intensive business requires educated and skilled manpower and is free from child and slave labour." },
        { id: 3, img: img3, title: "RISE IN EMPLOYMENT", content: "Lab-grown diamond company ensures high security jobs in both cutting and polishing. of diamonds resent cutting and polishing centers are facing an acute shortage of rough diamonds" },
        { id: 4, img: img4, title: "ECO FRIENDLY", content: "Nature is greater than luxury. Lab grown diamonds does not involve any excavation or digging of the grounds like the mined diamonds. Thus, it wears a cap of being eco-friendly! Next time you make a CVD/HPHT purchase, know that nature has your back!" },
        { id: 5, img: img5, title: "CONFLICT FREE", content: "Large numbers of diamonds are tainted by violence, human rights abuses, poverty, environmental degradation, and other issues. We go beyond the usual standard to offer diamonds that have been carefully selected for their ethically responsible manufacturing and delivery." }
    ]
    return (
        <div>
            <section className="relative bg-black xl:pt-48 md:pt-48 pt-24 p-6">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="uppercase font-bold font-montserrat text-white text-center xl:text-4xl md:text-2xl text-md pb-4"
                >
                    WHY CHOOSE LAB GROWN DIAMONDS?
                </motion.h1>
                <Image src={volcano} className='object-contain w-full' alt='diamond' />
            </section>
            <section className='w-full bg-[#e9e9e9]'>
                <div className="mx-auto p-4 grid grid-cols-1">
                    {list.map((item, index) => (
                        <motion.div
                        key={item.id}
                        className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ amount: 0.3 }}
                    >
                            <div className="w-1/2">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 p-4 flex flex-col justify-center">
                                <h3 className="font-bold md:text-lg xl:text-2xl text-base font-montserrat">{item.id}. {item.title}</h3>
                                <p className="text-[#6b6d6d] xl:text-lg md:text-sm text-xs mt-2 font-montserrat">{item.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default WhyLabGrown