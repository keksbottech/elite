'use client'
import Link from 'next/link'
import React from 'react'
import shoppingCartUserRoutes from '@/website json/shoppingcartuserroutes.json'
import { usePathname } from 'next/navigation'

const ShoppingCartUserNavigation = () => {
    const pathname = usePathname();

    return (
        <aside className='flex flex-col w-[30%] space-y-2'>
            {
                shoppingCartUserRoutes?.map(route => (
                    <Link 
                        className={`p-5 ${pathname === route.route ? 'bg-secondary' : 'bg-white'} border-[.5px] capitalize rounded-md`} 
                        href={route.route} 
                        key={route.id}
                    >
                        {route.routename}
                    </Link>
                ))
            }
        </aside>
    )
}

export default ShoppingCartUserNavigation;
