const Footer = () => {
  return (
    <footer
      id="contact"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-white/20 mt-10 bg-transparent text-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2 text-white">
            LET&apos;S BUILD <br /> SOMETHING GREAT.
          </h2>
          <p className="text-white/60 text-sm">
            Currently seeking new opportunities.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-2">
          <a
            href="mailto:manthan123sumbhe@gmail.com"
            className="text-lg font-semibold text-white hover:text-[#00ADB5] transition-colors"
          >
            Manthan Sumbhe
          </a>

          <div className="flex gap-4 text-sm text-white/60">
            <a
              href="https://www.linkedin.com/in/manthan-sumbhe"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Bucky789"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-4 border-t border-white/20 text-xs text-white/50">
        © 2026 Manthan Sumbhe.
      </div>
    </footer>
  );
};

export default Footer;
