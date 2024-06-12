import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsArr } from "@/utilits/Icon.tsx";

export default function AccordionPage() {
  return (
    <div className="dark:bg-[#111827] block xl:hidden bg-white w-full">
      <div className="xl:w-[1200px] m-auto px-[15px] md:px-[30px] pb-[50px] sm:pb-[100px] items-center justify-center">
        <div>
          <AccordionComponent type="single" collapsible>
            {TabsArr.map((item, idx) => {
              return (
                <AccordionItem
                  key={idx}
                  className="mb-1 sm:mb-2"
                  value={`item-${idx + 1}`}
                >
                  <AccordionTrigger className="border-[1px] border-gray-500 px-3 sm:px-5 hover:no-underline dark:text-white rounded-xl">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent className="p-2 dark:text-gray-400 font-[600]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </AccordionComponent>
        </div>
      </div>
    </div>
  );
}
