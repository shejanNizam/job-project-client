import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PropType = {
  accordionTrigger: string;
  accordionContent: string;
};

export default async function Accordian({
  accordionTrigger,
  accordionContent,
}: PropType) {
  return (
    <div className="w-[60%] mx-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger> {accordionTrigger} </AccordionTrigger>
          <AccordionContent>{accordionContent}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
