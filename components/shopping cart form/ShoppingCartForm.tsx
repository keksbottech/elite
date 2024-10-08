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
  
  export default function ShoppingCartForm() {
    return (
      <Table className="w-[70%]">
        {/* <TableCaption>A list of your recent products.</TableCaption> */}
        <TableHeader className="bg-secondary">
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="w-[200px]">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell><IconX size={15}/></TableCell>
              <TableCell className="font-medium flex items-center w-[400px]">
                <div className="w-[150px] h-[150px] relative">
            
                <Image src={product.image} alt={product.productName} fill/>
                </div>
                <div className="ml-2">
                  <p>{product.productName}</p>
                  <div className="flex items-center">
                    <p>Color: {product.color}</p>
                    <p>Size: {product.size}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
<div className="flex items-center justify-center p-2 rounded-sm space-x-2 border-[.5px] border-black">
  <IconMinus size={15}/>   
  <p> {product.quantity}</p>             
                <IconPlus size={15}/>
     </div>           
                </TableCell>
              <TableCell className="text-right">{product.totalAmount}</TableCell>
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
  