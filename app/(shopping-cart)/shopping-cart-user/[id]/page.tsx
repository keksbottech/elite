'use client'
import ManageAddress from '@/sections/manage address/ManageAddress'
import MyOrder from '@/sections/my order/MyOrder'
import PasswordManager from '@/sections/password manager/PasswordManager'
import PaymentMethod from '@/sections/payment method/PaymentMethod'
import PersonalInformation from '@/sections/personal information/PersonalInformation'
import TrackYourOrder from '@/sections/track your order/TrackYourOrder'
import { usePathname } from 'next/navigation'
import React from 'react'

const ShoppingCartUserIdPage = () => {
    const pathname = usePathname()
  return (
    <main className='w-[70%]'>
        {
            pathname === '/shopping-cart-user/personal-information'?   <PersonalInformation/> : pathname === '/shopping-cart-user/myorders'?      <MyOrder/> : pathname === '/shopping-cart-user/manage-address' ? <ManageAddress/>:pathname === '/shopping-cart-user/payment-method' ? <PaymentMethod/>:pathname === '/shopping-cart-user/password-manager' ? <PasswordManager/>: pathname === '/shopping-cart-user/track-your-order' ? <TrackYourOrder/>: ''
        }
      
   
    </main>
  )
}

export default ShoppingCartUserIdPage