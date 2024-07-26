import { RadioGroupForm } from '@/components/radio input form/RadioInputForm'
import React from 'react'
import productListingData from '@/website json/productlisting.json'
import Tags from '@/components/tags/Tags'
import { Slider } from "@/components/ui/slider"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product card/ProductCard'
import { IconStarFilled } from '@tabler/icons-react'
import featuredProductData from '@/website json/featuredproducts.json'
import PaginationForm from '@/components/pagination/Pagination'
import PopularBrands from '../popular brands/PopularBrands'
import LandingPageWebFeatures from '../landing page web features/LandingPageWebFeatures'

const productTags = [
    {
        id:0,
        name:'headphones',
        number:9
    },
    {
        id:1,
        name:'silver',
        number:0
    },
    {
        id:2,
        name:'earphones',
        number:0
    },
    {
        id:3,
        name:'wired',
        number:0
    },
]


const ProductListing = () => {
  return (
    <section className='p-5 flex flex-col items-center justify-center'>
        <div className=' flex justify-between'>
        <div className="w-[20%]">
            <div>
            <h2 className='font-bold mb-3'>Category</h2>
        {
        productListingData.categories.map((category, index) => (
            <RadioGroupForm key={index} label={category}/>
          ))}
     
      </div>
      <div className='mt-8'>
        <h2 className='font-bold mb-3'>Brands</h2>
     
          {productListingData.brands.map((brand, index) => (
             <RadioGroupForm key={index} label={brand}/>
           
          ))}
     
      </div>

      <div className='mt-8'>
        <h2 className='font-bold mb-3'>Color</h2>
     
          {productListingData.colors.map((color, index) => (
            <RadioGroupForm key={index} label={color}/>
          
          ))}
           
        </div>

        <div className='mt-8'>
            <h2 className='font-bold mb-3'>Popular Tags</h2>
            <div className='flex flex-wrap space-x-3 space-y-3 mt-4'>
            {
productTags?.map(tags => <Tags key={tags.id} name={tags.name} numOfProduct={tags.number} />)
            }
            </div>
        </div>

        <div className='mt-8'>
        <h2 className='font-bold mb-3'>Filter By Price</h2>
        <Slider defaultValue={[33]} className='bg-muted-foreground' max={100} step={1} />
<div className="flex items-center mt-5 space-x-3">
    <Input placeholder='0'/>
    <Input placeholder='100'/>
</div>

<div className="w-full mt-5">
    <Button className='w-full'>Filter</Button>
</div>
        </div>
        </div>
        <div className="w-[80%]">
            
<div className='flex items-center flex-wrap justify-center space-x-4 mt-5'>
        {
            featuredProductData?.map(featured =>
            <ProductCard reviewStyle='bg-black dark:bg-accent' url={featured.image} title={featured.title} className='mb-5 w-[330px]' subTitle={featured.description} review={featured.rating} tag={featured.tag} price={`$${featured.price}`} reviewStar={<IconStarFilled size={15} className='text-orange-400'/>} 
            circleTags={
                <div className='flex items-center space-x-2 mt-5'>
<div className='w-[15px] h-[15px] rounded-full bg-black'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-gray-500'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-gray-300'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-blue-300'> </div>
<div className='w-[15px] h-[15px] rounded-full bg-black'> 
    
</div>
                </div>
            }
            footer={
                <Button variant={'outline'}>Buy now</Button>
            }/>)
        }
        </div>
        <PaginationForm/>

        </div>
        </div>
        <LandingPageWebFeatures className='mt-10'/>
        <PopularBrands className='mt-10'/>
    </section>
  )
}

export default ProductListing