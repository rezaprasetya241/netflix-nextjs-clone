import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import GoogleIcon from "../../../public/google.svg";
import Image from "next/image";
import GithbuSigninButton from "@/app/components/GithbuSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Log In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant={"destructive"}
            className="bg-full bg-[#e50104]"
          >
            Log in
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        New to netflix?{" "}
        <Link className="text-white hover:underline" href={"/sign-up"}>
          Sign up now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithbuSigninButton />
        <Button variant={"outline"} size={"icon"}>
          <Image src={GoogleIcon} alt="Google iconn" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Page;
