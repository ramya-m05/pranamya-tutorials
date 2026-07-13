import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-cream-100 mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="Pranamya Tutorials logo" width={44} height={44} className="rounded-full" />
            <span className="font-display font-semibold text-lg">Pranamya Tutorials</span>
          </div>
          <p className="mt-4 text-sm text-cream-100/70 font-body max-w-xs">
            {SITE.tagline} Coaching across State, CBSE &amp; ICSE for 8th, 9th, 10th Standard, and State Board 1st &amp; 2nd PUC.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-gold-300 mb-4">Quick links</h3>
          <ul className="flex flex-col gap-2 font-body text-sm text-cream-100/80">
            <li><Link className="focus-ring hover:text-gold-300" href="/about">About us</Link></li>
            <li><Link className="focus-ring hover:text-gold-300" href="/classes">Classes we offer</Link></li>
            <li><Link className="focus-ring hover:text-gold-300" href="/contact">Book a free demo</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-gold-300 mb-4">Reach us</h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-cream-100/80">
            <li className="flex gap-2">
              <MapPin size={18} className="shrink-0 text-gold-300 mt-0.5" />
              <span>{SITE.address}</span>
            </li>
            {SITE.phones.map((p, i) => (
              <li key={p} className="flex gap-2 items-center">
                <Phone size={16} className="shrink-0 text-gold-300" />
                <a className="focus-ring hover:text-gold-300 font-utility" href={`tel:${SITE.phonesRaw[i]}`}>{p}</a>
              </li>
            ))}
            <li className="flex gap-2 items-center">
              <Mail size={16} className="shrink-0 text-gold-300" />
              <a className="focus-ring hover:text-gold-300" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-100/10 py-5 text-center text-xs text-cream-100/50 font-utility">
        © {new Date().getFullYear()} Pranamya Tutorials, Rajajinagar, Bengaluru. Inspiring Young Minds.
      </div>
    </footer>
  );
}
