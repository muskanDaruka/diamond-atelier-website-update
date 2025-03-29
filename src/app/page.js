"use client";
import React from 'react';
import img1 from '../../public/images/banner/diamond-img.png'
import Image from 'next/image';
import black from '../../public/images/Colors/black.jpg';
import blue from '../../public/images/Colors/blue.jpg';
import brown from '../../public/images/Colors/brown.jpg';
import pink from '../../public/images/Colors/pink.jpg';
import orange from '../../public/images/Colors/Orange.jpg';
import red from '../../public/images/Colors/red.jpg';
import yellow from '../../public/images/Colors/yellow.jpg';
import white from '../../public/images/Colors/white.jpg';
import olive from '../../public/images/Colors/olive.jpg';
import green from '../../public/images/Colors/green.jpg';
import purple from '../../public/images/Colors/purple.jpg';
import violet from '../../public/images/Colors/violet.jpg';
import grey from '../../public/images/Colors/grey.jpg';
import radiant from '../../public/images/basic shapes/radiant.jpg';
import bat from '../../public/images/Shapes/Bat.jpg';
import cat from '../../public/images/Shapes/Cat.jpg';
import butterfly from '../../public/images/Shapes/ButterFly.jpg';
import star from '../../public/images/Shapes/Star.jpg';
import heart from '../../public/images/basic shapes/heart.jpg';
import like from '../../public/images/Shapes/Like.jpg';
import teddy from '../../public/images/Shapes/Teddy.jpg';
import princess from '../../public/images/basic shapes/princess.jpg';
import cloud from '../../public/images/Shapes/Cloud.jpg';
import dog from '../../public/images/Shapes/Dog.jpg';
import unicorn from '../../public/images/Shapes/Unicorn.jpg';
import emerald from '../../public/images/basic shapes/emerald.jpg';
import aboutus from '../../public/images/banner/about-us.png';
import Section from '@/components/Section';
import creditandmemo from '../../public/images/banner/creditandmemo.jpg'
import { motion } from "framer-motion";

const colors = [
  { id: 1, img: black, title: "Black" },
  { id: 2, img: grey, title: "Grey" },
  { id: 3, img: red, title: "Red" },
  { id: 4, img: yellow, title: "Yellow" },
  { id: 5, img: blue, title: "Blue" },
  { id: 6, img: pink, title: "Pink" },
  { id: 7, img: orange, title: "Orange" },
  { id: 8, img: green, title: "Green" },
  { id: 9, img: olive, title: "Olive" },
  { id: 10, img: purple, title: "Purple" },
  { id: 11, img: violet, title: "Violet" },
  { id: 12, img: white, title: "White" },
  { id: 13, img: brown, title: "Brown" },
]

