export default function TechStack() {
  const techs = ["Unity", "C#", "Android", "Firebase", "Git", "GitHub", "Blender", "Visual Studio"];
  
  return (
    <section className="py-24 max-w-6xl mx-auto text-center px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
      
      <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-10 bg-brand-light dark:bg-brand-dark inline-block px-4 relative z-10">
        Powering Our Production Pipeline
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto relative z-10">
        {techs.map((t, idx) => (
          <span 
            key={idx} 
            className="font-medium text-sm tracking-tight text-neutral-800 dark:text-neutral-300 bg-white dark:bg-[#0E1117]/60 border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 rounded-full shadow-sm hover:border-[#153E8C]/30 dark:hover:border-white/20 hover:scale-105 transition-all duration-200 cursor-default"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}