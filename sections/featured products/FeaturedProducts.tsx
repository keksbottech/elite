import React from 'react'
import featuredProductData from '@/website json/featuredproducts.json'
import ProductCard from '@/components/product card/ProductCard'
import { IconStarFilled } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'


const FeaturedProducts = () => {
  return (
    <section>
        <h1 className='font-bold text-2xl text-center'>Featured Products</h1>

<div className='flex items-center flex-wrap justify-center space-x-4 mt-5'>
        {
            featuredProductData?.map(featured =>
            <ProductCard reviewStyle='bg-black dark:bg-accent' url={featured.image} title={featured.title} className='mb-5' subTitle={featured.description} review={featured.rating} tag={featured.tag} price={`$${featured.price}`} reviewStar={<IconStarFilled size={15} className='text-orange-400'/>} 
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
                <Button variant={'outline'}>Buy now</Button>
            }/>)
        }
        </div>
    </section>
  )
}

export default FeaturedProducts
