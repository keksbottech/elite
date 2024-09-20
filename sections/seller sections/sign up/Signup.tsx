import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


const Signup = () => {

  return (
    <section className='flex p-10 justify-between pb-[20rem]'>

            <div className='w-[50%] space-y-5'>
            <h2 className='font-bold text-3xl'>{"Let's "} create your free Elite Business account</h2>
            <p className='text-gray-500'>Enter the email {"you'd"} like to use for your business account</p>

            <div className='space-y-2'>
            <Label className='font-bold'>Email*</Label>
            <Input className='py-6' placeholder='Enter your Email Address'/>
            </div>

            <Button size={'lg'} className='w-full'>Get started</Button>

            <p>Already an Elite Business Customer? <Link className='text-primary' href={'/seller/sign-in'}>Sign in</Link></p>
        </div>

        <div className='w-[50%] relative'>
        <div  className='w-[250px] h-[250px]'>
            <Image src={'/svg/dot/dot1.svg'} alt='seller' fill/>
            </div>
            <div  className='relative w-[20px] h-[20px]'>
            <Image src={'/svg/dot/dot1.svg'} alt='seller' fill/>
            </div>
            <div  className='absolute w-[70px] top-0 h-[70px]'>
            <Image src={'/svg/dot/dot3.svg'} alt='seller' fill/>
            </div>
            <div  className='absolute top-0 right-0 w-[500px] h-[500px]'>
            <Image src={'/svg/seller landing page/seller.svg'} alt='seller' fill/>
            </div>
        </div>
    </section>
  )
}

export default Signup