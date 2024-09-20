import OrderTransaction from '@/components/order transaction/OrderTransaction'
import ProductCartDetails from '@/components/product cart details/ProductCartDetails'
import { Button } from '@/components/ui/button'
import React from 'react'

type MyOrderPropTypes = {
    numOfOrders?: string
}
const MyOrder = ({numOfOrders}: MyOrderPropTypes) => {
  return (
    <section>
        <h2 className='font-bold text-xl'>Order (1)</h2>
        <OrderTransaction/>

<div className='mt-5 space-y-3'>
        <ProductCartDetails className='shadow-md rounded-lg'/>
        <ProductCartDetails className='shadow-md rounded-lg'/>
        </div>

        <div className='flex items-center space-x-3 mt-10'>
            <p className='bg-secondary border-[.5px] border-green-800 p-1 '>
Accepted
            </p>

            <p>Your Order has been Accepted</p>
        </div>

        <div className='flex items-center space-x-3 mt-10'>
            <Button>Track Order</Button>

            <Button variant={'outline'}>Invoice</Button>

            <p className='font-bold text-red-700 capitalize'>Clear shopping cart</p>
        </div>
    </section>
  )
}

export default MyOrder