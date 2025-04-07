import Image from 'next/image'
import React from 'react'
import round from '../../../public/images/Shapes/round.png'
import oval from '../../../public/images/Shapes/oval.png'
import marquies from '../../../public/images/Shapes/marquies.png'
import cushion from '../../../public/images/Shapes/cushion.png'
import square from '../../../public/images/Shapes/square.png'
import princess from '../../../public/images/Shapes/princess.png'
import emerald from '../../../public/images/Shapes/emerald.png'
import heart from '../../../public/images/Shapes/heart.png'
import cloud from '../../../public/images/Shapes/cloud.png'
import leaf from '../../../public/images/Shapes/three-leaf.png'
import elephant from '../../../public/images/Shapes/elephant.png'
import tortoise from '../../../public/images/Shapes/tortoise.png'
import micky from '../../../public/images/Shapes/mickky.png'
import squirel from '../../../public/images/Shapes/squirel.png'
import fish from '../../../public/images/Shapes/fish.png'
import cone from '../../../public/images/Shapes/cone.png'
import fin from '../../../public/images/Shapes/fin.png'
import octagon from '../../../public/images/Shapes/octagon.png'
import fire from '../../../public/images/Shapes/fire.png'
import thunder from '../../../public/images/Shapes/thunder.png'
import human from '../../../public/images/Shapes/human.png'
import v from '../../../public/images/Shapes/v.png'
import stone from '../../../public/images/Shapes/stone.png'
import flower from '../../../public/images/Shapes/flower.png'
import tree from '../../../public/images/Shapes/christmas-tree.png'
import cross from '../../../public/images/Shapes/cross.png'
import stone1 from '../../../public/images/Shapes/stone2.png'
import butterfly from '../../../public/images/Shapes/ButterFly.jpg'
import cat from '../../../public/images/Shapes/cat.png'
import star from '../../../public/images/Shapes/star.png'
import like from '../../../public/images/Shapes/like.png'
import stone3 from '../../../public/images/Shapes/stone3.png'
import design from '../../../public/images/Shapes/design.png'
import design2 from '../../../public/images/Shapes/design2.png'
import horse from '../../../public/images/Shapes/horse.png'
import gun from '../../../public/images/Shapes/gun.png'
import tempared from '../../../public/images/Shapes/tempared.png'
import bone from '../../../public/images/Shapes/bone.jpg'
import bat from '../../../public/images/Shapes/bat.jpg'
import dog from '../../../public/images/Shapes/dog.jpg'
import rabbit from '../../../public/images/Shapes/rabbit.jpg'

function Page() {
    const shapes = [
        { id: 1, img: round, alt: "round", title: "Round" },
        { id: 2, img: oval, alt: "oval", title: "Oval" },
        { id: 3, img: marquies, alt: "marquies", title: "Marquies" },
        { id: 4, img: cushion, alt: "cushion", title: "Cushion" },
        { id: 5, img: rabbit, alt: "rabbit", title: "Rabbit" },
        { id: 6, img: princess, alt: "princess", title: "Princess" },
        { id: 7, img: emerald, alt: "emerald", title: "Emerald" },
        { id: 8, img: heart, alt: "heart", title: "Heart" },
        { id: 9, img: cloud, alt: "cloud", title: "Cloud" },
        { id: 10, img: dog, alt: "dog", title: "Dog" },
        { id: 11, img: square, alt: "square", title: "Square" },
        { id: 12, img: bat, alt: "bat", title: "Bat" },
        { id: 13, img: leaf, alt: "leaf", title: "Leaf" },
        { id: 14, img: elephant, alt: "elephant", title: "Elephant" },
        { id: 15, img: tortoise, alt: "tortoise", title: "Tortoise" },
        { id: 16, img: micky, alt: "micky", title: "Micky-Mouse" },
        { id: 17, img: squirel, alt: "squirel", title: "Squirel" },
        { id: 18, img: fish, alt: "fish", title: "Fish" },
        { id: 19, img: cone, alt: "cone", title: "Cone" },
        { id: 20, img: fin, alt: "fin", title: "Whale Tail" },
        { id: 21, img: octagon, alt: "octagon", title: "Octagon" },
        { id: 22, img: thunder, alt: "thunder", title: "Thunder" },
        { id: 23, img: human, alt: "human", title: "Human" },
        { id: 24, img: fire, alt: "fire", title: "Fire" },
        { id: 25, img: v, alt: "v", title: "V-shape" },
        { id: 26, img: stone, alt: "stone", title: "Stone" },
        { id: 27, img: flower, alt: "flower", title: "Flower" },
        { id: 28, img: tree, alt: "tree", title: "Christmas Tree" },
        { id: 29, img: cross, alt: "cross", title: "Cross" },
        { id: 30, img: stone1, alt: "stone1", title: "Stone" },
        { id: 31, img: cat, alt: "cat", title: "Cat" },
        { id: 32, img: butterfly, alt: "butterfly", title: "Butterfly" },
        { id: 33, img: like, alt: "like", title: "Like" },
        { id: 34, img: star, alt: "star", title: "Star" },
        { id: 35, img: stone3, alt: "stone3", title: "Stone" },
        { id: 36, img: design, alt: "design", title: "Design" },
        { id: 37, img: horse, alt: "horse", title: "Horse" },
        { id: 38, img: design2, alt: "design2", title: "Design" },
        { id: 39, img: gun, alt: "gun", title: "Gun" },
        { id: 40, img: tempared, alt: "tempared", title: "Tempared" }
    ]

    return (
        <div className='xl:pt-48 md:pt-18 pt-8 pb-8'>
            <h2 className='font-bold font-montserrat text-center xl:text-4xl md:text-2xl text-md pb-4'>DIAMOND SHAPES WE OFFER!</h2>
            <div className='place-items-center grid xl:grid-cols-8 md:grid-cols-6 grid-cols-3 m-2'>
                {shapes.map((item) => (
                    <div className='relative' key={item.id}>
                        <Image src={item.img} alt={item.alt} className="rounded-4xl m-4 border border-gray-200" />
                        <span className='absolute top-[185px] left-1/2 transform -translate-x-1/2 bg-white p-1 border border-gray-200'>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page