// app/docs/layout.tsx
import { Sidebar } from "@/components/layout/sidebar";
import { MobileDocNav } from "@/components/layout/mobile-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>

          {/* Content */}
          <main className="min-w-0 pt-24">
            <MobileDocNav />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
