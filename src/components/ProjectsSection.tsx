import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Cloud-Native E-Commerce Platform",
    bullets: [
      "Designed and implemented a multi-tier architecture with RESTful APIs and relational database integration",
      "Containerized services using Docker to ensure scalable and consistent deployments",
      "Deployed on IBM Cloud with CI/CD automation for streamlined release management",
    ],
    tech: ["Docker", "FastAPI", "REST APIs", "IBM Cloud", "CI/CD"],
  },
  {
    title: "Hand Gesture Based Virtual Control System",
    bullets: [
      "Engineered a real-time computer vision system for gesture-based interaction",
      "Implemented hand landmark detection using OpenCV and MediaPipe",
      "Built virtual mouse and keyboard control for touch-free system operations",
    ],
    tech: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    title: "Semantic Analyzer for Sanskrit Scripts",
    bullets: [
      "Developed a CNN + LSTM OCR pipeline for handwritten script recognition",
      "Integrated FLAN-T5 for semantic correction and contextual enhancement",
      "Used NLLB-200 for multilingual translation and structured output processing",
    ],
    tech: ["CNN", "LSTM", "FLAN-T5", "NLLB-200", "Transformers"],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Systems
        </h2>

        <h3 className="text-3xl font-bold mb-10 text-foreground">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:glow-cyan hover:border-glow-cyan group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow mb-4" />

              <h4 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <ul className="space-y-2 mb-6">
                {project.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">›</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
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

export default ProjectsSection;