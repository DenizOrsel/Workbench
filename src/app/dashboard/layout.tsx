import { ReactNode } from "react";
import RefreshToken from "@/components/RefreshToken";
import LogoutButton from "@/components/LogoutButton";
import { getUserInfo } from "./actions";

export const metadata = {
  title: "Dashboard - Nfield Workspace",
  description: "Dashboard for Nfield Workspace",
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { username } = await getUserInfo();

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Token refresh and logout controls */}
      <RefreshToken />
      <LogoutButton />

      {/* Header */}
      <header className="flex-shrink-0 p-4 bg-white dark:bg-gray-800">
        <h2 className="text-lg font-medium">Welcome, {username}</h2>
      </header>

      {/* Main content area with its own scroll if needed */}
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
