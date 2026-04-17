import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
      <h1 className="text-7xl font-bold tracking-tighter text-muted-foreground/20">
        404
      </h1>
      <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild className="mt-6 gap-2">
        <Link href="/">
          <ArrowLeft className="size-4" />
          Back to Gallery
        </Link>
      </Button>
    </div>
  );
}
