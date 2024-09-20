import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const PasswordManager = () => {
  return (
    <section className='space-y-4'>
        <div className='space-y-2'>
            <Label>New Password*</Label>
       <Input className='py-6' placeholder='Enter Password'/>
        </div>
        <div className='space-y-2'>
            <Label>Confirm New Password*</Label>
       <Input className='py-6' placeholder='Enter Confirm Password'/>
        </div>

        <Button>Update Password</Button>
    </section>
  )
}

export default PasswordManager