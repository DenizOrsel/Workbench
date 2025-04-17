"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const cookieNames = [
    "nf_token",
    "nf_region",
    "nf_domain",
    "nf_username",
    "nf_password",
  ];
  const cookieStore = await cookies();
  cookieNames.forEach((name) => {
    cookieStore.delete(name);
  });
  redirect("/login");
}

export async function getUserInfo() {
  const cookieStore = await cookies();
  const token = cookieStore.get("nf_token")?.value;
  const apiBaseV1 = cookieStore.get("nf_region")?.value;
  const username = cookieStore.get("nf_username")?.value || "";

  const apiBaseV2 = apiBaseV1?.replace("/v1/", "/v2/") || "";

  let roles: string[] = [];
  if (token && apiBaseV2) {
    const res = await fetch(`${apiBaseV2}Me/Role`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      roles = data.UserRoles || [];
    }
  }
  return { username, roles };
}
