import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Java", "SQL"],
    color: "cyan",
  },
  {
    title: "Computer Science Fundamentals",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Complexity Analysis",
      "System Design",
    ],
    color: "purple",
  },
  {
    title: "Backend & Architecture",
    skills: [
      "Flask",
      "FastAPI",
      "Django",
      "RESTful APIs",
    ],
    color: "cyan",
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
    color: "purple",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "CI/CD Pipelines",
      "Jenkins",
      "Version Control",
      "Git",
      "GitHub",
    ],
    color: "cyan",
  },
  {
    title: "Applied AI / ML",
    skills: [
      "Transformers",
      "Whisper STT",
      "Text-to-Speech Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Scikit-learn",
      "Neural Networks",
    ],
    color: "purple",
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Capabilities
        </h2>

        <h3 className="text-3xl font-bold mb-10 text-foreground">
          Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                cat.color === "cyan"
                  ? "hover:glow-cyan hover:border-glow-cyan"
                  : "hover:glow-purple hover:border-glow-purple"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h4
                className={`text-sm font-semibold mb-4 ${
                  cat.color === "cyan" ? "text-primary" : "text-secondary"
                }`}
              >
                {cat.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-foreground/70 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;