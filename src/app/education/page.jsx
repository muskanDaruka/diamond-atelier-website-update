"use client";
import React from 'react'
import img1 from '../../../public/images/education/img1.png'
import img2 from '../../../public/images/education/img2.png'
import img3 from '../../../public/images/education/img3.png'
import img4 from '../../../public/images/education/img4.png'
import Image from 'next/image';
import { motion } from "framer-motion";

const page = () => {

  const evolution = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ]
  const fadeRight = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    }
  }

  return (
    <>
      <section className="relative pt-24 bg-black min-h-screen grid content-center cursor-pointer">
        <h2 data-aos="fade-down" className='text-[#6b6d6d] text-center text-2xl font-montserrat font-medium'>At Diamond Atelier, </h2>
        <p data-aos="fade-down" className='mb-10 text-[#6b6d6d] text-center text-6xl font-medium italic' style={{ fontFamily: 'Edwardian Script ITC' }}> artist shapes stones</p>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 place-items-center'
        >
          {evolution.map((item) => (
            <motion.div
              variants={childVariant}
              className="text-center"
              key={item.id}
            >
              <Image
                src={item.img}
                alt="Evolution-img"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default page