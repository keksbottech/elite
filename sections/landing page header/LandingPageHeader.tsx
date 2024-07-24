import React from 'react';
import { SelectItem } from "@/components/ui/select";
import Dropdown from '@/components/drop down/Dropdown';
import categoriesData from '@/website json/category.json';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { IconLayout, IconLocation, IconSearch, IconUser } from '@tabler/icons-react';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const LandingPageHeader = () => {


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <section className='flex items-center justify-between space-x-4 p-3'>
      <h1 className='font-semibold'>ELITE</h1>

      <Dropdown className='py-6 w-[200px]' placeholder='Category '>
        {categoriesData?.map(category => (
          <SelectItem value={category.name} key={category.id}>
            <Link href={category.route}>
              {category.name}
            </Link>
          </SelectItem>
        ))}
      </Dropdown>

<form className='w-full flex items-center relative'>
    <Input placeholder='Search' className='p-5 py-6'/>
    <Button className='bg-transparent p-3 rounded-lg absolute right-[60px]'>
    <IconLayout  className='text-black'/>
    </Button>
    <Button className='bg-secondary p-5 py-6 rounded-lg absolute right-0'>
    <IconSearch className='text-black'/>
    </Button>
  
</form>

      <Button className='flex items-center bg-transparent space-x-4 p-3 py-6' variant={'outline'} type='button'>
        <div className='flex flex-col items-start justify-start'>Deliver to <p >Nigeria</p></div>
        <IconLocation />
      </Button>
      <div className='flex items-center'>
        <IconUser />

        <div className='flex items-center space-x-2'>
          <p>Login</p>
          <span>/</span>
          <p>Signup</p>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHeader;
