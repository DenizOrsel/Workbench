import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6">Nfield Workbench</h1>
      <Button asChild>
        <Link href="/login">
          <div className="flex items-center justify-center space-x-2">
            <span className="mr-2"><ArrowRightIcon/></span>
            <span className="mb-0.5">Go to login</span>
          </div>
        </Link>
      </Button>
    </div>
  );
}
