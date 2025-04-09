"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import certified from "../../../public/images/about/certified.png";
import horse from "../../../public/images/about/horse.png";
import stone from "../../../public/images/about/horse-stone.png";
import matching from "../../../public/images/about/matching.png";
import jewellery from "../../../public/images/about/jewellery.png";
import melee from "../../../public/images/about/melee.png";
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
        "We excel in crafting unique shapes diamonds. Our built-in inventory ensures a customized color delivery within just 20 days, offering unparalleled convenience.",
      image: certified,
      imagePosition: "left",
    },
    {
      title: "100+ shapes",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: horse,
      imagePosition: "right",
    },
    {
      title: "30+ colors",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: stone,
      imagePosition: "left",
    },
    {
      title: "Matching layout",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: matching,
      imagePosition: "right",
    },
    {
      title: "Star melee",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: melee,
      imagePosition: "left",
    },
    {
      title: "JEWELLERY",
      subtitle: "Diamonds over 100+ shapes",
      description:
        "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: jewellery,
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
    <div className="bg-black xl:pt-6 md:pt-18 pt-8 pb-8">
      <div className="relative w-full h-[28vh] md:h-[90vh] xl:h-screen overflow-hidden xl:mt-0 md:mt-0 mt-36">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
        >
          <source
            src="https://media-hosting.imagekit.io/17238941335f41d0/WhatsApp%20Video%202025-04-04%20at%206.32.44%20PM.mp4?Expires=1838380115&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nZxoh97saKK~I0-2fPvophTtLg25kXGzwBMCqKYN6jGasGac70NwW5OR~9jK2yk7-JFCuU-dK-UrTdUoa4VsrWBiWfw0aqWF2w0j7Fx7XM3n~5wjCQ00JDk7h8dmmF4NHKlz2Cu~S2wL1UOe-2Mts8w0wPwX2XQ1TXlVrNeG9cefpN94UZueXyr~XVkLDgWMisEqtZRm49HZ8CzZdPA9O59mokxbaHsLjtvMGfoKJ~W7yHumcx40MIwceipeIldzR1dGk-3Tin4KqZ7PRxRQRVSUYVdkCNcyGk5on6H-xPFJ6UPBWwtXecxlN1IGUZJsVQaJcRXbRpHRzsmU7NiGtA__"
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
            <Image src={item.image} alt={item.title} className="w-full h-auto max-w-xl md:max-w-md lg:max-w-lg xl:min-w-2xl object-contain rounded mx-auto" data-aos="zoom-in-up" />
          </motion.div>
          <div
            className="text-center md:text-left xl:text-left xl:w-1/2 mt-8 xl:mt-0"
          >
            <h2 className="text-white font-bold xl:text-4xl md:text-2xl text-xl px-4 uppercase font-montserrat" data-aos="fade-up" data-aos-duration="4000">
              {item.title}
            </h2>
            {item.subtitle && (
              <h4 className="text-white font-medium xl:text-lg md:text-md text-xs px-4 mt-4 uppercase font-montserrat" data-aos="fade-up" data-aos-duration="4000">
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
              className="text-white font-bold uppercase px-4 xl:text-3xl md:text-2xl text-xl font-montserrat"
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
