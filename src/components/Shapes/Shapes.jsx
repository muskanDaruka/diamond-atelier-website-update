import React from 'react'

function Shapes() {
    const shapes = [
        {id:1, img:'', alt:"round" },
        {id:2, img:'', alt:"round" },
        {id:3, img:'', alt:"round" },
        {id:4, img:'', alt:"round" },
    ]
    
  return (
    <div>
        <h2 className='font-bold font-montserrat text-center xl:text-4xl md:text-2xl text-md pb-4'>DIAMOND SHAPES WE OFFER!</h2>
        <div>
            {shapes.map((item,id)=>(
                <Image src={item.img} alt={item.alt} className="rounded-md"/>
            ))}
        </div>
    </div>
  )
}

export default Shapes