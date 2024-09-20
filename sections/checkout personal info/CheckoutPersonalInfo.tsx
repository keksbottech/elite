import Dropdown from '@/components/drop down/Dropdown'
import OrderSummary from '@/components/order summary/OrderSummary'
import { RadioGroupForm } from '@/components/radio input form/RadioInputForm'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectItem } from '@radix-ui/react-select'
import React from 'react'
import OrderSummaryData from '@/website json/ordersummary.json'
import PopularBrands from '../popular brands/PopularBrands'
import LandingPageWebFeatures from '../landing page web features/LandingPageWebFeatures'
import UserAddressForm from '@/components/user address form/UserAddressForm'

const deliveryAddress = [
    {
        id: '0',
        label:'Same as shipping address'
    },
    {
        id:'1',
        label: 'Use a different billing address'
    }
]
const CheckoutPersonalInfo = () => {
  return (
    <section className='p-10'>
        <h2 className='font-bold'>Billing Details</h2>
        <div className='flex justify-between space-x-10 mt-5'>
        
        <div  className='w-[70%] space-y-4'>
       <UserAddressForm/>
        </div>
        <OrderSummary orderSummaryData={OrderSummaryData} buttonText='Continue to payment'/>
        </div>
<LandingPageWebFeatures className='mt-10'/>
        <PopularBrands className='mt-10'/>
    </section>
  )
}

export default CheckoutPersonalInfo