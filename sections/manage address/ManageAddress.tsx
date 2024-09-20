import Dropdown from '@/components/drop down/Dropdown'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectItem } from '@/components/ui/select'
import UserAddressForm from '@/components/user address form/UserAddressForm'
import UserAddress from '@/components/user address/UserAddress'
import React from 'react'

const ManageAddress = () => {
  return (
    <section>
        <div className='border-[1px] p-5 space-y-4 rounded-lg'>
    <UserAddress/>
    <UserAddress className=''/>
        </div>

        <div className='mt-10'>
            <h2 className='font-bold text-lg'>Add New Address</h2>

<UserAddressForm/>
<Button className='mt-5'>Add Address</Button>
              
  
        </div>
    </section>
  )
}

export default ManageAddress