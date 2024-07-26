import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
import Image from "next/image"
import { IconStarFilled } from "@tabler/icons-react"
import Swiper from "@/components/swiper/Swiper"
import { CarouselItem } from "@/components/ui/carousel"

type ProductDetailsHeaderPropTypes = {
    className?:string;
    title?:ReactNode | string,
    description?: ReactNode | string,
    footer?: ReactNode | string,
    content?: ReactNode |string;
    url?: string;
    subTitle?:string;
    tag?: string;
    review?:string;
    price?:string;
    reviewStar?: string | ReactNode;
    titleStyle?:string;
    reviewStyle?:string;
    circleTags?: ReactNode;
}

const productImages = [
    {
        id:0,
        image:"/svg/product details/item1.svg"
    },
    {
        id:1,
        image:"/svg/product details/item2.svg"
    },
    {
        id:2,
        image:"/svg/product details/item3.svg"
    },
    {
        id:3,
        image:"/svg/product details/item4.svg"
    },
]

export default function ProductDetailsHeader({ className, footer, description, title, content,url ="",price, review, tag, subTitle, reviewStar, circleTags, reviewStyle, titleStyle }: ProductDetailsHeaderPropTypes) {


  return (
    <section className={cn("p-10 bg-[#F5F5F5]", className)}>
      <header>
        <div  className="flex items-center justify-between">
            <div className="w-[30%] px-5">
                <Swiper>
                    {
                        productImages?.map(image =>          <CarouselItem key={image.id}>
                            <div className="relative w-full h-[400px]">
                    <Image src={image.image} alt={`${title} image`} fill/>
                    </div>
                            </CarouselItem>)
                    }
           
                </Swiper>
    
            </div>


          <div className="w-[60%]">
            <div className="space-y-3 text-sm">
            <p className="text-primary font-bold">{tag}</p>
            <div className="flex items-center">
             <IconStarFilled className="text-orange-400" size={15}/>
             <IconStarFilled className="text-orange-400" size={15}/>
             <IconStarFilled className="text-orange-400" size={15}/>
             <IconStarFilled className="text-orange-400" size={15}/>
             <IconStarFilled className="text-orange-400" size={15}/>
            <p className="ml-2" > ({review}) reviews</p>
            </div>
            </div>


            <div className={cn("text-3xl mt-5 font-bold", titleStyle)}>
                {title}
            </div>
            <div className="mt-3 text-xl font-bold">
                {price}
            </div>

            <div className="text-gray-400">{description}</div>
            <div className="grid text-gray-400">
{subTitle}

<div>
    {circleTags}
</div>
      </div>
      <footer className="mt-5 flex items-center space-x-5">
    {footer}
      </footer>
            </div>
            </div>
   

      </header>
<div className="flex items-center">
{
 productImages?.map(image =>          
                            <div className="relative w-full h-[140px]">
                    <Image src={image.image} alt={`${title} image`} fill/>
                    </div>
                            
                   )}
</div>
    </section>
  )
}
