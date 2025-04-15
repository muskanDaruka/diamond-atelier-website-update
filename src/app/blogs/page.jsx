import React from 'react'
import Image from 'next/image'
import background from '../../../public/images/banner/blog-bg.png'
import diamond from'../../../public/images/banner/diamond-blog.png'
const page = () => {
    return (
        <div className='relative h-screen'>
            <div className="absolute inset-0 -z-10">
                <Image
                    src={background}
                    alt="background Image"
                    layout="fill"
                    objectFit="fill"
                    priority
                />
                <div className='relative md:pt-48 pt-24 xl:pt-48 '>
                    <h2 className='text-[#6b6d6d] text-center text-2xl font-montserrat font-medium'>At Diamond Atelier</h2>
                    <p className='text-[#6b6d6d] text-center text-6xl font-medium' style={{fontFamily:'Edwardian Script ITC'}}>artist shapes stones</p>
                    <Image
                        src={diamond}
                        alt='diamond'
                        className="object-contain mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default page