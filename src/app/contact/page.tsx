import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import RibbonBadge from "@/components/RibbonBadge";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Pranamya Tutorials",
  description:
    "Get in touch with Pranamya Tutorials in Rajajinagar, Bengaluru. Call us or send an enquiry to book a free demo class.",
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE.mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <section className="bg-maroon-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <RibbonBadge>Get in touch</RibbonBadge>
          <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl text-cream-50">
            Let&rsquo;s talk about your child&rsquo;s next class
          </h1>
          <p className="mt-5 font-body text-lg text-cream-100/80 max-w-2xl mx-auto">
            Send us an enquiry below, or call us directly &mdash; whichever is easier.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <h2 className="font-display font-bold text-2xl text-maroon-950">Send an enquiry</h2>
            <p className="mt-2 font-body text-sm text-ink-700">
              Fill in a few details and we&rsquo;ll call you back to schedule a demo.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-maroon-950">Reach us directly</h2>
              <div className="mt-6 flex flex-col gap-5">
                <div className="flex gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold-100 shrink-0">
                    <MapPin size={20} className="text-red-700" />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-ink-900">Visit us</p>
                    <p className="font-body text-sm text-ink-700">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold-100 shrink-0">
                    <Phone size={20} className="text-red-700" />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-ink-900">Call us</p>
                    <div className="flex flex-col">
                      {SITE.phones.map((p, i) => (
                        <a
                          key={p}
                          href={`tel:${SITE.phonesRaw[i]}`}
                          className="focus-ring font-utility text-sm text-ink-700 hover:text-red-700 w-fit"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold-100 shrink-0">
                    <Mail size={20} className="text-red-700" />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-ink-900">Email us</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="focus-ring font-body text-sm text-ink-700 hover:text-red-700"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden border-2 border-ink-900/10 shadow-[4px_4px_0_rgba(0,0,0,0.06)] h-72 sm:h-80">
              <iframe
                title="Pranamya Tutorials location"
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
