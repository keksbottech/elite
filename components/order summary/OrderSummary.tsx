import { Separator } from "@/components/ui/separator"
import React from 'react'
import { Button } from "../ui/button"

type OrderSummaryPropTypes = {
  buttonText?:string;
  orderSummaryData?: {
    id: string;
    isTotal?: boolean | undefined;
    label?: string | undefined;
    value?: string | undefined;
  }[] | undefined
}
  

const OrderSummary = ({buttonText, orderSummaryData}:OrderSummaryPropTypes) => {
  return (
    <div className="w-[50%] ">
        <h2>Order Summary</h2>
        <Separator className="mt-5" />

<div>
    <div>
    {orderSummaryData?.map((item) => (
        <div key={item.id} className="flex justify-between py-2">
          <span className={`${item.isTotal ? 'font-bold' : ''}`}>{item.label}</span>
          <span className={`${item.isTotal ? 'font-bold' : ''}`}>{item.value}</span>
        </div>
      ))}
    </div>
    <Separator className="mt-5" />
    <Button className="w-full py-6 mt-10">{buttonText}</Button>
</div>


</div>
  )
}

export default OrderSummary