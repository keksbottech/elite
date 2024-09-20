import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const TrackYourOrder = () => {
  return (
    <section>
        <h2 className='font-bold text-lg'>Track Your Order</h2>
        <p className='mt-7'>To track your order, please enter your Order ID in the box below and press the “Track Order” button. This was given to you in your receipt and in the confirmation email you should have received</p>

        <div className='space-y-4 mt-5'>
        <div className='space-y-2'>
            <Label className='font-bold'>Order ID*</Label>
       <Input className='py-6' placeholder='Enter your Order ID'/>
        </div>
        <div className='space-y-2'>
            <Label className='font-bold'>Billing Email*</Label>
       <Input className='py-6' placeholder='Enter Email Address'/>
        </div>

        <Button>Update Password</Button>
    </div>
    </section>
  )
}

export default TrackYourOrder