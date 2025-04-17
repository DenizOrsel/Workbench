"use client";

import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { logoutAction } from "@/app/dashboard/actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <Button
        type="submit"
        className="absolute bottom-4 right-4 z-20 flex items-center space-x-2 cursor-pointer"
      >
        <ExitIcon />
      </Button>
    </form>
  );
}
