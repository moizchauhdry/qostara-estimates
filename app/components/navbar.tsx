"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The mobile panel overlays the page, so the body behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ease-smooth ${
        isScrolled || isMenuOpen
          ? "border-slate-900/8 bg-white/72 shadow-soft backdrop-blur-2xl backdrop-saturate-150"
          : "border-transparent bg-white/50 backdrop-blur-lg"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 lg:h-20 lg:px-8"
      >
        <a href="#top" className="rounded-2xl" aria-label="Quotely home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition duration-300 ease-smooth hover:bg-slate-900/5 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#login"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition duration-300 ease-smooth hover:bg-slate-900/5 hover:text-slate-900"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="pill bg-brand-600 px-6 py-2.5 text-sm text-white shadow-brand hover:bg-brand-700 hover:shadow-brand-lifted"
          >
            Start free trial
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-slate-700 transition duration-300 ease-smooth hover:bg-slate-900/5 active:scale-95 lg:hidden"
        >
          {isMenuOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-up border-t border-slate-900/8 bg-white/95 px-4 pb-6 backdrop-blur-2xl lg:hidden"
        >
          <ul className="space-y-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 text-base font-medium text-slate-700 transition duration-300 ease-smooth hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2.5">
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="pill w-full bg-brand-600 px-6 py-4 text-base text-white shadow-brand"
            >
              Start free trial
            </a>
            <a
              href="#login"
              onClick={() => setIsMenuOpen(false)}
              className="pill w-full bg-white px-6 py-4 text-base text-slate-800 ring-1 ring-slate-900/8"
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
