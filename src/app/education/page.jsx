"use client";
import React from 'react'
import img1 from '../../../public/images/education/img1.png'
import img2 from '../../../public/images/education/img2.png'
import img3 from '../../../public/images/education/img3.png'
import img4 from '../../../public/images/education/img4.png'
import Image from 'next/image';

const page = () => {
  const evolution = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ]

  return (
    <>
      <section className="relative pt-24 bg-black min-h-screen grid content-center cursor-pointer">
        <h2 data-aos="fade-down" className='text-[#6b6d6d] text-center text-2xl font-montserrat font-medium'>At Diamond Atelier, </h2>
        <p data-aos="fade-down" className='text-[#6b6d6d] text-center text-6xl font-medium' style={{ fontFamily: 'Edwardian Script ITC' }}> artist shapes stones</p>
        <div className='grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 place-items-center'>
          {evolution.map((item) => (
            <div key={item.id}>
              <Image
                src={item.img}
                alt="Evolution-img"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default page