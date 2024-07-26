'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useState } from "react"
import { Button } from "../ui/button"
  
  export default function PaginationForm() {
    const [isActive, setIsActive] = useState(false)

    
    return (
      <Pagination className="w-full">
        <PaginationContent className="w-full flex justify-between">
          <PaginationItem>
            <Button variant={'outline'} className="text-black border-black">
            <PaginationPrevious href="#" />
            </Button>
          </PaginationItem>
          <div className="flex items-center">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          </div>
          <PaginationItem className="bg-transparent">
            <Button variant={'outline'} className="text-black border-black">
            <PaginationNext href="#" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  