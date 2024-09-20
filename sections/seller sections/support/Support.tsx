import UserAvatar from '@/components/avatar/Avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IconMail, IconPlane } from '@tabler/icons-react'
import React from 'react'
import accordionData from '@/website json/accordiondata.json'
import AccordionComponent from '@/components/accordion/Accordion'
  

const Support = () => {
  return (
    <section>
        <div>
        <h2>Customer Inquiries</h2>
        <Button>
            <span>Inbox</span>
            <IconMail/>
        </Button>


        <AccordionComponent accordionData={accordionData}/>

{
    accordionData?.map(accordion => 
    <div key={accordion.id}>
        <div>
            <UserAvatar/>
            <div>
                <p>{accordion.username}</p>
                <p>{accordion.title}</p>
                <p>
               
                </p>
            </div>
        </div>

<div>
    <p>❤</p>
    <div>
        <p>🔥</p>
        <p>2</p>
    </div>
    <div>
        <p>Friday</p>
        <p>2:20pm</p>
    </div>
</div>
        <div>
            <Input placeholder='Reply'/>
            <Button><IconPlane/></Button>
        </div>

        </div>

    
)
}
    </div>

    
    </section>
  )
}

export default Support