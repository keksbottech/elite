import AccountCreation from '@/sections/seller sections/sign up/account creation/AccountCreation'
import BusinessDetails from '@/sections/seller sections/sign up/business details/BusinessDetails'
import Finish from '@/sections/seller sections/sign up/finish/Finish'
import Signup from '@/sections/seller sections/sign up/Signup'
import VerifyEmailAddress from '@/sections/seller sections/sign up/verify email/VerifyEmailAddress'
import React from 'react'

const SellerSignupID = ({params}:any) => {
  const {id} = params


  console.log(id)
  return (
    <main className='flex py-10 items-center justify-center'>
      {id === 'account-creation' ? <AccountCreation/> : id === 'business-details' ? <BusinessDetails/> : id === 'verify-email'? <VerifyEmailAddress/> : id === 'finish'? <Finish/>: ''}
    </main>
  )
}

export default SellerSignupID