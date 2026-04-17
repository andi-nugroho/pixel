"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { SHADERS_CONFIG } from "@/lib/shaders-config";
import { CATEGORIES } from "@/lib/constants";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarLink {
  title: string;
  href: string;
  disabled?: boolean;
  badge?: string;
}

interface SidebarGroupData {
  id: string;
  links: SidebarLink[];
}

function buildSidebarNav(): SidebarGroupData[] {
  const gettingStarted: SidebarGroupData = {
    id: "getting-started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      {
        title: "Customization",
        href: "/docs/customization",
        disabled: true,
        badge: "Coming Soon",
      },
    ],
  };

  const shaderGroups = CATEGORIES.filter(
    (c) => c.id !== "all" && c.id !== "favorites",
  ).map((cat) => ({
    id: cat.id,
    links: SHADERS_CONFIG.filter((s) => s.category === cat.id).map(
      (shader) => ({
        title: shader.name,
        href: `/docs/${shader.id}`,
      }),
    ),
  }));

  return [gettingStarted, ...shaderGroups.filter((g) => g.links.length > 0)];
}

function SidebarItem({
  link,
  isActive,
  onClick,
}: {
  link: SidebarLink;
  isActive: boolean;
  onClick?: () => void;
}) {
  if (link.disabled) {
    return (
      <div
        className={cn(
          "group relative flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm",
          "cursor-not-allowed text-muted-foreground/50",
        )}
      >
        <span>{link.title}</span>
        {link.badge && (
          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            {link.badge}
          </span>
        )}
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center rounded-md px-3 py-1.5 text-sm transition-colors",
        isActive
          ? "font-medium text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-active-bg"
          className="absolute inset-0 rounded-md bg-muted/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      <span className="relative z-10">{link.title}</span>
    </Link>
  );
}

function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();
  const groups = useMemo(() => buildSidebarNav(), []);

  return (
    <div className="flex flex-col pb-8">
      {groups.map((group, groupIndex) => (
        <div key={group.id} className="relative">
          {groupIndex > 0 && (
            <div className="my-4 mx-3 h-px bg-border/40" role="none" />
          )}

          <div className="flex flex-col space-y-0.5">
            {group.links.map((link) => (
              <SidebarItem
                key={link.href}
                link={link}
                isActive={pathname === link.href}
                onClick={onLinkClick}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8">
        <SidebarNav />
      </ScrollArea>
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-60"
        aria-hidden="true"
      />
    </aside>
  );
}

export function MobileSidebar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <SidebarNav onLinkClick={onClose} />
    </div>
  );
}
