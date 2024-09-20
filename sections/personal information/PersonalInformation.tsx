import UserAvatar from '@/components/avatar/Avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const PersonalInformation = () => {
  return (
    <section className=''>
        <UserAvatar imageUrl='/svg/personal info/user.svg'/>
        <div className='space-y-3'>
        <div className='w-full flex items-center space-x-4 mt-10'>
            <div className='space-y-3 w-full'>
                <Label>First Name*</Label>
                <Input className='py-6 w-full' placeholder='Jennifer'/>
            </div>
            <div className='space-y-3 w-full'>
                <Label>Last Name*</Label>
                <Input className='py-6 w-full' placeholder='Eduado'/>
            </div>
        </div>

        <div className='space-y-3 w-full'>
                <Label>Phone*</Label>
                <Input className='py-6 w-full' placeholder='+234801233455'/>
            </div>

            <div className='space-y-3 w-full'>
                <Label>Email*</Label>
                <Input className='py-6 w-full' placeholder='jennifereduado@gmail.com'/>
            </div>

            <Button className='mt-10'>Update Changes</Button>
        </div>
    </section>
  )
}

export default PersonalInformation