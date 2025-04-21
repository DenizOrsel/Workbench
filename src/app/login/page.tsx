"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { signinAction } from "./actions";

export default function LoginPage() {
  const [region, setRegion] = useState("Europe");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Button asChild className="absolute top-4 left-4 z-10">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <ArrowLeftIcon />
            <span>Back</span>
          </div>
        </Link>
      </Button>

      <form
        action={async (formData: FormData) => {
          try {
            await signinAction(formData);
          } catch (e: unknown) {
            if (e instanceof Error) {
              setError(e.message);
            } else {
              setError("An unknown error occurred");
            }
          }
        }}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Tarantula Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <Label htmlFor="region" className="mb-1">
            Region
          </Label>
          <Select name="region" defaultValue={region} onValueChange={setRegion}>
            <SelectTrigger id="region" className="w-full">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="AsiaPacific">APAC</SelectItem>
              <SelectItem value="Americas">AMERICAS</SelectItem>
              <SelectItem value="China">China</SelectItem>
              <SelectItem value="Purple">Purple</SelectItem>
              <SelectItem value="Red">Red</SelectItem>
              <SelectItem value="Green">Green</SelectItem>
              <SelectItem value="Yellow">Yellow</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="domain" className="mb-1">
            Domain name
          </Label>
          <Input
            id="domain"
            name="domain"
            type="text"
            placeholder="example"
            required
          />
        </div>

        <div>
          <Label htmlFor="username" className="mb-1">
            Username
          </Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Your username"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="mb-1">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <Button type="submit" className="w-full cursor-pointer">
          Log In
        </Button>
      </form>
    </div>
  );
}
