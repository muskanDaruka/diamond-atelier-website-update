"use client";
import Image from 'next/image'
import React from 'react'
import round from '../../../public/images/Shapes/round-1.png'
import oval from '../../../public/images/Shapes/oval-1.png'
import marquies from '../../../public/images/Shapes/marquies-1.png'
import cushion from '../../../public/images/Shapes/cushion-1.png'
import shield from '../../../public/images/Shapes/shield-1.png'
import princess from '../../../public/images/Shapes/princess-1.png'
import emerald from '../../../public/images/Shapes/emerald-1.png'
import heart from '../../../public/images/Shapes/heart-1.png'
import kite from '../../../public/images/Shapes/kite-1.png'
import triangle2 from '../../../public/images/Shapes/Triangle-2-1.png'
import cloud from '../../../public/images/Shapes/cloud-1.png'
import buddha from '../../../public/images/Shapes/budha-1.png'
import micky from '../../../public/images/Shapes/Micky-1.png'
import bat from '../../../public/images/Shapes/Bat-1.png'
import unicorn from '../../../public/images/Shapes/Unicorn-1.png'
import Dog from '../../../public/images/Shapes/Dog-1.png'
import Rabbit from '../../../public/images/Shapes/Rabbit-1.png'
import tail from '../../../public/images/Shapes/Whale Tale-1.png'
import bone from '../../../public/images/Shapes/Bone-1.png'
import car from '../../../public/images/Shapes/Car-1.png'
import penis from '../../../public/images/Shapes/Penis-1.png'
import lips from '../../../public/images/Shapes/lips-1.png'
import butterfly from '../../../public/images/Shapes/butterfly-1.png'
import cat from '../../../public/images/Shapes/cat-1.png'
import star from '../../../public/images/Shapes/star-1.png'
import like from '../../../public/images/Shapes/like-1.png'
import cone from '../../../public/images/Shapes/Ice-Cream-1.png'
import thunder from '../../../public/images/Shapes/thunder-1.png'
import triangle from '../../../public/images/Shapes/triangle-1.png'
import pear from '../../../public/images/Shapes/pear-1.png'
import hexagon from '../../../public/images/Shapes/hexagon-1.png'
import lhexagon from '../../../public/images/Shapes/LHexagon-1.png'
import trillion from '../../../public/images/Shapes/trillion-1.png'
import radiant from '../../../public/images/Shapes/radiant-1.png'
import cushionlong from '../../../public/images/Shapes/cushion-long-1.png'
import asscher from '../../../public/images/Shapes/asscher-1.png'
import Sqradiant from '../../../public/images/Shapes/sq-radiant-1.png'
import baguette from '../../../public/images/Shapes/baguette-1.png'
import tbaguette from '../../../public/images/Shapes/tbaguette-1.png'
import bullet from '../../../public/images/Shapes/bullet-1.png'
import halfmoon from '../../../public/images/Shapes/half-moon-1.png'
import cadillac from '../../../public/images/Shapes/cadillac-1.png'
import squirel from '../../../public/images/Shapes/squirel-1.png'
import teddy from '../../../public/images/Shapes/Teddy-1.png'
import tortoise from '../../../public/images/Shapes/tortoise-1.png'
import rocket from '../../../public/images/Shapes/rocket-1.png'
import cut from '../../../public/images/Shapes/cut-1.png'
import flower from '../../../public/images/Shapes/flower-1.png'
import { motion } from "framer-motion";

