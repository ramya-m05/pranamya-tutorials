import type { Metadata } from "next";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import RibbonBadge from "@/components/RibbonBadge";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Pranamya Tutorials",
  description:
    "Learn about Pranamya Tutorials' teaching philosophy — strong basics, honest feedback, and personal attention for every student in Rajajinagar, Bengaluru.",
};

const VALUES = [
  {
    title: "Concepts before shortcuts",
    detail:
      "We'd rather spend an extra week on a topic than have a student memorize a method they don't understand. Concepts stick; shortcuts don't survive the exam hall.",
  },
  {
    title: "Small batches, real attention",
    detail:
      "Every batch is capped deliberately. A teacher who knows which student struggles with which chapter can actually help — a teacher facing sixty faces can't.",
  },
  {
    title: "Tests that mean something",
    detail:
      "Regular, chapter-wise tests aren't there to rank students against each other. They're there to catch a gap while it's still small and easy to fix.",
  },
  {
    title: "Honest conversations with parents",
    detail:
      "Performance tracking is shared as it is — where a student is doing well, and where they need to put in more work. No sugar-coating, no unnecessary alarm either.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-maroon-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <RibbonBadge>About us</RibbonBadge>
          <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl text-cream-50">
            Teaching that starts with the basics
          </h1>
          <p className="mt-5 font-body text-lg text-cream-100/80 max-w-2xl mx-auto">
            Pranamya Tutorials was built on one belief: a student who understands the
            fundamentals will always find their way through a tough exam question. We
            focus there first, and the results follow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-start">
          <span className="font-display italic text-6xl text-gold-500/70 leading-none">
            &ldquo;
          </span>
          <p className="font-display text-2xl sm:text-3xl leading-snug text-maroon-950 italic">
            Strong basics. Bright future. It sounds simple, but it&rsquo;s the whole
            philosophy behind every class we run.
          </p>
        </div>
      </section>

      <section className="bg-cream-100 border-y-2 border-ink-900/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <div className="max-w-2xl">
            <RibbonBadge tone="gold">How we teach</RibbonBadge>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-maroon-950">
              What Pranamya Tutorials stands for
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {VALUES.map((v) => (
              <div key={v.title} className="border-l-4 border-red-700 pl-5">
                <h3 className="font-display font-semibold text-lg text-maroon-950">{v.title}</h3>
                <p className="mt-2 font-body text-sm text-ink-700 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-20 text-center">
        <h2 className="font-display font-bold text-3xl text-maroon-950">
          Want to see the classroom for yourself?
        </h2>
        <p className="mt-4 font-body text-ink-700">
          Book a free demo class, or call us directly to ask any questions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="focus-ring flex items-center gap-2 bg-red-700 hover:bg-maroon-900 text-cream-50 font-semibold px-6 py-3.5 rounded-sm shadow-[3px_3px_0_var(--gold-500)] transition-colors"
          >
            Book a free demo
            <ArrowRight size={18} />
            <WhatsAppButton></WhatsAppButton>
          </Link>
          <a
            href={`tel:${SITE.phonesRaw[0]}`}
            className="focus-ring flex items-center gap-2 border-2 border-ink-900/20 hover:border-ink-900/40 text-ink-900 font-semibold px-6 py-3.5 rounded-sm transition-colors"
          >
            <Phone size={18} />
            {SITE.phones[0]}
          </a>
        </div>
      </section>
    </>
  );
}
