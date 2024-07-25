import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import footerData from '@/website json/footer.json'

const Footer = () => {
  return (
    <footer className='p-10 bg-primary text-accent'>
        <div className='flex items-center justify-between border-b-[1px] pb-10 border-[rgba(0,0,0/5)]'>
            <div>
                <h1 className='font-bold text-3xl'>Join our newsletter</h1>
                <p>{"we'll"} send you a nice letter once a week. No Spam.</p>
            </div>

            <form className='flex items-center space-x-3'>
                <Input placeholder='Enter your email'/>
                <Button className='bg-secondary text-black'>Subscribe</Button>
            </form>
        </div>

       
        <div className="container mx-auto flex justify-between pt-10  border-b-[1px] pb-10 border-[rgba(0,0,0/5)]">
        {footerData?.sections.map((section, index) => (
          <div key={index} className="">
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul>
              {section.links.map((link, index) => (
                <li key={index} className="mb-1">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      
        </div>

        <div className='text-right pt-10'>© 2024 Elite.com All rights reserved.</div>
    </footer>
  )
}

export default Footer