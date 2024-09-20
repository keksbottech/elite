"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils";
import { ReactNode } from "react";


type CheckboxFormPropTypes = {
    label?: string | ReactNode;
    id?: string;
    className?: string;
}

export default function CheckboxForm({label, id, className}: CheckboxFormPropTypes) {


  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox id={id} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}
