import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandYoutube, IconMail, IconPhone, IconX } from '@tabler/icons-react'
import React from 'react'

const SubHeaderAlert = () => {
  return (
    <header className='flex items-center justify-between p-5 bg-primary text-white'>
        <div className="flex items-center space-x-2">
<div className='flex items-center space-x-2'>
    <IconPhone/>
<p>(255) 55-0118</p>
</div>        

<div className='flex items-center space-x-2'>
    <IconMail/>
    <p>contactus@gmail.com</p>
</div>
        </div>
        <div className="">
            <p>Sign up and Get a 25% Discount on your first purchase!</p>
        </div>
        <div className="flex items-center space-x-2">
            <p>Follow us:</p>
            <div className='flex items-center space-x-3'>
                <IconBrandInstagram/>
                <IconBrandYoutube/>
                <IconBrandFacebook/>
                <IconBrandX/>
                
            </div>
        </div>
    </header>
  )
}

export default SubHeaderAlert