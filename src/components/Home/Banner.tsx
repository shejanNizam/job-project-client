import Image from "next/image";
import { Button } from "../ui/button";
import banner_img from "@/assets/meat-sadj-vegetables-greens-spic.png";

export default function Banner() {
  return (
    <>
      <div className="relative flex items-center justify-between py-16 px-16 bg-gray-100">
        <div className="w-full max-w-lg">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
            Keep track of <br />
            <span className="text-green-600"> Fitness Goal </span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Order on Simply Good Food
          </p>
          <Button className=" text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300">
            Order Now
          </Button>
        </div>
        <div className="relative w-1/2 h-full ">
          <Image
            src={banner_img}
            alt="Delicious food"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </>
  );
}
