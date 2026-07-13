import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Landmark } from "lucide-react";
import RibbonBadge from "@/components/RibbonBadge";
import ClassCard from "@/components/ClassCard";
import { CLASSES, FACTS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Classes | Pranamya Tutorials",
  description:
    "Coaching across State, CBSE & ICSE for 8th, 9th, 10th Standard, and State Board 1st & 2nd PUC at Pranamya Tutorials, Rajajinagar, Bengaluru.",
};

const FACT_ICONS = [BookOpen, Users, Landmark];

export default function ClassesPage() {
  return (
    <>
      <section className="bg-maroon-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <RibbonBadge>Classes for</RibbonBadge>
          <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl text-cream-50">
            8th Standard to 2nd PUC
          </h1>
          <p className="mt-5 font-body text-lg text-cream-100/80 max-w-2xl mx-auto">
            State, CBSE &amp; ICSE batches for 8th–10th, and State Board PUC, kept
            small on purpose, with materials provided and
            progress tracked every step of the way.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-6 -mt-10 relative z-10">
        <div className="bg-cream-50 border-2 border-ink-900/10 rounded-sm shadow-[4px_4px_0_rgba(0,0,0,0.06)] grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink-900/10">
          {FACTS.map((fact, i) => {
            const Icon = FACT_ICONS[i];
            return (
              <div key={fact.label} className="flex items-center gap-3 px-6 py-5">
                <Icon size={22} className="text-red-700 shrink-0" />
                <div>
                  <p className="font-body font-semibold text-sm text-maroon-950">{fact.label}</p>
                  <p className="font-body text-xs text-ink-700/70">{fact.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSES.map((level, i) => (
            <ClassCard key={level.slug} level={level} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-cream-100 border-y-2 border-ink-900/5">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-maroon-950">
            Not sure which batch fits?
          </h2>
          <p className="mt-3 font-body text-ink-700">
            Call us or send an enquiry — we&rsquo;ll help you pick the right one after a
            quick chat about your child&rsquo;s current level.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring flex items-center gap-2 bg-red-700 hover:bg-maroon-900 text-cream-50 font-semibold px-6 py-3.5 rounded-sm shadow-[3px_3px_0_var(--gold-500)] transition-colors"
            >
              Ask us a question
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE.phonesRaw[0]}`}
              className="focus-ring flex items-center gap-2 border-2 border-ink-900/20 hover:border-ink-900/40 text-ink-900 font-semibold px-6 py-3.5 rounded-sm transition-colors"
            >
              {SITE.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
