import Image from 'next/image'
import React from 'react'

const LandingPageImage = () => {
  return (
    <section className='w-1/2 '>
        <div className='w-full h-[400px] relative'>

    <div>
<Image src={'/svg/landing page/landingpageimagecurve.svg'} alt='landing page image' fill/>

<div className=' w-[206px] h-[307px] absolute  left-[109px] top-[54px]'>
    <Image src={'/svg/landing page/shirt1.svg'} alt='shirt 1' className=''fill/>
</div>

<div className='absolute  left-[290px] top-[54px] w-[206px] h-[307px]'>
    <Image src={'/svg/landing page/shirt2.svg'} alt='shirt 1' className=''fill/>
</div>
<div className='absolute  left-[357px] top-[233px] w-[66px] h-[67px] z-10'>
    <Image src={'/svg/landing page/watch.svg'} alt='shirt 1' className=''fill/>
</div>

<div className='absolute  left-[195px] top-[264px] w-[107px] h-[107px]'>
    <Image src={'/svg/landing page/speaker.svg'} alt='shirt 1' className=''fill/>
</div>

<div className='absolute  left-[265px] top-[89px] w-[301px] h-[307px]'>
    <Image src={'/svg/landing page/chair.svg'} alt='shirt 1' className=''fill/>
</div>

<div className='absolute  left-[285px] top-[310px] w-[57px] h-[57px]'>
    <Image src={'/svg/landing page/headphone.svg'} alt='shirt 1' className=''fill/>
</div>
</div>
</div>

    </section>
  )
}

export default LandingPageImage