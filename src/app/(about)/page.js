"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import banner from "../../../public/images/banner/banner-image.png";
import horse from "../../../public/images/banner/horse.png";
import diamond from "../../../public/images/banner/diamond.png";
import money from "../../../public/images/banner/money.png";
import certificate from "../../../public/images/banner/certificate.png";
import memo from "../../../public/images/banner/memo.png";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function Page() {
  const sections = [
    {
      title: "Exotic Shapes & Fancy Colors",
      subtitle: "Diamonds over 100+ shapes & 10+ shades",
      description:
        "We excel in crafting unique shapes diamonds. Our built-in inventory ensures a customized color delivery within just 20 days, offering unparalleled convenience.",
      image: horse,
      imagePosition: "left",
    },
    {
      title: "Matching Pair & Matching Layout",
      subtitle: "In 0.10 MM of tolerance",
      description:
        "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: diamond,
      imagePosition: "right",
    },
  ];

  const policy = [
    {
      title: "Competitive Price",
      description:
        "Our direct manufacturing access enables us to provide diamonds at affordable prices, ensuring our customers access cost-effective options.",
      image: money,
      imagePosition: "left",
    },
    {
      title: "IGI & GIA Certified",
      description:
        "We offer an extensive selection of 3000+ IGI & GIA certified stones, providing our clients with an extensive selection of diamonds to choose from.",
      image: certificate,
      imagePosition: "right",
    },
    {
      title: "Credit & Memo",
      description:
        "We facilitate credit and memo terms lasting 7 to 30 days. Our commitment to long-term partnerships is reflected in our unwavering financial support.",
      image: memo,
      imagePosition: "left",
    },
  ];

  return (
    <>
      <section className="flex flex-col xl:flex-row xl:justify-between md:justify-between justify-around items-center bg-black pt-24 h-screen px-4">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-white font-bold text-2xl md:text-3xl xl:text-5xl text-center md:text-left xl:text-left"
        >
          We are Diamond Atelier
        </motion.h1>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-8 xl:mt-0"
        >
          <Image src={banner} alt="banner" className="object-contain max-w-xs md:max-w-lg xl:max-w-full xl:h-auto" />
        </motion.div>
      </section>

      {[...sections, ...policy].map((item, index) => (
        <section
        key={index}
        className={`flex flex-col md:flex-row xl:flex-row justify-evenly items-center bg-black px-4 min-h-screen  ${
          item.imagePosition === "left" ? "md:flex-row-reverse" : ""
        }`}
      >
          <motion.div
            variants={item.imagePosition === "left" ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image src={item.image} alt={item.title} className="object-contain rounded xl:mx-auto" />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center md:text-left lg:w-1/2 mt-8 lg:mt-0"
          >
            <h2 className="text-white font-bold text-4xl px-4 uppercase">
              {item.title}
            </h2>
            {item.subtitle && (
              <h4 className="text-white font-medium text-xl px-4 mt-4 uppercase">
                {item.subtitle}
              </h4>
            )}
            <p className="text-[#d9d9d9] font-normal text-xl px-4 mt-4 leading-extended">
              {item.description}
            </p>
          </motion.div>
        </section>
      ))}
    </>
  );
}

export default Page;
