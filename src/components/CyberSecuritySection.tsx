import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = ["Nmap", "Burp Suite", "Hydra", "Wireshark", "Metasploit"];

const CyberSecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="security" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          // Security Clearance
        </h2>

        <h3 className="text-3xl font-bold mb-10 text-foreground">
          Cyber Security
        </h3>

        <div
          className={`rounded-xl border border-green/20 bg-black/40 p-8 font-mono transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-green animate-pulse" />
            <span className="text-green text-lg font-bold tracking-widest">
              ACCESS GRANTED
            </span>
          </div>

          <div className="space-y-3 text-sm text-green/80">
            <p>
              <span className="text-green">$</span> tryhackme --stats
            </p>

            <p className="pl-4 text-foreground/60">
              → 90+ rooms completed | Focused on Web Security, Networking, and Offensive Testing Fundamentals
            </p>

            <p className="mt-4">
              <span className="text-green">$</span> security_mindset --philosophy
            </p>

            <p className="pl-4 text-foreground/60">
              → Security-first approach to system design with emphasis on input validation, data protection, and secure deployments
            </p>

            <p className="mt-4">
              <span className="text-green">$</span> ls ./tools/
            </p>

            <div className="pl-4 flex flex-wrap gap-2 mt-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded border border-green/20 text-green/70 text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-4 flex items-center">
              <span className="text-green">$</span>
              <span className="ml-1 border-r-2 border-green animate-typing-cursor pr-1">
                _
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;