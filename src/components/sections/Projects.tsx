import React from "react";
import { Skill } from "../common";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
         text-transparent text-center"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              title="Cloud Platform"
              description="Scalable cloud infrastructure for your business"
              skills={["React", "Node.js", "AWS", "Docker"]}
              href="#"
            />
            <Project
              title="Cloud Platform"
              description="Scalable cloud infrastructure for your business"
              skills={["React", "Node.js", "AWS", "Docker"]}
              href="#"
            />
            <Project
              title="Cloud Platform"
              description="Scalable cloud infrastructure for your business"
              skills={["React", "Node.js", "AWS", "Docker"]}
              href="#"
            />
            <Project
              title="Cloud Platform"
              description="Scalable cloud infrastructure for your business"
              skills={["React", "Node.js", "AWS", "Docker"]}
              href="#"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const Project: React.FC<{
  title: string;
  description: string;
  skills: string[];
  href: string;
}> = ({ title, description, skills, href }) => {
  return (
    <div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]
       transition-all"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, key) => (
          <Skill key={key} skill={skill} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href={href}
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
