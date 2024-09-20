import React from 'react'
import anaylyticData from '@/website json/analyticcardsdata.json'
import CardComponent from '@/components/card/Card'
import { IconDevicesX, IconInfoCircle, IconInfoCircleFilled } from '@tabler/icons-react'
import Chart from '@/components/chart/Chart'
import UserAvatar from '@/components/avatar/Avatar'

const Analytics = () => {
  return (
    <section className='p-10'>
        <div className='flex items-center justify-between space-x-5'>
            {
                anaylyticData?.map(data => <CardComponent className='w-full' key={data.id} title={
                    <div className='flex items-center space-x-2'>
                     <p>{data.title}</p>
                     <IconInfoCircleFilled className='text-secondary'/>
                    </div>
                } content={`$${data.content}`} footer={data.footer}/>)
            }
        </div>

<div className='border-[.5px] p-7 shadow-md mt-10'>
    <div className='flex items-center space-x-2'>
        <p>Traffic</p>
        <IconInfoCircleFilled className='text-secondary'/>
    </div>
        <Chart/>
    </div>

<div className='flex justify-between mt-10'>
    <div className='border-[.5px] shadow-md p-7 w-[40%] rounded-lg'>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'> Top Customers</p>
            <IconInfoCircleFilled className='text-secondary'/>
        </div>

{[0,0,0,0,0].map((data, index) => <div key={index} className='flex items-center space-x-3 mt-5'>
            <UserAvatar imageUrl='/svg/personal info/user.svg' className='w-[40px] h-[40px]'/>

            <div>
                <p className='font-semibold'>Helena</p>
                <p>email@dkdjkdjkd.net</p>
            </div>
        </div> )

}
    </div>

    <div className='border-[.5px] shadow-md p-7 w-[40%] rounded-lg'>
    <div className='flex items-center space-x-2'>
            <p className='font-semibold'>Top Order</p>
            <IconInfoCircleFilled className='text-secondary'/>
        </div>

{
    [0,0,0,0,0].map((data, index) =>         <div key={index} className='flex items-center justify-between mt-5'>   
    <p>PN:101</p>
    
    <div className='flex items-center space-x-10'>
        <p>100</p>
        <p>+20% over the last month</p>
    </div>
    </div>)
}

    </div>
    </div>
    </section>
  )
}

export default Analytics