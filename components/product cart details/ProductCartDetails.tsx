import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

type ProductCartDetailsPropTypes = {
    productImage?: string;
    productName?:string;
    productColor?: string;
    productSize?: string;
    productQty?: string;
    className?: string
}
const ProductCartDetails = ({productColor, productImage, productName, productQty,productSize, className}: ProductCartDetailsPropTypes) => {
  return (
    <div className={cn('flex items-center p-3', className)}>
                    <div className='relative w-[70px] mr-2 h-[70px]'>
                <Image src={'/svg/landing page/headphone.svg'} fill alt='headphone'/>
                </div>
                <div className='space-y-1'>
                    <p className='font-bold'>Crossed Blue Crop Top</p>
                    <div className='flex items-center text-gray-500 text-sm space-x-4'>
                        <p className=''>Color: Blue</p>
                        <p className=''>Size: XXL</p>
                        <p className=''>Qty: 2</p>
                    </div>
                </div>
                </div>
  )
}

export default ProductCartDetails