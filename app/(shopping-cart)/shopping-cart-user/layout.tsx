import LandingPageWebFeatures from '@/sections/landing page web features/LandingPageWebFeatures'
import PopularBrands from '@/sections/popular brands/PopularBrands'
import ShoppingCartUserNavigation from '@/sections/shopping cart user navigation/ShoppingCartUserNavigation'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type ShoppingCartUserLayoutPropTypes = {
    children?: ReactNode
}

const ShoppingCartUserLayout = ({children}:ShoppingCartUserLayoutPropTypes) => {
    
    
  return (
    <main className='p-10'>
        <div className='flex justify-between space-x-10'>
   <ShoppingCartUserNavigation/>
        {children}       
        </div>
     
        <LandingPageWebFeatures className='my-10'/>
        <PopularBrands className='my-10'/>
    </main>
  )
}

export default ShoppingCartUserLayout