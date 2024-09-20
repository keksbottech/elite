import CheckboxForm from '@/components/checkbox form/CheckboxForm'
import { RadioGroupForm } from '@/components/radio input form/RadioInputForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const BusinessDetails = () => {
  return (
    <section className='flex items-center justify-center max-w-[800px] w-full flex-col space-y-5 border-[.5px] p-10 mt-10 rounded-lg'>
        <h2 className='font-bold text-2xl text-center'>Enter your business details</h2>
        <form className='space-y-5 w-full'>
            <p className='font-bold text-xl'>Contact information</p>
            <div className='space-y-2 w-full'>
                <Label className='font-bold'>Name*</Label>
                <Input className='py-6' placeholder='John Doe'/>
            </div>
            <div className='space-y-2 w-full'>
                <Label className='font-bold'>Business Phone*</Label>
                <Input className='py-6' placeholder=''/>
            </div>
            <CheckboxForm label='Receive texts to get updates on your account verification status. Message and data rates may apply'/>
            <p className='my-2 font-bold text-xl'>Business information</p>
            
            <div className='space-y-2 w-full'>
                <Label className='font-bold'>Business name*</Label>
                <Input className='py-6' placeholder='John Doe'/>
            </div>

            <div className='space-y-3'>
            <p className='font-bold'>Business type*</p>

                <RadioGroupForm label='Sole proprietorship (Not registered)'/>
                <RadioGroupForm label='Other'/>
            </div>

<div className='space-y-3'>
    <p>Have multiple locations? Use the address shown on official documents like national ID.</p>
            <div className='space-y-2 w-full'>
                <Label className='font-bold'>Street address*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <div className='space-y-2 w-full'>
                <Label className='font-bold'>Suite, unit, floor (optional)*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <div className='space-y-2 w-full'>
                <Label className='font-bold'>Zip code*</Label>
                <Input className='py-6' placeholder=''/>
            </div>
            <div className='space-y-2 w-full'>
                <Label className='font-bold'>City*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <div className='space-y-2 w-full'>
                <Label className='font-bold'>State*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <Button size={'lg'} className='w-full mt-10'>Create business account</Button>

            <p className='mt-10'>By creating an business account, you agree to <Link href='/conditions' className='text-primary'>Elite Business Accounts Terms and Conditions.</Link> You are creating a business account on behalf of the organisation named above and agree you have authority to bind that organisation. </p>
            </div>
        </form>
    </section>
  )
}

export default BusinessDetails