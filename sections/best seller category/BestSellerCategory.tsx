import ProductCard from '@/components/product card/ProductCard'
import React from 'react'
import bestsellerData from '@/website json/bestseller.json'
import { Button } from '@/components/ui/button'

const BestSellerCategory = () => {
  return (
    <section className='flex justify-center flex-col p-5'>
<h1 className='text-center font-bold text-2xl mb-5'>Best Seller Catgeory</h1>
<div className='flex items-center space-x-5 justify-between'>
{
    bestsellerData?.map(bestseller => <ProductCard key={bestseller.id} subTitle={bestseller.description} title={bestseller.title} url={bestseller.image} footer={
    <Button>Explore</Button>} /> )
}
</div>
    </section>
  )
}

export default BestSellerCategory