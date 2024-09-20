import { Button } from '@/components/ui/button'
import { IconCheck } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import LandingPageWebFeatures from '../landing page web features/LandingPageWebFeatures'
import PopularBrands from '../popular brands/PopularBrands'
import OrderTransaction from '@/components/order transaction/OrderTransaction'
import ProductCartDetails from '@/components/product cart details/ProductCartDetails'



const OrderComplete = () => {
  return (
    <section className='flex p-10 flex-col items-center justify-center'>
            <div className='flex space-y-2 items-center justify-center flex-col'>
            <div className='bg-secondary w-[70px] h-[70px] flex items-center justify-center rounded-full'> 
        <IconCheck className='' size={35}/>
        </div>
        <h3 className='font-bold text-lg'>Your order is completed!</h3>
        <p className='text-gray-500 text-sm'>Thank you. Your order has been received</p>
        </div>
        <OrderTransaction/>
        <div className='mt-10 max-w-[900px] w-full border-[.5px] p-7 rounded-lg'>
            <h2 className='border-bottom border-b-[.5px] pb-3'>Order Details</h2>
            <div className='flex items-center justify-between font-bold py-4'>
                <p className=''>Products</p>
                <p className=''>Sub total</p>
            </div>

            <div className='flex items-center justify-between border-bottom border-b-[.5px] pb-5'>
                <ProductCartDetails/>

                <p className=''>$60</p>
            </div>

            <div className='mt-10 space-y-4'>
                <div className='flex items-center justify-between'>
                <p className=''>Shipping</p>
                <p className=''>$00.00</p>
                </div>

                <div className='flex items-center justify-between'>
                <p className=''>Taxes</p>
                <p className=''>$00.00</p>
                </div>

                <div className='flex border-bottom border-b-[.5px] items-center justify-between pb-3'>
                <p className=''>Coupon Discount</p>
                <p className=''>-$50.00</p>
                </div>


                <div className='flex items-center justify-between'>
                <p className='font-bold'>Total</p>
                <p className=''>$150.00</p>
                </div>
            </div>
        </div>

        <PopularBrands className='mt-10'/>
        <LandingPageWebFeatures className='my-10'/>
        
    </section>
  )
}

export default OrderComplete