import Swiper from '@/components/swiper/Swiper'
import React from 'react'
import testimonialData from '@/website json/testimonial.json'
import { CarouselItem } from '@/components/ui/carousel'
import TestimonialCard from '@/components/testimonial card/TestimonialCard'
const Testimonial = () => {
  return (
    <section className='pb-10 p-5 flex items-center flex-col justify-center'>
        <h1 className='font-bold text-2xl mb-5'>Testimonial</h1>
        <Swiper>
    {
        testimonialData?.map(testimonial=> <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 ">
            <TestimonialCard className='bg-[#F5F5F5] rounded-lg' name={testimonial.name} rating={testimonial.rating} url={testimonial.image} content={testimonial.content} occupation={testimonial.occupation}/>
        </CarouselItem>)
    }
        </Swiper>
    </section>
  )
}

export default Testimonial