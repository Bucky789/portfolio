"use client";

import { useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "WhiteToMove - Chess.AI",
    description:
      "A modern web-based chess application built with React, featuring human vs human play and human vs Stockfish AI.",
    tech: ["React.js", "Vercel", "Git & GitHub"],
    link: "https://white-to-move.vercel.app/",
    github: "https://github.com/Bucky789/chess-ai",
    img: "/chess.png",
  },
  {
    title: "ATS Resume Checker",
    description:
      "A privacy-first ATS resume analyzer using deterministic scoring logic instead of black-box AI.",
    tech: [
      "Chrome Extension",
      "Node.js",
      "Express.js",
      "Ollama (Phi-3)",
      "Docker",
    ],
    link: "https://github.com/Bucky789/ats-resume-checker",
    github: "https://github.com/Bucky789/ats-resume-checker",
    img: "/ats.png",
  },
  {
    title: "AI Voice Conversion Studio",
    description:
      "An end-to-end AI-powered Voice Conversion web app built using Flask (backend) and React (frontend). This project uses Retrieval-based Voice Conversion (RVC) models to transform voices in real time or from recordings — ideal for creative projects, music production, or experimentation with voice synthesis.",
    tech: [
      "React + Vite",
      "Tailwind CSS",
      "Flask (Python)",
      "PyTorch",
      "RVC Model Files",
    ],
    link: "https://github.com/Bucky789/AI-Voice-Conversion-Studio",
    github: "https://github.com/Bucky789/AI-Voice-Conversion-Studio",
    img: "/AIStudio.jpg",
  },
  {
    title: "Minecraft Manhunt Plugin",
    description:
      "A custom Minecraft plugin that brings Dream-style Manhunt gameplay to your local Spigot server! One player is the Speedrunner, and the rest are Hunters equipped with compasses that track the runner — even in the Nether.",
    tech: ["Java"],
    link: "https://github.com/Bucky789/MinecraftManhunt",
    github: "https://github.com/Bucky789/MinecraftManhunt",
    img: "/MC.jpg",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollOneCard = (direction: "left" | "right") => {
    if (!scrollRef.current || !cardRef.current) return;

    const cardWidth = cardRef.current.offsetWidth + 24; // card width + gap

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold mb-12 tracking-tighter">
        FEATURED WORK
      </h2>

      {/* Layout: arrows outside */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={() => scrollOneCard("left")}
          className="
            hidden md:flex
            h-14 w-14 items-center justify-center
            rounded-full
            bg-background/80
            backdrop-blur-md
            border border-border
            text-foreground
            transition-all
            hover:bg-accent/20
          "
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="
    flex gap-6
    overflow-x-auto
    scroll-smooth
    touch-pan-x
    snap-x snap-mandatory
    hide-scrollbar
  "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="
                shrink-0
                w-[100%]
                sm:w-[90%]
                md:w-[520px]
                lg:w-[560px]
                group relative rounded-3xl overflow-hidden
                border border-border bg-card
              "
            >
              {/* Image */}
              <div className="relative h-72">
                <Image
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-base mb-6">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollOneCard("right")}
          className="
            hidden md:flex
            h-14 w-14 items-center justify-center
            rounded-full
            bg-background/80
            backdrop-blur-md
            border border-border
            text-foreground
            transition-all
            hover:bg-accent/20
          "
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mobile hint */}
      <p className="mt-6 text-xs text-gray-500 md:hidden text-center">
        Swipe to view projects →
      </p>
    </section>
  );
};

export default Projects;