const shapes = [
  { id: 1, img: bat, title: "Bat" },
  { id: 2, img: emerald, title: "Emerald" },
  { id: 3, img: dog, title: "Dog" },
  { id: 4, img: cat, title: "Cat" },
  { id: 5, img: princess, title: "Princess" },
  { id: 6, img: heart, title: "Heart" },
  { id: 7, img: like, title: "Like" },
  { id: 8, img: teddy, title: "Teddy" },
  { id: 9, img: cloud, title: "Cloud" },
  { id: 10, img: radiant, title: "Radiant" },
  { id: 11, img: unicorn, title: "Unicorn" },
  { id: 12, img: star, title: "Star" },
  { id: 13, img: butterfly, title: "Butterfly" },
]

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="xl:pt-[8%] pt-[18%] font-montserrat text-3xl font-bold bg-gradient-to-b from-[#adafa7] to-[#ffffff]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto bg-[#efeeed] p-6 rounded-lg shadow-md"
        >
          <div className="flex flex-col xl:flex-row items-center justify-center xl:text-start text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="xl:w-1/2 text-[#6b6d6d] space-y-3 cursor-pointer"
            >
              <h1 className="xl:text-5xl text-xl font-normal font-montserratClassic">Welcome!</h1>
              <p className="xl:text-xl text-sm font-normal font-montserrat">We are Grower & Manufacturer of Lab Grown Diamonds since 2019</p>
              <p className="xl:text-md text-xs font-normal font-montserrat">Shop from a huge collection of Shapes, Sizes, and Colors.</p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center items-center xl:justify-start space-x-3 mt-4"
              >
                <button className="px-4 py-2 bg-white text-[#6b6d6d] xl:text-sm text-xs border border-gray-300 rounded-xl shadow">VIEW INVENTORY</button>
                <button className="px-4 py-2 bg-white text-[#6b6d6d] xl:text-sm text-xs border border-gray-300 rounded-xl shadow">CORPORATE ENQUIRY</button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="md:w-1/2 flex justify-center mt-6 md:mt-0"
            >
              <Image src={img1} className="w-full max-w-xs md:max-w-md rounded-lg shadow" alt="Diamond Image" />
            </motion.div>
          </div>
        </motion.div>
        <div className="p-1 font-montserrat">
          {[shapes, colors].map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-13 gap-4 mb-6 m-5 cursor-pointer"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: item.id * 0.1 }}
                  className="text-center"
                >
                  <Image src={item.img} alt={item.title} width={100} className="object-contain mx-auto rounded" />
                  <p className="mt-1 text-xs xl:text-sm font-medium rounded-lg p-2 bg-[#d6d4d2] shadow-md font-montserrat">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="p-10 font-montserrat cursor-pointer min-h-screen">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <Image
              src={aboutus}
              alt="Lab Grown Diamond"
              className="object-cover rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <p className="mt-6 text-xl font-bold text-[#c4b8ad] font-arimo">
              COMPANY PROFILE
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="bg-[#c4b8ad] p-6 text-white rounded-lg flex flex-col justify-center"
          >
            <div className="text-white xl:max-w-3xl">
              <h1 className="text-5xl xl:text-6xl font-medium text-center font-ebgaramond">
                About Us
              </h1>
              <p className="mt-4 xl:text-lg md:text-md text-md leading-relaxed">
                We are the grower and manufacturer of lab-grown diamonds since 2019, situated in Surat, Gujarat, India.
                Our monthly manufacturing capacity exceeds 20,000 carats, spanning a range from 0.01 to 20 carats.
                Our artistic workshop encompasses the entire process of rough to polished diamonds. We have expertise in
                layouts, side stone pairs, and colored stones, positioning us as a large-scale reputable supplier in the USA.
              </p>
              <p className="mt-4 xl:text-lg md:text-md text-md leading-relaxed">
                <strong>Competitive Pricing:</strong> Our diamonds are priced competitively, creating favorable opportunities for future business growth.
              </p>
              <p className="mt-4 xl:text-lg md:text-md text-md leading-relaxed">
                <strong>Ready-to-Sell Inventory:</strong> We maintain a large-scale, readily available inventory at our New York sales house to meet global demands efficiently.
              </p>
              <p className="mt-4 xl:text-lg md:text-md text-md leading-relaxed">
                <strong>Large Carat Stone Available:</strong> Our stock includes diamonds ranging from 5 to 12 carats, available in both Round and Fancy shapes, providing diverse options for customers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Section />
      <div className="container mx-auto px-4 py-8 cursor-pointer min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-center justify-center"
          >
            <h1 className="text-6xl font-bold text-[#c4b8ad] tracking-wide leading-tight font-ebgaramond">
              CREDIT & MEMO
            </h1>
            <Image
              src={creditandmemo}
              alt="Credit & Memo"
              className="w-full mt-4 h-full object-cover "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#c4b8ad] p-6 text-white rounded-lg flex flex-col justify-center"
          >
            <p className="text-lg text-justify font-montserrat">
              Many of our trader clients need a vast option of diamonds to showcase
              to their customers. To address this, we provide them with diamonds
              on credit and memo terms for 7 to 30 days. We believe in maintaining
              a long-term business relationship and thus, we back you with payment
              support.
            </p>
            <div className="mt-6 space-y-4 font-montserrat">
              <a
                href="#"
                className="block text-center text-black bg-white py-3 rounded-lg font-medium"
              >
                CREDIT & MEMO TERMS
              </a>
              <a
                href="#"
                className="block text-center text-black bg-white py-3 rounded-lg font-medium"
              >
                KYC FORM
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default page