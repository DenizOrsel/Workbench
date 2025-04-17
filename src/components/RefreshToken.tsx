"use client";
import { useEffect } from "react";
import { refreshAction } from "@/app/login/actions";

export default function RefreshToken() {
  useEffect(() => {
    const id = setInterval(() => {
      refreshAction().catch(console.error);
    }, 10 * 60 * 1000); // every 10m
    return () => clearInterval(id);
  }, []);
  return null;
}
