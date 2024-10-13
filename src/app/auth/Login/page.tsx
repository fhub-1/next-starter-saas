"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="flex flex-col items-center pb-0 pt-8">
          <Image
            alt="App logo"
            height={80}
            radius="sm"
            src="/placeholder.svg?height=80&width=80"
            width={80}
          />
          <h1 className="mt-4 text-center text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-2 text-center text-sm text-gray-500">
            Sign in to access your account
          </p>
        </CardHeader>
        <CardBody className="flex flex-col items-center py-8">
          <Button
            color="primary"
            variant="shadow"
            startContent={<IconBrandGoogle className="text-xl" />}
            className="h-12 w-64 text-lg font-semibold"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/sale",
              })
            }
          >
            Login with Google
          </Button>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center py-4">
          <p className="max-w-xs text-center text-xs text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
