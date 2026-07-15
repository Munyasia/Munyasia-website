"use client";

import Link from "next/link";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useThemeShortcut } from "@/lib/hooks/useThemeShortcut";
import { useHydrated } from "@/lib/hooks/useHydrated";

const navLinks = [
  { index: "01", href: "/", label: "Home" },
  { index: "02", href: "/about", label: "About" },
  { index: "03", href: "/work", label: "Work" },
  { index: "04", href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHydrated();

  useThemeShortcut();

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm tracking-tight text-foreground">
          BM
        </Link>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="label link-invert flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="text-foreground">{link.index}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="label hidden sm:inline">press t</span>
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-border text-foreground transition-colors duration-150 ease-out hover:bg-foreground hover:text-background"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" weight="light" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" weight="light" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
