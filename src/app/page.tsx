import { Suspense } from "react";
import { ShaderGrid } from "@/components/gallery/shader-grid";
import { LandingHero } from "@/components/landing/landing-hero";
import { TerminalProcess } from "@/components/landing/process";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <section className="mx-auto max-w-6xl px-2 py-12">
        <Suspense fallback={<GridSkeleton />}>
          <ShaderGrid />
        </Suspense>
        {/* <TerminalProcess /> */}
      </section>
      <Footer />
    </>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-xl border border-border">
          <div className="aspect-16/10 bg-muted" />
          <div className="space-y-2 p-4">
            <div className="h-4 w-2/3 rounded bg-muted" />
            <div className="h-3 w-full rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
