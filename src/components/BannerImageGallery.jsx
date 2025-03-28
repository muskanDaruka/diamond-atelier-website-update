import { motion } from "framer-motion";
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

function BannerImageGallery() {
    return (
        <>
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
                                <p className="mt-1 text-xs xl:text-sm font-medium rounded-lg p-2 bg-[#efeeed] font-montserrat">{item.title}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default BannerImageGallery