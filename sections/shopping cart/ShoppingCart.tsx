import OrderSummary from '@/components/order summary/OrderSummary'
import ShoppingCartForm from '@/components/shopping cart form/ShoppingCartForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import LandingPageWebFeatures from '../landing page web features/LandingPageWebFeatures'
import PopularBrands from '../popular brands/PopularBrands'

const ShoppingCart = () => {
  return (
    <section className='p-10'>
        <div className='flex justify-between'>
        <ShoppingCartForm/>
        <OrderSummary/>
    </div>

    <form className='flex items-center space-x-3 mt-10'>
        <div className='flex items-center space-x-3'>
        <Input placeholder='Coupon Code'/>
        <Button>Apply Coupon</Button>
        </div>
        <p className='text-red-700 font-bold'>Clear Shopping Cart</p>
    </form>

<LandingPageWebFeatures className='mt-10'/>
<PopularBrands className='mt-10'/>
    </section>
  )
}

export default ShoppingCart