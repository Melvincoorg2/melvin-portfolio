import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const specs = [
  { key: "Name", value: "Melvin Dsouza" },
  { key: "Role", value: "Software Engineer" },
  {
    key: "Core Expertise",
    value:
      "Data Structures & Algorithms · Backend Engineering · Distributed Systems · Cloud-Native Applications · AI/ML Integration · Secure System Design",
  },
  {
    key: "Engineering Approach",
    value:
      "Production-first mindset with focus on scalability, reliability, performance, and clean architecture.",
  },
  {
    key: "Education",
    value: "B.E. Computer Science & Engineering",
  },
  {
    key: "Institution",
    value:
      "Maharaja Institute of Technology Thandavapura, Mysore",
  },
  {
    key: "Academic Record",
    value: "CGPA: 8.7 / 10 | Graduating 2025",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // System Specification
        </h2>

        <h3 className="text-3xl font-bold mb-10 text-foreground">
          About
        </h3>

        <div
          className={`glass rounded-xl p-8 relative overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 scanline pointer-events-none" />

          <div className="relative space-y-4">
            {specs.map((spec, i) => (
              <div
                key={spec.key}
                className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-white/5 last:border-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-primary text-sm font-mono min-w-[160px] shrink-0">
                  {spec.key}:
                </span>

                <span className="text-foreground/80 text-sm leading-relaxed">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;