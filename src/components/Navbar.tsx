"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur border-b-4 border-maroon-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo.webp"
              alt="Pranamya Tutorials logo"
              width={52}
              height={52}
              className="rounded-full"
              priority
            />
            <span className="font-display font-semibold text-lg sm:text-xl leading-tight text-maroon-950">
              Pranamya
              <span className="block text-xs sm:text-sm font-body font-medium tracking-[0.2em] uppercase text-gold-600">
                Tutorials
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-body font-medium text-ink-900">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring relative py-1 hover:text-red-700 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SITE.phonesRaw[0]}`}
              className="focus-ring flex items-center gap-2 text-sm font-utility text-ink-700"
            >
              <Phone size={16} className="text-red-700" />
              {SITE.phones[0]}
            </a>
            <Link
              href="/contact"
              className="focus-ring bg-red-700 hover:bg-maroon-900 text-cream-50 font-semibold px-5 py-2.5 rounded-sm shadow-[3px_3px_0_var(--gold-500)] hover:shadow-[1px_1px_0_var(--gold-500)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Enquire Now
            </Link>
          </div>

          <button
            className="focus-ring md:hidden p-2 text-maroon-950"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-maroon-900/20 bg-cream-50 px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring py-3 border-b border-maroon-900/10 font-body font-medium text-ink-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${SITE.phonesRaw[0]}`}
            className="focus-ring mt-4 flex items-center gap-2 text-sm font-utility text-ink-700"
          >
            <Phone size={16} className="text-red-700" />
            {SITE.phones[0]}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="focus-ring mt-4 block text-center bg-red-700 text-cream-50 font-semibold px-5 py-3 rounded-sm"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
