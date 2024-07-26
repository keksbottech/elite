import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductDetailsDescription = () => {
  return (
    <div className='flex items-center justify-center flex-col my-20'>
        <div className='space-x-5'>
            <Link href={'/'}>Description</Link>
            <Link href={'/'}>Additional Information</Link>
            <Link href={'/'}>Reviews <span>(13)</span></Link>
        </div>

        <div className='flex items-center justify-between mt-10 px-20 '>
            <div className='flex items-center justify-between'>
            <div className='relative h-[300px] w-[100%]'>
                <Image src='/svg/product details/item2.svg' alt='product details' fill/>
            </div>
            <div>
<ul className='list-disc space-y-3 '>
    <li>An original and perfectly crafted headset. The Pampas combines a minimalist, functional design with a snug fit and more than 30 hours of wireless battery life.Designed for very long listening sessions, it offers a flexible and custom fit with a padded headband and perfectly angled earcups. </li>
    <li>
30 hour battery life, Integrated Bluetooth connection, 5.0 Bluetooth, Listening range up to 10 meters, Connectable to another set of headphones to share music, Foldable, A control button to skip a track, adjust the volume, or answer a call   </li>
<li>Details : 1 helmet, 1 USB cable included, 1 User manual</li>
   
<li>Weight : 260 g</li>

</ul>
</div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsDescription