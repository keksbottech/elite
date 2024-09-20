import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react"
import Image from "next/image"
  
  const products = [
    {
      id: "INV001",
      image: "/svg/featured products/headphone.svg",
      totalAmount: "$250.00",
      price:"100.99",
      quantity: 10,
      productName: 'Crossed Blue crop top',
      color:'blue',
      size:'xxl'
    },
    {
      id: "INV002",
      image: "/svg/featured products/headphone.svg",
      totalAmount: "$150.00",
      price:"100.99",
      quantity: 10,
      productName: 'Crossed Blue crop top',
      color:'blue',
      size:'xxl'
    },
    {
      id: "INV003",
     image: "/svg/featured products/headphone.svg",
      totalAmount: "$350.00",
      price:"100.99",
      quantity: 10,
      productName: 'Crossed Blue crop top',
      color:'blue',
      size:'xxl'
    },
    {
      id: "INV004",
      image: "/svg/featured products/headphone.svg",
      totalAmount: "$450.00",
      price:"100.99",
      quantity: 10,
      productName: 'Crossed Blue crop top',
      color:'blue',
      size:'xxl'
    },
  ]
  
  type TableFormPropType = {
    tableHeaderData?: [];
    tableContentData?: [];
    className?:string;
  }
  export default function TableForm({tableContentData, tableHeaderData,className}: TableFormPropType) {
    return (
      <Table className="w-[70%]">
        {/* <TableCaption>A list of your recent products.</TableCaption> */}
        <TableHeader className="bg-secondary">
          <TableRow>
            {tableHeaderData?.map(header =>   <TableHead  key={header.id}className="text-right">Subtotal</TableHead> )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableContentData?.map((content) => (
            <TableRow key={content.id}>
              <TableCell><IconX size={15}/></TableCell>
              <TableCell>{content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter className="w-full">
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  