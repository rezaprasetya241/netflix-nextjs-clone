import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
  // return (
  //   <main>
  //     <Button>Hello from shadcn/ui</Button>
  //     <h1>{session?.user?.name}</h1>
  //     <img src={session?.user?.image as string} alt="" />
  //     {/* <Image
  //       src={session?.user?.image}
  //       alt="profile-pic"
  //       width={50}
  //       height={50}
  //       priority
  //     /> */}
  //   </main>
  // );
}
