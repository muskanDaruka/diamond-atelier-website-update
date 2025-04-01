"use client";
import React, { useEffect } from 'react';
import banner from '../../public/images/banner/banner-image.png';
import horse from '../../public/images/banner/horse.png';
import Image from 'next/image';
import diamond from '../../public/images/banner/diamond.png';
import money from '../../public/images/banner/money.png';
import certificate from '../../public/images/banner/certificate.png';
import memo from '../../public/images/banner/memo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {
  const sections = [
    {
      title: "Exotic Shapes & Fancy Colors",
      subtitle: "Diamonds over 100+ shapes & 10+ shades",
      description: "We excel in crafting unique shapes diamonds. Our built-in inventory ensures a customized color delivery within just 20 days, offering unparalleled convenience.",
      image: horse,
      imagePosition: "left",
      classes: "object-contain mx-auto rounded"
    },
    {
      title: "Matching Pair & Matching Layout",
      subtitle: "In 0.10 MM of tolerance",
      description: "Our extensive range of calibrated matching layouts starts from 10 cents to 99 cents, in 0.10 MM of tolerance. Whether your requirement includes identical shapes, colors, clarities, MM or cent values, count on us to provide precisely what you're looking for.",
      image: diamond,
      imagePosition: "right",
      classes: "object-contain mx-auto rounded"
    }
  ];

  const policy = [
    {
      title: "Competitive Price",
      description: "Our direct manufacturing access enables us to provide diamonds at affordable prices, ensuring our customers access cost-effective options.",
      image: money,
      imagePosition: "left",
      classes: "object-contain mx-auto rounded"
    },
    {
      title: "IGI & GIA Certified",
      description: "We offer an extensive selection of 3000+ IGI & GIA certified stones, providing our clients with an extensive selection of diamonds to choose from.",
      image: certificate,
      imagePosition: "right",
      classes: "object-contain mx-auto rounded"
    },
    {
      title: "Credit & Memo",
      description: "We facilitate credit and memo terms lasting 7 to 30 days. Our commitment to long-term partnerships is reflected in our unwavering financial support.",
      image: memo,
      imagePosition: "left",
      classes: "object-contain mx-auto rounded"
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <section className="relative flex flex-col md:flex-row xl:flex-row items-center bg-black pt-24 px-4 h-screen">
        <h1 className="text-white font-bold text-6xl px-4 text-center md:text-left xl:text-left">We are Diamond Atelier</h1>
        <Image src={banner} alt="banner" className="basis-2/3 object-cover rounded-lg mt-8 xl:mt-0" />
      </section>
      {sections.map((section, index) => (
        <section 
          key={index} 
          className={`relative flex flex-col md:flex-row xl:flex-row items-center bg-black px-4 h-screen ${section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}
        >
          <Image src={section.image} alt={section.title} className={`${section.classes}`} />
          <div className="text-center md:text-left xl:text-left lg:w-1/2">
            <h2 className="text-white font-bold text-4xl px-4 uppercase">{section.title}</h2>
            {section.subtitle && <h4 className="text-white font-medium text-xl px-4 mt-4 uppercase">{section.subtitle}</h4>}
            {section.description && <p className="text-[#d9d9d9] font-normal text-md px-4 mt-4 line-clamp-3 leading-extended">{section.description}</p>}
          </div>
        </section>
      ))}
      {policy.map((section, index) => (
        <section 
          key={index} 
          className={`relative flex flex-col lg:flex-row items-center bg-black px-4 h-screen ${section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}
        >
          <Image src={section.image} alt={section.title} className={`${section.classes}`} />
          <div className="text-center md:text-left xl:text-left lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-white font-bold text-4xl px-4 uppercase">{section.title}</h2>
            {section.description && <p className="text-[#d9d9d9] font-normal text-md px-4 mt-4 line-clamp-3 leading-extended">{section.description}</p>}
          </div>
        </section>
      ))}
    </>
  );
}

export default Page;
