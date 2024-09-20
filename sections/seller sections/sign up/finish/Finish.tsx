import CheckboxForm from '@/components/checkbox form/CheckboxForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconInfoCircle, IconInfoCircleFilled } from '@tabler/icons-react'
import React from 'react'

const Finish = () => {
  return (
    <section className='p-10 border-[.5px] space-y-4 max-w-[800px] w-full'>
        <h2 className='font-bold text-2xl'>Get verified</h2>
        <p className=''>Choose any one of the following options to get verified quicker</p>
        <p className='font-bold text-lg'>(1) Business credit card</p>

        <div className='space-y-3 w-full'>
            <div className='space-y-2'>
                <Label className='font-medium text-md'>Name on card*</Label>
                <Input className='py-6' placeholder='John Doe'/>
            </div>

            <div className='space-y-2'>
                <Label className='font-medium text-md'>Card number*</Label>
                <Input className='py-6' placeholder='John Doe'/>
            </div>

            <div className='flex items-center space-x-3 w-full'>
            <div className='space-y-2 w-full'>
                <Label className='font-medium text-md'>Expiration date*</Label>
                <Input className='py-6' placeholder='MM/YYYY'/>
            </div>

            <div className='space-y-2 w-full'>
                <Label className='font-medium text-md'>CVV*</Label>
                <Input className='py-6' placeholder='***'/>
            </div>
            </div>

            <div className='flex space-x-2'>
                <IconInfoCircleFilled className='text-primary'/>
                <p className=''>This payment method will be saved on your account</p>
            </div>

            <div className='flex items-center space-x-2'>
                <CheckboxForm label='Use my business address'/>
                <IconInfoCircle className='text-primary'/>
            </div>
        </div>

        <p className='font-bold'>(2) Tax ID, NIN, Passport or {"Driver's"} License</p>

        <div className='space-y-4'>
        <div className=' space-y-2'>
                <Label className='font-medium text-md'>Enter identification*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

<p className='font-bold'>(3) Invitation code</p>
            <div className=' space-y-2'>
                <Label className='font-medium text-md'>Invitation code*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

<p className='font-bold'>(4) Business website URL</p>
            <div className=' space-y-2'>
                <Label className='font-medium text-md'>Enter URL*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <Button size={'lg'} className='w-full'>Submit</Button>
        </div>
    </section>
  )
}

export default Finish