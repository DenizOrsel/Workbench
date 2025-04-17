import { ReactNode } from "react";
import RefreshToken from "@/components/RefreshToken";
import LogoutButton from "@/components/LogoutButton";
import { getUserInfo } from "./actions";

export const metadata = {
  title: "Dashboard - Tarantula",
};

export default async function DashboardLayout({ children }: { children: ReactNode }) {

  const { username } = await getUserInfo();

  return (
    <>
      <RefreshToken />
      <LogoutButton />
      <div className="p-4 bg-white dark:bg-gray-800">
        <h2 className="text-lg font-medium">Welcome, {username}</h2>
      </div>
      {children}
    </>
  );
}
