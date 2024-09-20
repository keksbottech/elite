import { IconCheck } from '@tabler/icons-react'
import React from 'react'
import { Button } from '../ui/button'

type OrderTransactionPropTypes= {
    orderID?: string;
    paymentMethod?: string;
    transactionID?: string;
    estimatedDelivery?: string;
    invoice?: string
}
const OrderTransaction = ({orderID, paymentMethod, transactionID, estimatedDelivery, invoice} : OrderTransactionPropTypes) => {
  return (
    <div>


        <div className='flex items-center bg-secondary p-7 rounded-lg space-x-10 mt-10'>
<div className=''>
    <p className='text-sm'>Order ID </p>
    <p className='font-bold uppercase'>#SOFFJ0JFDD</p>
</div>

<div className=''>
    <p className='text-sm'>Payment Method </p>
    <p className='font-bold capitalize'>paypal</p>
</div>

<div className=''>
    <p className='text-sm'>Transaction ID </p>
    <p className='uppercase font-bold'>SOFFJ0JFDD</p>
</div>

<div className=''>
    <p className='text-sm'>Estimated Delivery Date </p>
    <p className='capitalize font-bold'>24 june, 2024</p>
</div>

<div className=''>
<Button>Download Invoice</Button>
</div>
        </div>
    </div>
  )
}

export default OrderTransaction