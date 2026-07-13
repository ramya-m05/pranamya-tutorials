export default function Sunburst({ className = "" }: { className?: string }) {
  const rayCount = 24;
  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (360 / rayCount) * i;
    const long = i % 2 === 0;
    return (
      <rect
        key={i}
        x={-2.5}
        y={-190}
        width={long ? 5 : 3}
        height={long ? 70 : 46}
        rx={2}
        fill="var(--gold-500)"
        opacity={long ? 0.9 : 0.55}
        transform={`rotate(${angle})`}
      />
    );
  });

  return (
    <svg
      viewBox="-200 -200 400 400"
      className={className}
      aria-hidden="true"
    >
      <circle r={196} fill="none" stroke="var(--gold-500)" strokeOpacity={0.25} strokeWidth={1} />
      <g>{rays}</g>
    </svg>
  );
}
