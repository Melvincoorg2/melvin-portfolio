const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <p className="text-sm text-primary font-medium tracking-wide">
        Open to Full-Time Software Engineering Opportunities
      </p>

      <p className="text-xs text-muted-foreground">
        Built with React, TypeScript, and a passion for scalable systems.
      </p>

      <p className="text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} Melvin Dsouza. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;