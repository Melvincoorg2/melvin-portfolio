import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const certs = [
  {
    title: "Junior Penetration Tester (Jr. Pentester Path)",
    issuer: "TryHackMe",
  },
  {
    title: "Cloud-Native Application Development",
    issuer: "IBM",
  },
  {
    title: "AI-DevOps Engineer Certification",
    issuer: "Rooman Technologies",
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Verified Credentials
        </h2>

        <h3 className="text-3xl font-bold mb-10 text-foreground">
          Certifications
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass rounded-xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:glow-purple hover:border-glow-purple group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4 group-hover:text-secondary transition-colors" />

              <h4 className="text-sm font-bold text-foreground mb-1">
                {cert.title}
              </h4>

              <p className="text-xs text-muted-foreground">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;