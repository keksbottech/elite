import React from 'react'
import featuredSellersData from '@/website json/featuredsellers.json'
import ProductCard from '@/components/product card/ProductCard'
import { Button } from '@/components/ui/button'


const FeaturedSellers = () => {
  return (
    <section className='pb-10 p-5'>
        <h1 className='text-center text-2xl font-bold'>Featured sellers</h1>

        <div className='flex items-center overflow-x-scroll snap-x snap-mandatory mt-5'>
            <div className=' flex items-center space-x-5'>
            {
                featuredSellersData?.map(featuredseller => <ProductCard url={featuredseller.image} title={featuredseller.title} className='flex items-center bg-[#F5F5F5] flex-col justify-center' titleStyle='text-center' description={featuredseller.subtitle} footer={
                    <Button>Visit Store</Button>
                }/>)
            }
        </div>
        </div>
    </section>
  )
}

export default FeaturedSellers