"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { CLASS_OPTIONS } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("loading");
  setErrorMsg("");

  const form = e.currentTarget;

  const data = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    classInterested: (
      form.elements.namedItem("classInterested") as HTMLSelectElement
    ).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  try {
    const formData = new URLSearchParams();

formData.set("entry.2005620554", data.name);
formData.set("entry.1045781291", data.phone);
formData.set("entry.1065046570", data.classInterested);
formData.set("entry.839337160", data.message);

const response = await fetch(
  "https://docs.google.com/forms/d/e/1FAIpQLSee9B1iWzf8-dj8aFO4ssbht7aDxe0g9x-etcaiCHykLdstAw/formResponse",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  }
);

console.log(response.status);
console.log(await response.text());

setStatus("success");
form.reset();

    setStatus("success");
    form.reset();
  } catch (err) {
    setStatus("error");
    setErrorMsg(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  }
}
  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10 px-6 border-2 border-red-700/20 rounded-sm bg-gold-100">
        <CheckCircle2 size={40} className="text-red-700" />
        <h3 className="font-display text-xl font-semibold text-maroon-950">Enquiry sent!</h3>
        <p className="font-body text-sm text-ink-700 max-w-sm">
          Thank you for reaching out to Pranamya Tutorials. Our team will call you back shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="focus-ring mt-2 text-sm font-semibold text-red-700 underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block font-body text-sm font-semibold text-ink-900 mb-1.5">
          Student&rsquo;s name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g. Ananya Reddy"
          className="focus-ring w-full rounded-sm border-2 border-ink-900/15 bg-cream-50 px-4 py-3 font-body text-ink-900 placeholder:text-ink-700/40"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-sm font-semibold text-ink-900 mb-1.5">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="[0-9]{7,15}"
          placeholder="e.g. 98765 43210"
          className="focus-ring w-full rounded-sm border-2 border-ink-900/15 bg-cream-50 px-4 py-3 font-body text-ink-900 placeholder:text-ink-700/40"
        />
      </div>

      <div>
        <label htmlFor="classInterested" className="block font-body text-sm font-semibold text-ink-900 mb-1.5">
          Class interested in
        </label>
        <select
          id="classInterested"
          name="classInterested"
          required
          defaultValue=""
          className="focus-ring w-full rounded-sm border-2 border-ink-900/15 bg-cream-50 px-4 py-3 font-body text-ink-900"
        >
          <option value="" disabled>
            Select a class
          </option>
          {CLASS_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-semibold text-ink-900 mb-1.5">
          Message <span className="font-normal text-ink-700/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about what you're looking for"
          className="focus-ring w-full rounded-sm border-2 border-ink-900/15 bg-cream-50 px-4 py-3 font-body text-ink-900 placeholder:text-ink-700/40 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-700 font-body">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring flex items-center justify-center gap-2 bg-red-700 hover:bg-maroon-900 disabled:opacity-70 text-cream-50 font-semibold px-6 py-3.5 rounded-sm shadow-[3px_3px_0_var(--gold-500)] hover:shadow-[1px_1px_0_var(--gold-500)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
