"use client";
import React, { useState, useEffect } from 'react'
import background from '../../../public/images/banner/contact.png'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

function page() {
  const [form, setForm] = useState([])
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, message });
  }

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className='relative h-screen '>
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="background Image"
          layout="fill"
          objectFit="fill"
          priority
        />
        <div className='relative xl:pt-48 md:pt-48 pt-16 px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-8 font-montserrat place-items-center'>
          <div className='xl:space-y-6 space-y-2 mb-4'>
            <h2 data-aos="fade-right" className='text-white md:text-2xl xl:text-5xl text-xl font-semibold hover:text-[#777678]'>GET IN TOUCH WITH US</h2>
            <p data-aos="fade-right" className='text-white xl:text-xl md:text-sm text-sm hover:text-[#777678]'>We're here to help you with any questions or concerns</p>
            <div className='grid xl:grid-cols-2 xl:gap-6 gap-6' data-aos="fade-right">
              <div className='flex items-start gap-3'>
                <FaPhone className='text-black bg-white p-1 rounded-full size-8 md:mt-1 xl:mt-2 mt-0' />
                <div>
                  <h4 className='text-white font-medium xl:text-base md:text-sm text-xs hover:text-[#777678]'>Phone</h4>
                  <p className='text-white xl:text-base md:text-sm text-xs hover:text-[#777678]'>+123-456-7890</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <FaPhone className='text-black bg-white p-1 rounded-full size-8 md:mt-1 xl:mt-2 mt-0' />
                <div>
                  <h4 className='text-white font-medium xl:text-base md:text-sm text-xs hover:text-[#777678]'>Phone</h4>
                  <p className='text-white xl:text-base md:text-sm text-xs hover:text-[#777678]'>+123-456-7890</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <IoMdMail className='text-black bg-white p-1 rounded-full size-8 md:mt-1 xl:mt-2 mt-0' />
                <div>
                  <h4 className='text-white font-medium xl:text-base md:text-sm text-xs hover:text-[#777678]'>E-Mail</h4>
                  <p className='text-white xl:text-base md:text-sm text-xs hover:text-[#777678]'>diamondatelierusa@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <SlGlobe className='text-black bg-white p-1 rounded-full size-8 md:mt-1 xl:mt-2 mt-0' />
                <div>
                  <h4 className='text-white font-medium xl:text-base md:text-sm text-xs hover:text-[#777678]'>Website</h4>
                  <p className='text-white xl:text-base md:text-sm text-xs hover:text-[#777678]'>www.diamondatelier.com</p>
                </div>
              </div>
              <div className='flex items-start gap-3 md:col-span-2'>
                <FaLocationDot className='text-black bg-white p-1 rounded-full size-8 md:mt-1 xl:mt-2 mt-0' />
                <div>
                  <h4 className='text-white font-medium xl:text-base md:text-sm text-xs hover:text-[#777678]'>Address</h4>
                  <p className='text-white xl:text-base md:text-sm text-xs hover:text-[#777678]'>38 West 48th Street, 5th Floor, New York, NY 10036</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:max-w-xs xl:max-w-md w-full mx-auto" data-aos="fade-left">
            <div className='bg-[#d9d9d9] rounded-2xl shadow-xl xl:p-6 md:p-4 p-6'>
              <form className="xl:space-y-4 space-y-1" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name' className='text-[#111c4f] block mb-1 xl:text-base md:text-sm text-xs font-medium'>Full Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Enter your Full Name"
                    className="bg-white rounded-full w-full xl:py-2 py-1 px-4 font-medium shadow focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='text-[#111c4f] block mb-1 xl:text-base md:text-sm text-xs font-medium'>Phone Number:</label>
                  <input
                    type='tel'
                    id="phone"
                    value={phone}
                    placeholder='+1 123 456 7890'
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white rounded-full w-full xl:py-2 py-1 px-4 font-medium shadow focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor='message' className='text-[#111c4f] block mb-1 xl:text-base md:text-sm text-xs font-medium'>Message:</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="bg-white w-full px-4 xl:py-2 py-0 rounded-md font-medium shadow focus:outline-none"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-white text-[#111c4f] rounded-full px-8 xl:py-2 py-1 text-base font-bold hover:bg-[#0e1740] transition">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
