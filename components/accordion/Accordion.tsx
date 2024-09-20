import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { cn } from "@/lib/utils";


  type AccordionComponentPropTypes = {
    accordionData?: [];
    className?: string;
  }
  export default function AccordionComponent({accordionData, className}: AccordionComponentPropTypes) {
    return (
      <Accordion type="single" collapsible className={cn("w-full", className)}>

        {
            accordionData?.map(data =>         <AccordionItem value={data.id}>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>)
        }


      </Accordion>
    )
  }
  