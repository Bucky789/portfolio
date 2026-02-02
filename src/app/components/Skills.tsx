import { Code2, Layers, Cpu, Cloud, Database, Wrench } from "lucide-react";

import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPython,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiAngular,
  SiNodedotjs,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiTensorflow,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";

/* ---------------- TYPES ---------------- */

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillCardProps = {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
};

/* ---------------- CARD ---------------- */

const SkillCard = ({ title, icon: Icon, items }: SkillCardProps) => {
  return (
    <div
      className="
        rounded-3xl
        p-6
        transition-all
        bg-[#00ADB5]/15
        backdrop-blur-xl
        border border-[#00ADB5]/30
        hover:bg-[#00ADB5]/25
        hover:-translate-y-[2px]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-2xl bg-black/30 text-white">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
      </div>

      {/* Items */}
      <div className="grid grid-cols-2 gap-3">
        {items.map(({ name, icon: ItemIcon }) => (
          <div
            key={name}
            className="
              flex items-center gap-2
              bg-black/20
              px-3 py-2
              rounded-xl
              text-white/80
              text-xs
            "
          >
            <ItemIcon className="text-base text-white/90" />
            <span className="uppercase tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- SECTION ---------------- */

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-2">
          TECHNICAL STACK
        </h2>
        <p className="text-gray-500 max-w-xl">
          Languages, frameworks, and infrastructure tools I use to design and
          ship production systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          title="Languages"
          icon={Code2}
          items={[
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Java", icon: SiOpenjdk },
            { name: "Python", icon: SiPython },
            { name: "Swift", icon: SiSwift },
            { name: "SQL", icon: SiSqlite },
          ]}
        />

        <SkillCard
          title="Frameworks"
          icon={Layers}
          items={[
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Angular", icon: SiAngular },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Django", icon: SiDjango },
            { name: "Flask", icon: SiFlask },
            { name: "FastAPI", icon: SiFastapi },
          ]}
        />

        <SkillCard
          title="AI / ML Tools"
          icon={Cpu}
          items={[
            { name: "OpenAI API", icon: SiOpenai },
            { name: "Gemini", icon: SiGoogle },
            { name: "Ollama (Local LLMs)", icon: Cpu }, 
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Vector Embeddings", icon: Cpu },
            { name: "RAG Pipelines", icon: Cpu },
          ]}
        />

        <SkillCard
          title="Cloud & DevOps"
          icon={Cloud}
          items={[
            { name: "Docker", icon: SiDocker },
            { name: "AWS", icon: SiAmazon },
            { name: "Vercel", icon: SiVercel },
          ]}
        />

        <SkillCard
          title="Databases"
          icon={Database}
          items={[
            { name: "SQLServer", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "SQLite", icon: SiSqlite },
          ]}
        />

        <SkillCard
          title="Tools"
          icon={Wrench}
          items={[
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Linux", icon: SiLinux },
            { name: "Postman", icon: SiPostman },
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
