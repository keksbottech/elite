import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

type CardComponentPropType = {
    title?:string | React.ReactNode;
    description?: string | React.ReactNode;
    content?: string | React.ReactNode;
    footer?: string | React.ReactNode;
    className?: string;

}
export default function CardComponent({title, content, footer,className,description}:CardComponentPropType) {
  return (
    <Card className={cn("w-[350px]",className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter>
       {footer}
      </CardFooter>
    </Card>
  )
}
