import { Separator } from "@/components/ui/separator"
import React from 'react'
import orderSummaryData from '@/website json/ordersummary.json'


  

const OrderSummary = () => {
  return (
    <div>
        <h2>Order Summary</h2>
        <Separator />

<div>
    <div>
    {orderSummaryData.map((item) => (
        <div key={item.id} className="flex justify-between py-2">
          <span className={`${item.isTotal ? 'font-bold' : ''}`}>{item.label}</span>
          <span className={`${item.isTotal ? 'font-bold' : ''}`}>{item.value}</span>
        </div>
      ))}
    </div>
    
</div>


</div>
  )
}

export default OrderSummary