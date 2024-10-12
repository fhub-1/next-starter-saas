"use client";

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();
  // const router = useRouter();

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "authenticated") {
    if (minimal) {
      return (
        <Button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          color="danger"
          variant="flat"
        >
          Sign out
        </Button>
      );
    }
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">{data.user?.name}</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">Profile</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem onClick={() => signOut()} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/sale",
        })
      }
      color="danger"
      href="/auth"
      variant="flat"
    >
      Sign in
    </Button>
  );
}
