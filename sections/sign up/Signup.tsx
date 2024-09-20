import UserAvatar from '@/components/avatar/Avatar'
import CheckboxForm from '@/components/checkbox form/CheckboxForm'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconBrandGoogle } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <section className='flex justify-between p-10 space-x-10'>
        <div className='w-[60%]'>
            <h2 className='font-bold text-2xl'>Sign up</h2>
            <p className='my-4'>Fill in your information below or register with your social account</p>

            <div className='space-y-4'>
                <div className='space-y-2'>
                    <Label className='font-semibold text-md'>Name*</Label>
                    <Input className='py-6' placeholder='First and last name'/>
                </div>
                <div className='space-y-2'>
                    <Label className='font-semibold text-md'>Email*</Label>
                    <Input className='py-6' placeholder='Enter Email Address'/>
                </div>
                <div className='space-y-2'>
                    <Label className='font-semibold text-md'>Password*</Label>
                    <Input className='py-6' placeholder='At least 6 characters'/>
                </div>

                <div className='space-y-2'>
                    <CheckboxForm label={
                        <p>
                            Agree with <Link href={'/terms-&-condition'}>Terms & Conditions</Link> and <Link href={'/privacy-policy'}>Privacy Policy</Link>
                        </p>
                    }/>
                </div>

                <Button className='w-full py-6' >Sign up</Button>

<div className='flex items-center space-x-5'>
                <div className='bg-black w-[50%] h-[1px]'></div>
                <p>or</p>
                <div  className='bg-black w-[50%] h-[1px]'></div>
</div>
                <Button className='w-full py-6' variant={'outline'}>
                    <IconBrandGoogle/>
                   <p>Sign up with Google </p>
                   </Button>
            </div>
        </div>

        <div className='bg-gray-100 rounded-lg w-[40%] p-10 flex items-center flex-col justify-between'>
            <blockquote className='text-center text-xl'>
            "Easy website, detailed descriptions, and beautiful packaging - it felt like a gift! Exceeded expectations - unique finds, presented with care.  Supporting artists, loving it!  Highly recommend!"
            </blockquote>

            <div className='flex items-center justify-between w-full'>
                <div className='space-y-2'>
                    <p className='text-primary text-lg font-bold'>Regina Miles</p>
                    <p className='text-sm'>Designer</p>
                </div>

                <UserAvatar imageUrl='/svg/personal info/user.svg' username='OC' className='w-[100px] h-[100px]'/>
            </div>
        </div>
    </section>
  )
}

export default Signup