'use client';
import { useCounter } from '@/hooks/useCounter';

function StatItem({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-bold text-4xl md:text-6xl text-[#153E8C] dark:text-white mb-2">
        {count}{suffix}
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0E1117]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        <StatItem value={5} label="Games Published" />
        <StatItem value={150} label="Downloads" suffix="K+" />
        <StatItem value={98} label="Happy Players" suffix="%" />
        <StatItem value={12} label="Projects Completed" />
      </div>
    </section>
  );
}