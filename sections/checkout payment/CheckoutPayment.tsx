import React from 'react'
import paymentMethodData from '@/website json/paymentmethods.json'
import { RadioGroupForm } from '@/components/radio input form/RadioInputForm'
import { IconBrandGoogle, IconBrandMastercard, IconBrandPaypalFilled, IconBrandVisa, IconCamera } from '@tabler/icons-react'
import OrderSummary from '@/components/order summary/OrderSummary'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import PopularBrands from '../popular brands/PopularBrands'
import LandingPageWebFeatures from '../landing page web features/LandingPageWebFeatures'
import orderSummaryData from '@/website json/ordersummary.json'
import UserPaymentMethodForm from '@/components/user payemnt method form/UserPaymentMethodForm'

const CheckoutPayment = () => {
  return (
    <section className='p-5'>
        <h2 className='font-bold'>Select payment method</h2>

        <div className='flex justify-between space-x-10 mt-5'>

             <UserPaymentMethodForm className='w-[70%]'/> 
            <OrderSummary orderSummaryData={orderSummaryData} buttonText='Confirm payment'/>
        </div>
<LandingPageWebFeatures className='mt-10'/>

<PopularBrands className='mt-10'/>
      
    </section>
  )
}

export default CheckoutPayment