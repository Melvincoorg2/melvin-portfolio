import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Establish Connection
        </h2>

        <h3 className="text-3xl font-bold mb-4 text-foreground">
          Contact
        </h3>

        <p className="text-muted-foreground mb-10 max-w-xl">
          Open to full-time Software Engineering opportunities.  
          Interested in backend systems, cloud-native architectures, and scalable production-grade applications.
        </p>

        <div
          className={`glass rounded-xl p-8 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="tel:8431578255"
              className="flex items-center gap-3 group"
            >
              <Phone className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
              <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                8431578255
              </span>
            </a>

            <a
              href="mailto:melvindsouza2003@gmail.com"
              className="flex items-center gap-3 group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
              <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                melvindsouza2003@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/melvin-dsouza-86677424a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
              <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;