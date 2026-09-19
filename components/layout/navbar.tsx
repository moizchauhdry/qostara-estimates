"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { serviceHref, servicePages } from "@/lib/services";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500 ease-smooth",
        scrolled
          ? "border-ink-950/8 bg-white/80 shadow-soft backdrop-blur-2xl backdrop-saturate-150"
          : "border-transparent bg-white/55 backdrop-blur-xl",
      )}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]"
      >
        <Link href="/" aria-label="Qostara home" className="rounded-xl">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            const linkClass = cn(
              "rounded-full px-3.5 py-2 text-sm font-medium transition duration-300 ease-smooth",
              active
                ? "bg-ink-950 text-white"
                : "text-ink-600 hover:bg-ink-950/5 hover:text-ink-950",
            );

            if (link.href !== "/services") {
              return (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(linkClass, "inline-flex items-center gap-1")}
                >
                  {link.label}
                  <ChevronDown
                    className="size-3.5 transition duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden
                  />
                </Link>
                <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="panel w-72 p-2 shadow-lifted">
                    {servicePages.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={serviceHref(service.slug)}
                          className={cn(
                            "block rounded-xl px-3.5 py-2.5 text-sm font-medium transition",
                            pathname === serviceHref(service.slug)
                              ? "bg-signal-50 text-signal-700"
                              : "text-ink-700 hover:bg-surface hover:text-ink-950",
                          )}
                        >
                          {service.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            className="h-10 rounded-full bg-signal-600 px-5 text-white shadow-signal hover:bg-signal-700 hover:shadow-signal-lifted"
          >
            <Link href="/contact">
              Request an Estimate
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-lg"
              className="rounded-full lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,22rem)] p-0">
            <SheetHeader className="border-b border-ink-950/8 px-5 py-5 text-left">
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-3 py-4">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3.5 text-base font-medium transition",
                        active
                          ? "bg-signal-50 text-signal-700"
                          : "text-ink-700 hover:bg-surface",
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.href === "/services" && (
                      <ul className="mt-1 mb-2 ml-4 space-y-0.5 border-l border-ink-950/8 pl-3">
                        {servicePages.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={serviceHref(service.slug)}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-sm font-medium transition",
                                pathname === serviceHref(service.slug)
                                  ? "text-signal-700"
                                  : "text-ink-600 hover:text-ink-950",
                              )}
                            >
                              {service.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto border-t border-ink-950/8 p-4">
              <Button
                asChild
                className="h-12 w-full rounded-full bg-signal-600 text-base text-white shadow-signal hover:bg-signal-700"
              >
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Request an Estimate
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
