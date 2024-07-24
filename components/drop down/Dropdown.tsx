import React, { ReactNode } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from '@/lib/utils';

  

const Dropdown = ({children,placeholder,className}: {children:ReactNode; placeholder:string; className:string}) => {
  return (
<Select>
  <SelectTrigger className={cn("w-[180px]", className)}>
    <SelectValue placeholder={placeholder} />
  </SelectTrigger>
  <SelectContent >
{children}
  </SelectContent>
</Select>

  )
}

export default Dropdown