"use client";

import Link from "next/link";

const navLinks = [
  { index: "01", href: "/", label: "Home" },
  { index: "02", href: "/about", label: "About" },
  { index: "03", href: "/work", label: "Work" },
  { index: "04", href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-mono text-sm tracking-tight text-foreground">
            BM
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
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
        </div>

        <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="label link-invert text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
