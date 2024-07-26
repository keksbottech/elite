import React from 'react'
import { Button } from '../ui/button'
import { IconX } from '@tabler/icons-react'
import { cn } from '@/lib/utils';

type TagsPropType = {
    name?: string;
    onClick?:() => void;
    className?:string
    numOfProduct?:number;
}

const Tags = ({name, onClick, className, numOfProduct}:TagsPropType) => {

  return (
    <Button type='button' onClick={onClick} variant={'outline'} className={cn('flex items-center space-x-1',className)}>
        <span className='capitalize'>{name}</span>
        <span>
            {numOfProduct === 0 ?'' : `(${numOfProduct})`}

        </span>
        <IconX size={18}/>
    </Button>
  )
}

export default Tags