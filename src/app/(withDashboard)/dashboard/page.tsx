import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const loggedUser = await getServerSession(authOptions);

  return (
    <>
      {loggedUser?.user && (
        <>
          <Image
            src={
              loggedUser?.user?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            }
            width={100}
            height={100}
            alt="user_image"
            className="mx-auto rounded-full mt-8 border-4 border-orange-400"
          />
          <h1 className="text-4xl text-center mt-10">
            Welcome{" "}
            <span className="text-orange-500">{loggedUser?.user?.name}</span>
          </h1>
          <h3 className="text-3xl text-center mt-10">
            Logged-in user email:{" "}
            <span className="text-orange-500">{loggedUser?.user?.email}</span>
          </h3>
        </>
      )}
    </>
  );
};

export default DashboardPage;
