import Image from "next/image";
import Chatbot from "./Chatbot";

type HeroProps = {
  onExplore: () => void;
};

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-transparent text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch lg:min-h-[520px]">

        {/* COLUMN 1: Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20 ring-1 ring-[#00ADB5]/30 shadow-xl">
            <Image
              src="/me.jpg"
              alt="Manthan profile photo"
              fill
              className="object-cover grayscale-[10%]"
              priority
            />
          </div>
        </div>

        {/* COLUMN 2: Headline + Text */}
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Architecting systems with <br />
            <span className="text-white/60">code and precision.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
            I'm a Software Engineer specializing in building scalable,
            production-grade systems with a strong focus on backend
            architecture and system design.
          </p>

          <button
            onClick={onExplore}
            className="glass w-fit mx-auto lg:mx-0 px-8 py-4 rounded-full font-bold text-white hover:bg-white/10 transition-all"
          >
            Explore the website
          </button>
        </div>

        {/* COLUMN 3: Mini Chatbot */}
        <div className="flex justify-center lg:justify-end">
          <Chatbot />
        </div>

      </div>
    </section>
  );
};

export default Hero;
