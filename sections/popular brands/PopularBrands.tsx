import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type PopularBrandsPropType = {
    className?: string
}

const PopularBrands = ({className}:PopularBrandsPropType) => {
  return (
    <section className={cn('flex flex-col items-center justify-center mb-10', className)}>
        <h1 className='font-bold text-2xl mb-5'>Our popular brands</h1>

<div className='relative w-[700px] h-[100px] bg-secondary'>
    <Image fill src={'/svg/popular brands/item1.svg'} alt='popular brand image'/>
</div>
    </section>
  )
}

export default PopularBrands