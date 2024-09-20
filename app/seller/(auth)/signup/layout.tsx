import SignupHeader from '@/sections/seller sections/sign up/sign up header/SignupHeader'
import React, { ReactNode } from 'react'

const SellerSignupLayout = ({children}: {children?:ReactNode}) => {
  return (
    <main>
        <SignupHeader/>
        {children}
    </main>
  )
}

export default SellerSignupLayout