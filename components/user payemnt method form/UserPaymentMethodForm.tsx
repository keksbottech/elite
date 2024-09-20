import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import paymentData from  '@/website json/paymentmethods.json'
import { RadioGroupForm } from '@/components/radio input form/RadioInputForm'
import { IconBrandGoogle, IconBrandMastercard, IconBrandPaypalFilled, IconBrandVisa, IconCamera } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

type UserPaymentMethodFormPropTypes ={
    className?: string;
}


const UserPaymentMethodForm = ({className}: UserPaymentMethodFormPropTypes) => {
  return (
    <div className={cn('', className)}>
    {
        paymentData?.map(payment => {

            return (
                <RadioGroupForm className='border-[.5px] border-black p-5 mb-5 w-full rounded-lg' key={payment.id} label={
                    <div className='flex items-center space-x-3'>
                        {payment.icon === 'paypal'?<IconBrandPaypalFilled/> : payment.icon === 'visa' ? <IconBrandVisa/> : payment.icon ==='google' ? <IconBrandGoogle/> : payment.icon === 'camera' ? <IconCamera/> : payment.icon === 'atm' ? <IconBrandMastercard/> : ''}
                        <p className='capitalize'>{payment.paymentName}</p>
                    </div>
                }/>
            )
        })
    }

    <div className='space-y-4'>

          <div>
                    <Label>Card Holder Name*</Label>
                    <Input className='py-6 w-full mt-2' placeholder='Ex. John Doe'/>
                </div>

                <div>
                    <Label>Card Number*</Label>
                    <Input className='py-6 w-full mt-2' placeholder='4112 4758 0908 3572'/>
                </div>

                <div className='flex items-center w-full space-x-5'>
                    <div className='w-full'>
                    <Label>Expiry Date*</Label>
                    <Input className='py-6 w-full mt-2' placeholder='2/30'/>

                    </div>

<div className='w-full'>
                    <Label>CVV*</Label>
                    <Input className='py-6 w-full mt-2' placeholder='291'/>

                    
                </div>
                </div>

                <div>
                    <Label>Save card for future payments</Label>
                </div>

                <Button>Add Card</Button>
            </div>
        </div>
    
  )
}

export default UserPaymentMethodForm