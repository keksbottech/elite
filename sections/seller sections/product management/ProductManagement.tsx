import Dropdown from '@/components/drop down/Dropdown'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconPlus } from '@tabler/icons-react'
import React from 'react'
import categoriesData from '@/website json/category.json'
import { SelectItem } from '@/components/ui/select'
import { Button } from '@/components/ui/button'


const ProductManagement = () => {
  return (
    <section>
        <h2>Add a new product</h2>

        <form>
            <div>
                <div>
                    <IconPlus/>
                    <p>Upload Image</p>
                </div>
                <Input/>
            </div>

            <p>Upload high quality product images to showcase different angles</p>

            <div>
                <Label>Product Name*</Label>
                <Input/>
            </div>

            <div>
                <Label>Product Name*</Label>
                <Input/>
            </div>


            <Dropdown className='py-6 w-[200px]' placeholder='Category '>
        {categoriesData?.map(category => (
          <SelectItem value={category.name} key={category.id}>
            <p>
              {category.name}
            </p>
          </SelectItem>
        ))}
      </Dropdown>
            <div>
                <Label>Product Name*</Label>
                <Input/>
            </div>


            <Dropdown className='py-6 w-[200px]' placeholder='Category '>
        {categoriesData?.map(category => (
          <SelectItem value={category.name} key={category.id}>
            <p>
              {category.name}
            </p>
          </SelectItem>
        ))}
      </Dropdown>

      <Button>Save</Button>
        </form>


        <div>
            <h2>Existing Products</h2>
            
        </div>
    </section>
  )
}

export default ProductManagement