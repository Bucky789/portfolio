"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      <Hero
        onExplore={() => {
          setShowSite(true)
        }}
      />
      {showSite && (
        <>
          <Projects />
          <Skills />
        </>
      )}
    </>
  );
}
