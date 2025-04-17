"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signinAction(formData: FormData) {
  const region = formData.get("region") as string;
  const domain = formData.get("domain") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // Map region to Nfield API base URL
  const apiMap: Record<string, string> = {
    Americas: "https://apiam.nfieldmr.com/v1/",
    Europe: "https://api.nfieldmr.com/v1/",
    AsiaPacific: "https://apiap.nfieldmr.com/v1/",
    China: "https://apicn.nfieldmr.com/v1/",
    Purple: "https://purple-api.niposoftware-dev.com/v1/",
    Red: "https://red-api.niposoftware-dev.com/v1/",
    Green: "https://green-api.niposoftware-dev.com/v1/",
    Yellow: "https://yellow-api.niposoftware-dev.com/v1/",
  };
  const apiBaseUrl = apiMap[region] || apiMap.Europe;

  // Sign in to Nfield API
  const res = await fetch(`${apiBaseUrl}SignIn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Domain: domain,
      Username: username,
      Password: password,
    }),
  });
  if (!res.ok) throw new Error("Invalid credentials");
  const { AuthenticationToken } = await res.json();

  // Set HttpOnly cookie
  const cookieStore = await cookies();
  cookieStore.set({
    name: "nf_region",
    value: apiBaseUrl,
    httpOnly: false,
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
  });
  cookieStore.set({
    name: "nf_domain",
    value: domain,
    httpOnly: false,
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
  });
  cookieStore.set({
    name: "nf_username",
    value: username,
    httpOnly: false,
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
  });
  cookieStore.set({
    name: "nf_password",
    value: password,
    httpOnly: false,
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
  });
  cookieStore.set({
    name: "nf_token",
    value: AuthenticationToken,
    httpOnly: true,
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
  });

  // Redirect to dashboard
  redirect("/dashboard");
}

export async function refreshAction() {
  const cookieStore = await cookies();
  const region = cookieStore.get("nf_region")?.value;
  const domain = cookieStore.get("nf_domain")?.value;
  const username = cookieStore.get("nf_username")?.value;
  const password = cookieStore.get("nf_password")?.value;
  if (!region || !domain || !username || !password) {
    throw new Error("Missing credentials for token refresh");
  }
  const apiBase = region;
  const res = await fetch(`${apiBase}SignIn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Domain: domain,
      Username: username,
      Password: password,
    }),
  });
  if (!res.ok) throw new Error("Unable to refresh token");
  const { AuthenticationToken } = await res.json();
  const refreshedCookieStore = await cookies();
  refreshedCookieStore.set({
    name: "nf_token",
    value: AuthenticationToken,
    httpOnly: true,
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
  });
}