import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const AccountCreation = () => {
  

  
  return (
    <section className='flex items-center justify-center max-w-[800px] w-full flex-col space-y-5 border-[.5px] p-10 mt-10 rounded-lg'>
        <h2 className='font-bold text-2xl text-center'>Enter your full name and choose your business password</h2>
        <form className='space-y-5 w-full'>
            <div className='space-y-2 w-full'>
                <Label>Name*</Label>
                <Input className='py-6' placeholder='First and last name'/>
            </div>
            <div className='space-y-2 w-full'>
                <Label>Email*</Label>
                <Input className='py-6' placeholder='Enter Email Address'/>
            </div>
            <div className='space-y-2 w-full'>
                <Label>Password*</Label>
                <Input className='py-6' placeholder='Atleast 6 characters'/>
            </div>
            <div className='space-y-2 w-full'>
                <Label>Re-enter password*</Label>
                <Input className='py-6' placeholder=''/>
            </div>

            <Button size={'lg'} className='w-full'>Next step</Button>

            <p>By creating an account, you agree to {"Elite's"} <Link className='text-primary' href={'/conditions'}>Conditions of User</Link> and <Link className='text-primary' href={'/privacy-nottice'}>Privacy Notice</Link> </p>
        </form>
    </section>
  )
}

export default AccountCreation