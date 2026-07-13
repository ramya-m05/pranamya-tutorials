import Link from "next/link";
import { ArrowRight, Phone, BookOpen, Users, Landmark } from "lucide-react";
import Sunburst from "@/components/Sunburst";
import RibbonBadge from "@/components/RibbonBadge";
import ClassCard from "@/components/ClassCard";
import { CLASSES, WHY_US, FACTS, SITE } from "@/lib/data";

const FACT_ICONS = [BookOpen, Users, Landmark];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-maroon-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="reveal relative z-10">
            <RibbonBadge>Inspiring Young Minds</RibbonBadge>
            <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-cream-50">
              Build today.{" "}
              <span className="italic font-medium text-gold-300">Excel</span> tomorrow.
            </h1>
            <p className="mt-5 font-body text-lg text-cream-100/80 max-w-lg">
              {SITE.tagline} Pranamya Tutorials runs focused batches for 8th,
              9th, 10th Standard across State, CBSE &amp; ICSE, and State Board
              1st &amp; 2nd PUC, in Rajajinagar,
              Bengaluru &mdash; built around concept clarity, not shortcuts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="focus-ring flex items-center gap-2 bg-gold-500 hover:bg-gold-300 text-maroon-950 font-semibold px-6 py-3.5 rounded-sm transition-colors"
              >
                Book a free demo class
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${SITE.phonesRaw[0]}`}
                className="focus-ring flex items-center gap-2 border-2 border-cream-100/30 hover:border-cream-100/60 text-cream-50 font-semibold px-6 py-3.5 rounded-sm transition-colors"
              >
                <Phone size={18} />
                {SITE.phones[0]}
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[320px] sm:h-[400px]">
            <Sunburst className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" />
            <div className="relative z-10 flex flex-col gap-3 w-full max-w-[260px]">
              {FACTS.map((fact, i) => {
                const Icon = FACT_ICONS[i];
                return (
                  <div
                    key={fact.label}
                    className="flex items-center gap-3 bg-cream-50 rounded-sm px-4 py-3 shadow-[3px_3px_0_var(--gold-500)]"
                  >
                    <Icon size={22} className="text-red-700 shrink-0" />
                    <div>
                      <p className="font-body font-semibold text-sm text-maroon-950 leading-tight">
                        {fact.label}
                      </p>
                      <p className="font-body text-xs text-ink-700/70 leading-tight">{fact.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Classes overview */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <RibbonBadge tone="gold">Classes for</RibbonBadge>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-maroon-950">
            8th Standard through 2nd PUC
          </h2>
          <p className="mt-4 font-body text-ink-700">
            Every batch runs on the same principle: understand it properly, and the marks
            take care of themselves.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSES.map((level, i) => (
            <ClassCard key={level.slug} level={level} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/classes"
            className="focus-ring inline-flex items-center gap-2 text-red-700 font-semibold hover:text-maroon-950"
          >
            See full class details
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream-100 border-y-2 border-ink-900/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
          <div className="max-w-2xl">
            <RibbonBadge>Why Pranamya Tutorials</RibbonBadge>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-maroon-950">
              What parents notice first
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {WHY_US.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span className="font-display font-black text-3xl text-gold-500/80 leading-none w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-maroon-950">{item.title}</h3>
                  <p className="mt-1.5 font-body text-sm text-ink-700 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="relative overflow-hidden bg-red-700 rounded-sm px-6 sm:px-14 py-14 text-center">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold-500/20" />
          <div className="absolute -bottom-14 -left-10 w-52 h-52 rounded-full bg-maroon-950/20" />
          <div className="relative">
            <RibbonBadge tone="gold">Admission open</RibbonBadge>
            <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl text-cream-50">
              Seats are limited on purpose.
            </h2>
            <p className="mt-4 font-body text-cream-100/85 max-w-xl mx-auto">
              We keep batches small so every student gets real attention. Reach out today
              to check seat availability for your child&rsquo;s class.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="focus-ring bg-gold-500 hover:bg-gold-300 text-maroon-950 font-semibold px-6 py-3.5 rounded-sm transition-colors"
              >
                Enquire now
              </Link>
              <a
                href={`tel:${SITE.phonesRaw[0]}`}
                className="focus-ring flex items-center gap-2 border-2 border-cream-50/40 hover:border-cream-50/70 text-cream-50 font-semibold px-6 py-3.5 rounded-sm transition-colors"
              >
                <Phone size={18} />
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
