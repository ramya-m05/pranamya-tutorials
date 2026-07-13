import { Check } from "lucide-react";
import type { ClassLevel } from "@/lib/data";

export default function ClassCard({ level, index }: { level: ClassLevel; index: number }) {
  return (
    <div className="reveal flex flex-col bg-cream-50 border-2 border-ink-900/10 rounded-sm overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,0.06)]">
      <div
        className="px-5 py-4 relative"
        style={{ background: level.hex }}
      >
        <p className="font-utility text-[11px] uppercase tracking-[0.2em] text-cream-50/70">
          {level.eyebrow}
        </p>
        <h3 className="font-display text-xl font-semibold text-cream-50">{level.label}</h3>
      </div>
      <ul className="flex flex-col gap-3 p-5 flex-1">
        {level.points.map((point) => (
          <li key={point} className="flex gap-2.5 items-start text-sm font-body text-ink-700">
            <Check size={18} className="shrink-0 mt-0.5" style={{ color: level.hex }} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
