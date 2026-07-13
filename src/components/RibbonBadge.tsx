export default function RibbonBadge({
  children,
  tone = "red",
}: {
  children: React.ReactNode;
  tone?: "red" | "gold";
}) {
  const bg = tone === "gold" ? "bg-gold-500 text-maroon-950" : "bg-red-700 text-cream-50";
  const foldBg = tone === "gold" ? "var(--gold-600)" : "var(--maroon-950)";

  return (
    <span className="inline-flex">
      <span className={`ribbon relative inline-block px-5 py-2 pr-7 font-utility text-xs sm:text-sm tracking-[0.15em] uppercase font-medium ${bg}`}>
        {children}
        <span className="ribbon-fold" style={{ background: foldBg }} />
      </span>
    </span>
  );
}
