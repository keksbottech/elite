import React from 'react'
import Dropdown from '../drop down/Dropdown'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { SelectItem } from '../ui/select'

const UserAddressForm = () => {
  return (
         
    <div  className='w-full space-y-4 mt-5'>
    <div className='flex items-center space-x-3'>
    <div className='w-full space-y-3'>
    <Label> First name*</Label>
    <Input className='py-6 w-full' placeholder='Ex. John'/>
        </div>            
    
        <div className='w-full space-y-3'>
    <Label> Last name*</Label>
    <Input className='py-6 w-full' placeholder='Ex. Doe'/>
        </div>  
    </div>  

    <div>
    <Label> Company Name (Optional)</Label>
    <Input className='py-6 w-full' placeholder='Enter Company Name'/>
        </div>  
    
        <div>
    <Label> Country*</Label>
    <Dropdown placeholder={'Select Country'} className={'w-full'}>
        <SelectItem value='nigeria'>
            Nigeria
        </SelectItem>
        <SelectItem value='nigeria'>
            London
        </SelectItem>
    </Dropdown>
     </div>  

     
    <div>
    <Label> Select Address*</Label>
    <Input className='py-6 w-full' placeholder='Enter Street Address'/>
        </div>
        
        <div>
    <Label> City*</Label>
    <Dropdown placeholder={'Select City'} className={'w-full'}>
        <SelectItem value='nigeria'>
            Owerri
        </SelectItem>
        <SelectItem value='nigeria'>
            London
        </SelectItem>
    </Dropdown>
     </div>  

     <div>
    <Label> State*</Label>
    <Dropdown placeholder={'Select State'} className={'w-full'}>
        <SelectItem value='owerri'>
            Owerri
        </SelectItem>
        <SelectItem value='london'>
            London
        </SelectItem>
    </Dropdown>
     </div> 

     <div>
    <Label> Zip Code*</Label>
    <Input placeholder='Enter Zip Code'/>
        </div>

        <div>
    <Label> Phone*</Label>
    <Input placeholder='Enter Phone Number'/>
        </div>

        <div>
    <Label> Email*</Label>
    <Input placeholder='Enter Email Address'/>
        </div>
        </div>
  )
}

export default UserAddressForm