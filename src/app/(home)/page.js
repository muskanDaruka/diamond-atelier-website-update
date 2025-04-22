"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import certified from "../../../public/images/about/certified.png";
import melee from "../../../public/images/about/star-melee.png";
import money from "../../../public/images/banner/money.png";
import certificate from "../../../public/images/banner/certificate.png";
import memo from "../../../public/images/banner/memo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      title: "10,000+ certified stones",
      subtitle: "Readily available in stock",
      description:
        "We are Grower & Manufacturer of lab grown diamonds. With our wide range having thousands of diamonds, you get one trusted source to fulfill your demand and save your time and energy.",
      type: "image",
      media: certified,
      imagePosition: "left",
    },
    {
      title: "100+ shapes",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our artisan workshop offers 100+ diamond shapes, crafted with elegance and precision. We also create custom shapes tailored to your vision within 30 days.",
      type: "video",
      media: "/images/about/Shapes video.mp4",
      imagePosition: "right",
    },
    {
      title: "30+ colors",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "We specialize in unique colored diamonds across 10+ fancy shades, with customized color delivery guaranteed within 20 days.",
      type: "video",
      media: "/images/about/Fancy Color video.mp4",
      imagePosition: "left",
    },
    {
      title: "Matching layout",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our comprehensive collection of calibrated matching layouts ranges from 10 to 99 cents, with a 0.10 MM tolerance. Whether you seek uniformity in shapes, colors, clarities, dimensions, or cent values, trust us to deliver precisely what you need.",
      type: "video",
      media: "/images/about/Matching Layout video.mp4",
      imagePosition: "right",
    },
    {
      title: "Star melee",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "We have finest small-sized lab-grown diamonds. -2 (0.006 to 0.008 carats) Star ranging from (0.009 to 0.021), Melee  (0.021 to 0.074 carats)",
      type: "image",
      media: melee,
      imagePosition: "left",
    },
    {
      title: "JEWELRY",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "We are proud to introduce our new timeless  range of lab-grown diamond jewelry - featuring rings, bracelets, necklaces, and earrings.",
      type: "video",
      media: "/images/about/jewellery.mp4",
      imagePosition: "right",
    },
  ];

  const policy = [
    {
      title: "Competitive Price",
      description:
        "Our direct manufacturing access enables us to provide diamonds at affordable prices, ensuring our customers access cost-effective options.",
      image: money,
    },
    {
      title: "IGI & GIA Certified",
      description:
        "We offer an extensive selection of 3000+ IGI & GIA certified stones, providing our clients with an extensive selection of diamonds to choose from.",
      image: certificate,
    },
    {
      title: "Credit & Memo",
      description:
        "We facilitate credit and memo terms lasting 7 to 30 days. Our commitment to long-term partnerships is reflected in our unwavering financial support.",
      image: memo,
    },
  ];

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="bg-black xl:pt-10 md:pt-18 pt-8 pb-8 cursor-pointer">
      <div className="relative w-full h-[28vh] md:h-[90vh] xl:h-screen overflow-hidden xl:mt-0 md:mt-0 mt-36">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
        >
          <source
            src="/images/about/home-banner.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {sections.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row xl:flex-row xl:justify-around md:justify-around justify-center items-center px-4 h-screen ${item.imagePosition === "left" ? "xl:flex-row-reverse md:flex-row-reverse" : ""
            }`}
        >
          <motion.div
            variants={item.imagePosition === "left" ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {item.type === "image" ? (
              <Image
                src={item.media}
                alt={item.title}
                width={400}
                height={100}
                className="w-full h-auto max-w-xl md:max-w-md lg:max-w-lg xl:min-w-2xl object-contain rounded mx-auto"
                data-aos="zoom-in-up"
              />
            ) : (
              <video
                src={item.media}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto max-w-[290px] md:max-w-md lg:max-w-lg xl:min-w-2xl inset-0 rounded mx-auto object-cover"
                data-aos="zoom-in-up"
              />
            )}
          </motion.div>
          <div
            className="text-center md:text-left xl:text-left xl:w-1/2 mt-8 md:mt-0 xl:mt-0"
          >
            <h2 className="text-white font-bold xl:text-4xl md:text-2xl text-xl px-4 uppercase font-oldstandardtt" data-aos="fade-up" data-aos-duration="5000">
              {item.title}
            </h2>
            {item.subtitle && (
              <h4 className="text-white font-medium xl:text-lg md:text-md text-xs px-4 mt-4 uppercase font-montserrat" data-aos="fade-up" data-aos-duration="3000">
                {item.subtitle}
              </h4>
            )}
            <p className="text-[#d9d9d9] font-normal xl:text-xl md:text-md text-sm px-4 mt-4 leading-extended font-montserrat" data-aos="fade-up" data-aos-duration="3000">
              {item.description}
            </p>
          </div>
        </section>
      ))}
      <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 px-4 xl:gap-6 md:gap-6 gap-32 p-6">
        {policy.map((item, index) => (
          <section
            key={index}
            className="flex flex-col items-center text-center h-full"
          >
            <h2
              className="text-white italic px-4 xl:text-3xl md:text-2xl text-xl font-migra"
              data-aos="fade-down"
            >
              {item.title}
            </h2>
            <Image
              src={item.image}
              alt={item.title}
              className="object-contain w-full max-w-xs"
              data-aos="zoom-in-up"
            />
            <p
              className="text-[#d9d9d9] font-normal leading-relaxed px-4 xl:text-xl md:text-base text-sm font-montserrat mt-auto"
              data-aos="fade-up"
            >
              {item.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Page;
