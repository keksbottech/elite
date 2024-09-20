'use client'
import React from 'react'
import sellerRoute from '@/website json/sellersignupprocess.json'
import { usePathname } from 'next/navigation'

const SignupHeader = () => {
    const pathname = usePathname()

    console.log(pathname)
  return (
    <header className='flex items-center p-7 justify-end bg-[rgba(0,0,0,.8)] text-accent space-x-6'>
    {
        sellerRoute?.map(route =>  <div className='flex items-center space-x-3' key={route.id}>
            <p className={`${pathname === route.route ? 'bg-secondary' : 'border-secondary border-[1px] text-secondary'} w-[30px] h-[30px] flex items-center justify-center rounded-full text-black`}>{route.id + 1}</p>
            <p>{route.name}</p>
        </div>)
    }
    
    </header>
  )
}

export default SignupHeader