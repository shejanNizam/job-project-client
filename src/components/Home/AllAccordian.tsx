import Accordian from "./Accordian";

export default function AllAccordian() {
  return (
    <div className="mb-12">
      <h3 className="text-center text-3xl font-semibold mt-12">
        Popular Frequently Asked Questions{" "}
      </h3>
      <p className="text-center mb-8">
        Simply Good Food prepares and delivers organically sourced, fresh meals
        to your door nationwide. Unlike other meal kit delivery <br /> services
        that need preparation and cleaning, our meals are delivered ready to
        consume. Our mission is to make healthy eating easy <br /> and enjoyable
        while not sacrificing flavor. Do you have a question regarding our
        shipping service?
      </p>
      <Accordian
        accordionTrigger="What are the foods like Steel Yat? How does the mail plan work?"
        accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit pariatur omnis ea iure adipisci, soluta voluptas vel laboriosam est fuga minus expedita hic obcaecati quas corporis eaque! Laborum, aliquid obcaecati quas corporis eaque! Laborum, aliquid."
      />
      <Accordian
        accordionTrigger="How Do I Eat Fresh and Lean?"
        accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit pariatur omnis ea iure adipisci, soluta voluptas vel laboriosam est fuga minus expedita hic obcaecati quas corporis eaque! Laborum, aliquid obcaecati quas corporis eaque! Laborum, aliquid."
      />
      <Accordian
        accordionTrigger="How long do my meals last?"
        accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit pariatur omnis ea iure adipisci, soluta voluptas vel laboriosam est fuga minus expedita hic obcaecati quas corporis eaque! Laborum, aliquid obcaecati quas corporis eaque! Laborum, aliquid."
      />
      <Accordian
        accordionTrigger="What if I don t eat them all at once?"
        accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit pariatur omnis ea iure adipisci, soluta voluptas vel laboriosam est fuga minus expedita hic obcaecati quas corporis eaque! Laborum, aliquid obcaecati quas corporis eaque! Laborum, aliquid."
      />
      <Accordian
        accordionTrigger="What s in the food? Is it organic? Is it gluten free?"
        accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit pariatur omnis ea iure adipisci, soluta voluptas vel laboriosam est fuga minus expedita hic obcaecati quas corporis eaque! Laborum, aliquid obcaecati quas corporis eaque! Laborum, aliquid."
      />
    </div>
  );
}
