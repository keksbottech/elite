import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const VerifyEmailAddress = () => {
  return (
    <section>
        <h2 className='font-bold text-2xl'>Verify email address</h2>
        <p className='text-gray-500 mt-2'>To verify your email, {"we've"} sent a One Time Password (OTP) TO johndoe@gmail.com</p>
        <p className='text-primary'>(Change)</p>

        <form className='space-y-4 mt-7'>
            <div className='space-y-2'>
                <Label className='font-bold'>Enter OTP*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <Button size={'lg'} className='w-full'>Create your Amazon account</Button>
        </form>

        <p className='mt-10'>By creating an account, you agree to {"Elite's"} <Link  className='text-primary' href={'/conditions'}>Conditions of Use</Link> and <Link  className='text-primary' href={'/privacy-notice'}>Privacy Notice</Link></p>

        <p className='text-primary text-center mt-6'>Resend OTP</p>
    </section>
  )
}

export default VerifyEmailAddress