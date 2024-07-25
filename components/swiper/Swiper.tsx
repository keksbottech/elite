import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../product card/ProductCard"
import { Button } from "../ui/button"


type SwiperPropTypes = {
children?:React.ReactNode
}

export default function Swiper({children}:SwiperPropTypes) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  max-w-[1200px]"
    >
      <CarouselContent >
{children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
