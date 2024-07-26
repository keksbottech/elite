import React from 'react'
import ProductDetailsHeader from '../product details header/ProductDetailsHeader'
import ProductDetailsDescription from '../product details description/ProductDetailsDescription'
import FeaturedProducts from '../featured products/FeaturedProducts'
import PopularBrands from '../popular brands/PopularBrands'
import { Button } from '@/components/ui/button'
import { IconExplicit, IconShoppingBag, IconStarFilled } from '@tabler/icons-react'
import { HeartIcon, HeartOff, ShoppingBasket } from 'lucide-react'

const ProductDetails = () => {
  return (
    <section className='p-5'>
                    <ProductDetailsHeader reviewStyle='bg-black dark:bg-accent' url={"/svg/featured products/headphone.svg"} title={"ARTIX CL750 On-Ear Headphones Wired with Mic — Noise Isolating Plug in Headphones"} className='mb-5' subTitle={"These on-ear headphones deliver rich sound with noise isolation, perfect for focused listening."} review={"5"} tag={"Game accessory"} price={`$21.99`} reviewStar={<IconStarFilled size={15} className='text-orange-400'/>} 
            circleTags={
                <div className='flex items-center space-x-2 mt-5'>
<div className='w-[15px] h-[15px] rounded-full bg-black'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-gray-500'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-gray-300'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-blue-300'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-black'> 
    
</div>
                </div>
            }
            footer={
                <>
                <Button variant={'outline'}>Buy now</Button>
                <div className='flex items-center space-x-3'>
                    <HeartIcon/>
                    <IconShoppingBag/>
                    <IconExplicit/>
                </div>
                </>
            }/>

        <ProductDetailsDescription/>
        <FeaturedProducts/>
        <PopularBrands/>
    </section>
  )
}

export default ProductDetails