'use client'
import React from 'react'
import sellerNavRoutes from '@/website json/sellermenuroutes.json'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconUserCircle } from '@tabler/icons-react'


const Header = () => {
    const pathname = usePathname()


  return (
    <div className='flex items-center justify-between p-5 border-b-[.5px]'>
        <p>Elite</p>

        <nav className='space-x-7'>
            {
sellerNavRoutes?.map(route => <Link href={route.route} className={`${pathname === route.route ? 'text-primary' : ''}`} key={route.id}>{route.name}</Link>)
            }
        </nav>

        <IconUserCircle/>
    </div>
  )
}

export default Header