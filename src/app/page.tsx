import Accordian from "@/components/Home/Accordian";
import Banner from "@/components/Home/Banner";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Home Page</h1>
      <Banner />
      <>
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
      </>
    </div>
  );
};

export default HomePage;
