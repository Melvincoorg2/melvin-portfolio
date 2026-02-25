import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Simpragma Solutions",
    duration: "7 Months",
    logs: [
      "Designed and implemented multilingual NER modules integrated into a production-grade TTS pipeline",
      "Improved dynamic pronunciation handling across multiple languages for real-time voice systems",
      "Fine-tuned Whisper STT and engineered a custom noise-reduction pipeline — improved transcription accuracy by 20%+",
      "Developed a real-time privacy-focused number masking system for secure voice stream processing",
      "Refactored and deployed a Resume Analyzer as a scalable FastAPI microservice for frontend integration",
      "Built an automated appointment-booking voicebot with webhook-based Google Sheets integration for persistent data storage",
    ],
  },
  {
    role: "AI-DevOps Engineer",
    company: "Rooman Technologies & IBM",
    duration: "4 Months",
    logs: [
      "Containerized backend and AI services using Docker for consistent cross-environment deployments",
      "Designed and implemented CI/CD pipelines using Jenkins to automate build and deployment workflows",
      "Deployed and managed cloud-native multi-tier applications on IBM Cloud",
      "Applied structured prompt-engineering and response validation techniques to improve LLM reliability in production testing",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Production Deployment Logs
        </h2>

        <h3 className="text-3xl font-bold mb-10 text-foreground">
          Experience
        </h3>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`glass rounded-xl p-8 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xl font-bold text-foreground">
                  {exp.role}
                </span>

                <span className="text-muted-foreground">—</span>

                <span className="text-primary font-medium">
                  {exp.company}
                </span>

                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {exp.duration}
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                {exp.logs.map((log, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 text-foreground/70"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-green shrink-0" />
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;