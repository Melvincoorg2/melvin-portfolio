import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 px-6 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE — TEXT */}
        <div className="text-center lg:text-left lg:w-1/2">

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 lg:whitespace-nowrap opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-gradient">MELVIN DSOUZA</span>
          </h1>

          <h2
            className="text-xl sm:text-2xl text-primary font-semibold mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Software Engineer
          </h2>

          <p
            className="text-muted-foreground text-lg max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            Software Engineer with strong foundations in data structures, algorithms, and backend development, experienced
            in building scalable, distributed, and production-grade systems using Python and modern cloud technologies.
          </p>

          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-cyan"
            >
              View Projects
            </a>

            <a
              href="/Melvin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/melvin-dsouza-86677424a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-secondary/30 text-secondary font-semibold text-sm hover:bg-secondary/10 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — PROFILE IMAGE */}
        <div
          className="relative lg:w-1/2 flex justify-center lg:justify-end opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative group">

            {/* Subtle gradient glow border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>

            <img
              src="/profile1.jpg"
              alt="Melvin Dsouza"
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-64 lg:h-64 object-cover rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500"
            />
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;