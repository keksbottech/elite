import Image from 'next/image'
import React from 'react'

const PopularBrands = () => {
  return (
    <section className='flex flex-col items-center justify-center mb-10'>
        <h1 className='font-bold text-2xl mb-5'>Our popular brands</h1>

<div className='relative w-[700px] h-[100px] bg-secondary'>
    <Image fill src={'/svg/popular brands/item1.svg'} alt='popular brand image'/>
</div>
    </section>
  )
}

export default PopularBrands