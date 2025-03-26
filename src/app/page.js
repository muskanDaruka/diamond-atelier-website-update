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
      <div className="xl:pt-[8%] pt-[18%] font-montserrat text-3xl font-bold bg-[#adafa7]">
        <div className="container mx-auto bg-[#efeeed] p-6 rounded-lg shadow-md">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:text-start text-center">
            <div className="xl:w-1/2 text-[#6b6d6d] space-y-3">
              <h1 className="xl:text-5xl text-xl font-normal">Welcome!</h1>
              <p className="xl:text-xl text-sm font-normal">
                We are Grower & Manufacturer of Lab Grown Diamonds since 2019
              </p>
              <p className="xl:text-md text-xs font-normal">
                Shop from a huge collection of Shapes, Sizes, and Colors.
              </p>
              <div className="flex justify-center items-center xl:justify-start space-x-3 mt-4">
                <button className="px-4 py-2 bg-white text-[#6b6d6d] xl:text-sm text-xs border border-gray-300 rounded-xl shadow">
                  VIEW INVENTORY
                </button>
                <button className="px-4 py-2 bg-white text-[#6b6d6d] xl:text-sm text-xs border border-gray-300 rounded-xl shadow">
                  CORPORATE ENQUIRY
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image
                src={img1}
                className="w-full max-w-xs md:max-w-md rounded-lg shadow"
                alt="Diamond Image"
              />
            </div>
          </div>
        </div>
        <div className="p-1 font-montserrat">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-13 gap-4 mb-6 m-5">
            {shapes.map((shape) => (
              <div key={shape.id} className="text-center">
                <Image
                  src={shape.img}
                  alt={shape.title}
                  className="object-contain mx-auto rounded"
                />
                <p className="mt-1 text-xs xl:text-sm font-normal rounded-lg p-2 bg-[#efeeed] font-montserrat">{shape.title}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-13 gap-4 mb-6 m-5">
            {colors.map((color) => (
              <div key={color.id} className="text-center">
                <Image
                  src={color.img}
                  alt={color.title}
                  className="object-contain mx-auto rounded"
                />
                <p className="mt-1 text-xs xl:text-sm font-normal rounded-lg p-2 bg-[#efeeed] font-montserrat">{color.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='p-10 bg-[#c4b8ad] font-montserrat'>
        <div className='flex flex-col md:flex-row items-center xl:justify-around'>
          <div className='flex flex-col items-center text-center xl:text-left md:items-start mb-6 md:mb-0'>
            <Image
              src={aboutus}
              alt='Lab Grown Diamond'
              className='object-contain rounded shadow-md'
              width={500}
              height={500}
            />
            <p className='xl:mt-10 mt-3 text-xl font-bold text-white'>COMPANY PROFILE</p>
          </div>
          <div className='text-white max-w-2xl'>
            <h1 className='text-4xl xl:text-6xl font-bold font-montserrat text-center'>About Us</h1>
            <p className='mt-4 xl:text-lg md:text-md text-md leading-relaxed'>
              We are the grower and manufacturer of lab-grown diamonds since 2019, situated in Surat, Gujarat, India.
              Our monthly manufacturing capacity exceeds 20,000 carats, spanning a range from 0.01 to 20 carats.
              Our artistic workshop encompasses the entire process of rough to polished diamonds. We have expertise in
              layouts, side stone pairs, and colored stones, positioning us as a large-scale reputable supplier in the USA.
            </p>
            <p className='mt-4 xl:text-lg md:text-md text-md leading-relaxed'><strong>Competitive Pricing:</strong> Our diamonds are priced
              competitively, creating favorable opportunities for future business growth.</p>
            <p className='mt-4 xl:text-lg md:text-md text-md leading-relaxed'><strong>Ready-to-Sell Inventory:</strong> We maintain a large-scale,
              readily available inventory at our New York sales house to meet global demands efficiently.</p>
            <p className='mt-4 xl:text-lg md:text-md text-md leading-relaxed'><strong>Large Carat Stone Available:</strong> Our stock includes
              diamonds ranging from 5 to 12 carats, available in both Round and Fancy shapes, providing diverse options for
              customers.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page