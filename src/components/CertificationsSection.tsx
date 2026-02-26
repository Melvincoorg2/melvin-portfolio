import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certs = [
  {
    title: "Junior Penetration Tester (Jr. Pentester Path)",
    issuer: "TryHackMe",
    image: "/tryhackme.jpg",
  },
  {
    title: "Cloud-Native Application Development",
    issuer: "IBM",
    image: "/IBM.jpg",
  },
  {
    title: "AI-DevOps Engineer Certification",
    issuer: "Rooman Technologies",
    image: "/rooman.jpg",
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Verified Credentials
        </h2>

        <h3 className="text-3xl font-bold mb-12 text-foreground">
          Certifications
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:glow-purple hover:border-glow-purple ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70"></div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 text-center">
                <h4 className="text-sm font-bold text-foreground mb-2">
                  {cert.title}
                </h4>

                <p className="text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;