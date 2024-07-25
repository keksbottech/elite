import React from 'react'
import featuredSellersData from '@/website json/featuredsellers.json'
import ProductCard from '@/components/product card/ProductCard'
import { Button } from '@/components/ui/button'
import Swiper from '@/components/swiper/Swiper'
import { CarouselItem } from '@/components/ui/carousel'


const FeaturedSellers = () => {
  return (
    <section className='pb-10 p-5 flex items-center flex-col justify-center'>
        <h1 className='text-center text-2xl font-bold mb-10'>Featured sellers</h1>


                <Swiper>
                {
                featuredSellersData?.map(featuredseller =>
                  <CarouselItem key={featuredseller.id} className="md:basis-1/2 lg:basis-1/3 ">
                   <ProductCard url={featuredseller.image} title={featuredseller.title} className='flex items-center bg-[#F5F5F5] flex-col justify-center' titleStyle='text-center' description={featuredseller.subtitle} footer={
                  <Button>Visit Store</Button>}/>
                  </CarouselItem>
                   )
            }
              </Swiper>

     
    </section>
  )
}

export default FeaturedSellers