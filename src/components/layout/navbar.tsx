"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { PackageManagerSelector } from "@/components/docs/package-manager-selector";
import ThemeToggle from "../ui/theme-toggle";
import Logo from "../ui/logo";

const navLinks = [
  { href: "/", label: "Home", disabled: false },
  { href: "/docs", label: "Docs", disabled: false },
  {
    href: "/templates",
    label: "Templates",
    disabled: true,
    badge: "Coming Soon",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header>
      <motion.nav
        className="fixed z-50 w-full px-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className={cn(
            "relative z-50 mx-auto mt-2 w-full max-w-6xl rounded-xl border bg-background/60 backdrop-blur-xl transition-[max-width,padding,box-shadow] duration-500 ease-out lg:px-6 px-3",
            // isScrolled
            //   ? "max-w-5xl px-3 shadow-sm sm:px-4 lg:px-5"
            //   : "px-3 sm:px-4 lg:px-6",
          )}
        >
          <div className="flex h-14 items-center justify-between">
            <Logo />

            <nav className="hidden items-center gap-0.5 md:flex">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.disabled) {
                  return (
                    <span
                      key={link.href}
                      className="relative inline-flex cursor-not-allowed items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground/50 select-none"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium leading-none text-muted-foreground/70">
                          {link.badge}
                        </span>
                      )}
                    </span>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute inset-x-1 -bottom-[1px] h-[2px] rounded-full bg-foreground"
                        layoutId="navbar-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="hidden sm:block">
                <PackageManagerSelector />
              </div>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-foreground/80"
              >
                <Link
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                  <span className="">GitHub</span>
                </Link>
              </Button>

              <ThemeToggle />

              <Button
                variant="outline"
                size="icon"
                className="relative size-8 md:hidden text-foreground/70"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div key="close" transition={{ duration: 0.15 }}>
                      <X className="size-4" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" transition={{ duration: 0.15 }}>
                      <Menu className="size-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="fixed inset-0 top-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileOpen(false)}
              />

              <motion.div
                className="relative z-50 mx-auto mt-2 w-full max-w-6xl md:hidden"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{
                  duration: 0.25,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="overflow-hidden rounded-2xl border bg-background/95 shadow-lg backdrop-blur-xl">
                  <div className="flex flex-col p-2">
                    {navLinks.map((link, index) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(link.href);

                      if (link.disabled) {
                        return (
                          <motion.span
                            key={link.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.05 + 0.05,
                              duration: 0.2,
                            }}
                            className="flex cursor-not-allowed items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground/50 select-none"
                          >
                            <span>{link.label}</span>
                            {link.badge && (
                              <span className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-2 py-0.5 text-[10px] font-medium leading-none text-muted-foreground/70">
                                {link.badge}
                              </span>
                            )}
                          </motion.span>
                        );
                      }

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.05 + 0.05,
                            duration: 0.2,
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150",
                              isActive
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground active:bg-muted",
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  <motion.div
                    className="border-t p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: navLinks.length * 0.05 + 0.05,
                      duration: 0.2,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="sm:hidden">
                        <PackageManagerSelector />
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="xs:hidden"
                      >
                        <Link
                          href={SITE_CONFIG.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Github className="size-4" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
