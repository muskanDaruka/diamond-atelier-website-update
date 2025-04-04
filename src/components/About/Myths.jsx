"use client";
import React from 'react'
import myth from '../../../public/images/about/myth.png'
import { motion } from 'framer-motion';
import Image from 'next/image';

function Myths() {

    const mythsAndFacts = [
        {
            myth: "Lab-grown diamonds are synthetic in nature!",
            fact: "Lab-grown diamonds are a far cry from fake diamonds. Historically, fake diamonds were typically glass. Glass is much less durable and has a lot less sparkle than a well-cut diamond. Other diamond imitations, like synthetic cubic zirconia and natural zircon or topaz gems, are likely to chip with wear. Lab-created diamonds have none of those issues. They’re just as durable and sparkly as any natural diamond."
        },
        {
            myth: "Lab Grown diamond fade over a period of time!",
            fact: "A lab diamond will never get cloudy, fade in brilliance, or change color. Our lab diamonds have the same physical properties of a mined diamond. It will not change appearance. It will look exactly the same in a billion years as it does the day you receive it. In fact, if you placed your lab diamond in a vat of concentrated hydrochloric acid it would just get a good cleaning!"
        },
        {
            myth: "Lab-grown diamonds are less precious!",
            fact: "The reason Lab Grown Diamonds are up to 70-80% less than mined diamonds is not because they are lower quality (in-fact they are higher quality than 97% of mined diamonds) it’s because the supply chain is so much shorter. Lab Grown Diamonds are most definitely valuable. The scientists, laboratories, engineers, equipment, time, effort and expertise are all factors that go into producing some of the world's highest quality diamonds which makes them equally precious."
        },
        {
            myth: "Lab Grown diamond does not have any resale value!",
            fact: "We’re seeing a very similar system for the resale of Lab Grown Diamonds emerging today. These diamonds are a valuable treasure and can be readily bought and re-sold in the market. As young people become even more aware and interested in products that match their values, you can feel confident they will appreciate that the Lab Grown Diamond you are sharing with them had a positive impact on the world and they can feel proud wearing it with the inclined resale value."
        },
        {
            myth: "Lab-grown diamonds aren’t eco-friendly!",
            fact: "There is some fogginess around the sustainability of lab diamonds, only because of they are created with a HPHT method. This method require a lot of electricity, still, it is not as much as it takes to mine for diamonds. Infact. one of the reasons that so many people turn to lab diamonds for their diamond gifts is because they know that they are ethical diamonds — for people and for the planet."
        }
    ];

    return (
        <div>
            <section className="relative bg-black pt-48">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }} // Re-triggers when visible
                    className="uppercase font-bold font-montserrat text-white text-center xl:text-4xl md:text-2xl text-md pb-4"
                >
                    Myths & Facts about
                    Lab Grown Diamonds
                </motion.h1>
                <Image src={myth} className='object-contain w-full' alt='myth'/>
            </section>
            <section
            className="flex flex-col gap-8 bg-black p-8"
        >
            {mythsAndFacts.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex justify-between items-center gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                        <motion.div className="bg-[#6b6d6d] p-2" whileHover={{ scale: 1.1 }}>
                            <span className="text-white font-medium text-sm font-montserrat">{`MYTH ${index + 1}`}</span>
                        </motion.div>
                        <motion.div className="bg-[#d9d9d9] px-8 p-2 mt-2" whileHover={{ scale: 1.1 }}>
                            <span className="bg-[#d9d9d9] font-medium text-sm font-montserrat">FACT</span>
                        </motion.div>
                    </motion.div>

                    <motion.div className="border border-[#6b6d6d]">
                        <div className="bg-black text-center p-2">
                            <h2 className="text-[#6b6d6d] xl:text-xl md:text-md text-sm font-bold font-montserrat">{item.myth}</h2>
                        </div>
                        <div className="bg-[#e9e9e9] text-justify p-4">
                            <p className="text-[#6b6d6d] xl:text-base md:text-md text-xs font-medium font-montserrat">{item.fact}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </section>
        </div>
    )
}

export default Myths