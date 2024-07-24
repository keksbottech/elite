import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react"
import Image from "next/image"
import { IconStarFilled } from "@tabler/icons-react"
// import { Switch } from "@/components/ui/switch"



type ProductCardPropTypes = {
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

export default function ProductCard({ className, footer, description, title, content,url ="",price, review, tag, subTitle, reviewStar, circleTags, reviewStyle, titleStyle }: ProductCardPropTypes) {


  return (
    <Card className={cn("w-[380px]", className)}>
      <CardHeader>
        <CardTitle className="">
            <div className="relative w-full h-[200px]">
            <Image src={url} alt={`${title} image`} fill/>
            </div>

            <div className="flex items-center justify-between text-sm">
            <p className="text-primary flex items-center justify-center">{tag}</p>
            <div className={cn("mt-5 flex items-center space-x-1  p-1 px-2 rounded-lg", reviewStyle)}>
            {reviewStar}
            <p className="text-accent" > {review}</p>
            </div>
            </div>


            <div className={cn("text-xl mt-5", titleStyle)}>
                {title}
            </div>
            <div className="mt-3 text-xl">
                {price}
            </div>
            </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid">
{subTitle}

<div>
    {circleTags}
</div>
      </CardContent>
      <CardFooter>
    {footer}
      </CardFooter>
    </Card>
  )
}
