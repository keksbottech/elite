import { cn } from '@/lib/utils';
import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image'
import React from 'react'

type TestimonialCardPropTypes = {
    url?: string;
    content?: string;
    name?:string;
    occupation?:string;
    className?:string;
    rating?:string | number
}

const TestimonialCard = ({url = '', content, name,occupation, className, rating}: TestimonialCardPropTypes) => {
  return (
    <div className={cn('flex items-center space-x-4',className)}>
        <div className='relative w-[400px] h-[250px]'>
            <Image src={url} alt={`${url} image`} fill/>
        </div>

        <div className=' space-y-2'>
        <div className='flex items-center'>
            {
                new Array(rating).fill('0').map((star, index) => <IconStarFilled key={index} size={18} className='text-orange-400'/>)
            }
            </div>
            <p className='text-sm'>{content}</p>
            <p className='font-bold '>{name}</p>
            <p className='text-primary text-sm'>{occupation}</p>
            </div>
    </div>
  )
}

export default TestimonialCard