function Page() {

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
        },
    };

    const shapes = [
        { id: 1, img: round, alt: "round", title: "Round" },
        { id: 2, img: oval, alt: "oval", title: "Oval" },
        { id: 3, img: emerald, alt: "emerald", title: "Emerald" },
        { id: 4, img: radiant, alt: "radiant", title: "Radiant" },
        { id: 5, img: cushionlong, alt: "cushion-long", title: "Cushion Long" },
        { id: 6, img: pear, alt: "pear", title: "Pear" },
        { id: 7, img: marquies, alt: "marquies", title: "Marquies" },
        { id: 8, img: princess, alt: "princess", title: "Princess" },
        { id: 9, img: cushion, alt: "cushion", title: "Cushion" },
        { id: 10, img: heart, alt: "heart", title: "Heart" },
        { id: 11, img: asscher, alt: "asscher", title: "Asscher" },
        { id: 12, img: Sqradiant, alt: "Sqradiant", title: "Radiant Sq" },
    ]

    const sideStone = [
        { id: 13, img: baguette, alt: "baguette", title: "Baguette" },
        { id: 14, img: tbaguette, alt: "tbaguette", title: "T.Baguette" },
        { id: 15, img: bullet, alt: "bullet", title: "Bullet" },
        { id: 16, img: halfmoon, alt: "halfmoon", title: "Half Moon" },
        { id: 17, img: cadillac, alt: "cadillac", title: "Cadillac" },
        { id: 18, img: trillion, alt: "trillion", title: "Trillion" },
        { id: 19, img: triangle, alt: "triangle", title: "Triangle" },
        { id: 20, img: shield, alt: "shield", title: "shield" },
        { id: 21, img: kite, alt: "kite", title: "Kite" },
        { id: 22, img: hexagon, alt: "hexagon", title: "Hexagon" },
        { id: 23, img: lhexagon, alt: "lhexagon", title: "L Hexagon" },
        { id: 24, img: triangle2, alt: "triangle", title: "Triangle-2" }
    ]

    const exoticShapes = [
        { id: 25, img: star, alt: "star", title: "Star" },
        { id: 26, img: micky, alt: "micky", title: "Micky-Mouse" },
        { id: 27, img: cloud, alt: "cloud", title: "Cloud" },
        { id: 28, img: like, alt: "like", title: "Like" },
        { id: 29, img: buddha, alt: "buddha", title: "Buddha" },
        { id: 30, img: bat, alt: "bat", title: "Bat" },
        { id: 31, img: butterfly, alt: "butterfly", title: "Butterfly" },
        { id: 32, img: cat, alt: "cat", title: "Cat" },
        { id: 33, img: unicorn, alt: "unicorn", title: "Unicorn" },
        { id: 34, img: Dog, alt: "dog", title: "Dog" },
        { id: 35, img: Rabbit, alt: "rabbit", title: "Rabbit" },
        { id: 36, img: tail, alt: "tail", title: "Whale Tail" },
        { id: 37, img: thunder, alt: "thunder", title: "Thunder" },
        { id: 38, img: bone, alt: "bone", title: "Bone" },
        { id: 39, img: cone, alt: "cone", title: "Ice-Cream" },
        { id: 40, img: car, alt: "car", title: "Car" },
        { id: 41, img: penis, alt: "penis", title: "Penis" },
        { id: 42, img: lips, alt: "lips", title: "Lips" },
        { id: 43, img: squirel, alt: "squirel", title: "Squirel" },
        { id: 44, img: teddy, alt: "teddy", title: "Teddy" },
        { id: 45, img: rocket, alt: "rocket", title: "Rocket" },
        { id: 46, img: cut, alt: "cut", title: "Cut" },
        { id: 47, img: tortoise, alt: "tortoise", title: "Tortoise" },
        { id: 48, img: flower, alt: "flower", title: "Flower" }
    ]

    return (
        <div className="bg-black py-8 xl:pt-32 md:pt-32 pt-2 cursor-pointer">
            <div className="relative w-full h-[28vh] md:h-[90vh] xl:h-screen overflow-hidden xl:mt-0 md:mt-0 mt-14">
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="/images/about/Shapes.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className='pt-4'>
                <h2 className="text-white text-center font-bold font-oldstandardtt xl:text-4xl md:text-2xl text-md pb-6">
                    DIAMOND SHAPES WE OFFER!
                </h2>
                <h3 className="text-center text-white font-bold font-montserrat xl:text-3xl md:text-2xl text-md py-2 mb-4 mx-6 rounded">
                    BASIC SHAPES
                </h3>
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid place-items-center grid-cols-2 md:grid-cols-6 gap-y-6 px-4"
                >
                    {shapes.map((item) => (
                        <motion.div
                            variants={childVariant}
                            className="text-center"
                            key={item.id}
                        >
                            <Image src={item.img} alt={item.alt} className="bg-black mx-auto" />
                            <span className="inline-block text-white px-4 py-1 mt-2 text-sm font-montserrat font-medium">
                                {item.title}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
                <h3 className="text-white text-center font-bold font-montserrat xl:text-3xl md:text-2xl text-md py-2 mt-10 mb-4 mx-6 rounded">
                    SIDE STONE SHAPES
                </h3>
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid place-items-center grid-cols-2 md:grid-cols-6 gap-y-6 px-4"
                >
                    {sideStone.map((item) => (
                        <motion.div
                            variants={childVariant}
                            className="text-center"
                            key={item.id}
                        >
                            <Image src={item.img} alt={item.alt} className="bg-black mx-auto" />
                            <span className="inline-block text-white px-4 py-1 mt-2 text-sm font-montserrat font-medium">
                                {item.title}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
                <h3 className="text-white text-center font-bold font-montserrat xl:text-3xl md:text-2xl text-md py-2 mt-10 mb-4 mx-6 rounded">
                    EXOTIC SHAPES
                </h3>
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid place-items-center grid-cols-2 md:grid-cols-6 gap-y-6 px-4"
                >
                    {exoticShapes.map((item) => (
                        <motion.div
                            variants={childVariant}
                            className="text-center"
                            key={item.id}
                        >
                            <Image src={item.img} alt={item.alt} className="bg-black mx-auto" />
                            <span className="inline-block text-white px-4 py-1 mt-2 text-sm font-montserrat font-medium">
                                {item.title}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Page