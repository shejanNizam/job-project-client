// "use server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getAllMenu from "@/lib/getAllMenu";
import Image from "next/image";
import Link from "next/link";
import { MenuType } from "./[id]/page";

export default async function Menus() {
  const menuData = await getAllMenu();
  return (
    <>
      <h2 className="text-center text-3xl font-semibold my-8">
        {" "}
        New & Trending menu
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 my-8">
        {menuData.map((menu: MenuType) => (
          <div key={menu._id}>
            <Card className="w-auto shadow-md border">
              <CardHeader className="p-0">
                <Image
                  src={menu.image}
                  alt="menu image"
                  width={300}
                  height={100}
                  className="mx-auto"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold">
                  {menu.name}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">$49.99</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link href={`menu/${menu._id}`}>
                  <Button className="w-full" variant="default">
                    Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
