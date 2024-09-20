import React from 'react'
import Header from '../header/Header'
import LandingPageWebFeatures from '@/sections/landing page web features/LandingPageWebFeatures'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <section className=''>
        <Header/>

<div className='flex items-center justify-center flex-col space-y-4 mt-10'>
    <p>Welcome Back, Susan!</p>
    <h2 className='font-bold text-3xl'>Thrive on elite: Your perfomance hub awaits</h2>

    <p className='bg-primary text-accent p-3'>This week your top prodict generated impressive sales!</p>
</div>

<LandingPageWebFeatures className='my-20'/>

<div className='flex items-center justify-center flex-col space-y-4'>
    <h2 className='text-primary text-3xl font-semibold'>Ready to take action?</h2>

    <p className='font-semibold'>Dive into your dashboard and unlock your full potential on Elite!</p>

    <p>We're here to support you. If you have any questions, don't hesitate to reach out to our dedicated seller support team.</p>

    <Button className='bg-secondary text-black'>Happy Selling!</Button>

    <p className='text-primary'>The Elite Team</p>
</div>

<div className='flex items-center justify-between bg-secondary p-10 my-10'>
    <div className='flex items-center bg-primary p-5 text-accent space-x-2 uppercase'>
        <p>$4949949</p>
        <p>Total profit</p>
    </div>

    <div className='flex items-center bg-primary p-5 text-accent space-x-2 uppercase'>
        <p>2450+</p>
        <p>Total sales</p>
    </div>

    <div className='flex items-center bg-primary p-5 text-accent space-x-2 uppercase'>
        <p>75%</p>
        <p>conversion rate</p>
    </div>
</div>
    </section>
  )
}

export default Home