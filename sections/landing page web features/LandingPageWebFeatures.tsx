import { cn } from '@/lib/utils'
import { IconChecklist, IconClipboard, IconHeadphones, IconUser } from '@tabler/icons-react'
import React from 'react'

const features = [
    {
        id:0,
        title:'High Quality Products',
        subTitle:'Purchase unique and high quality items',
        icon:<IconChecklist/>
    },
    {
        id:1,
        title:'Curated Marketplace',
        subTitle:'Find items from individual sellers and high-end brands',
        icon:<IconClipboard/>
    },
    {
        id:2,
        title:'User Friendly',
        subTitle:'Easy navigation',
        icon:<IconUser/>
    },
    {
        id:3,
        title:'24/7 Online Support',
        subTitle:'We support online on all days',
        icon:<IconHeadphones/>
    },
]

type LandingPageWebFeaturesPropTypes = {
    className?: string
}
const LandingPageWebFeatures = ({className}:LandingPageWebFeaturesPropTypes) => {
  return (
    <section className={cn('flex items-center justify-between p-5', className)}>
{
    features?.map(feature => <div key={feature.id} className='flex items-center space-x-2'>
        <div className='text-secondary'>
        {feature.icon}
        </div>
        <div>
        <p className='font-semibold text-lg'>{feature.title}</p>
        <p className='text-sm text-gray'>{feature.subTitle}</p>
        </div>
    </div>
)}

    </section>
  )
}

export default LandingPageWebFeatures