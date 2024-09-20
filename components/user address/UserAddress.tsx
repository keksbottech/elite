import React from 'react'

type UserAddressPropTypes = {
    username?: string;
    address?: string;
    deleteOnclick?: () => void;
    editOnclick?: () => void;
    className?: string;
}

const UserAddress = ({username, className, address, deleteOnclick, editOnclick}: UserAddressPropTypes) => {

  return (
    <div className='flex items-center justify-between border-b-[.5px] pb-6'>
        <div className='space-y-2'>
            <p className='font-semibold'>Bessie Cooper</p>
            <p className='text-gray-500 text-sm'>No 4 Kings Royal Street Warri, Delta State Nigeria</p>
        </div>

        <div className='flex items-center space-x-3'>
            <p>Edit</p>
            <p className='text-red-500'>Delete</p>
        </div>
    </div>
  )
}

export default UserAddress