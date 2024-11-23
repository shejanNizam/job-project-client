import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import getMenu from "@/lib/getMenu";
import { ChevronLeft, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type MenuType = {
  _id: string;
  name: string;
  email: string;
  price: number;
  image: string;
};

export default async function SingleMenu({
  params,
}: {
  params: { id: string };
}) {
  // console.log(params); // { id: '6741067040535c18247a7d9f' }
  const { id } = params;
  // console.log(id); // 6741067040535c18247a7d9f
  const singleMenu = await getMenu(id);
  console.log(singleMenu); // {}

  return (
    <>
      <div className="max-w-6xl mx-auto bg-background p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-primary">
              <ChevronLeft className="h-5 w-5" />
              <span className="ml-2">Back</span>
            </Button>
          </Link>
        </div>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="relative rounded-lg overflow-hidden lg:w-1/2">
                <Image
                  src={singleMenu?.image}
                  alt="menu_image"
                  width={500}
                  height={500}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              <div className="space-y-4 lg:w-1/2">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {" "}
                    {singleMenu.name}{" "}
                  </h2>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">4.5/5</span>
                  </div>
                </div>

                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Protein 43g</span>
                  <span>•</span>
                  <span>Carbs 53g</span>
                  <span>•</span>
                  <span>Fat 25g</span>
                </div>

                <div>
                  <span className="text-3xl font-bold">
                    ${singleMenu.price}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  Crispy baked panko breaded chicken topped with a savory
                  general tso sauce, served on a bed of brown rice alongside a
                  cup of broccoli.
                </p>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Add to cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700"
        >
          <ShoppingCart className="h-6 w-6 text-white" />
        </Button>
            
      </div>
    </>
  );
}
