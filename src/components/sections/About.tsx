import { Skill } from "../common";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Next.js", "Tailwind CSS", "Sass"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
         text-transparent text-center"
          >
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a full-stack developer based in Seattle, WA. I have experience
              with a variety of technologies, including React, Node.js, and
              MongoDB. I'm passionate about building user-friendly web
              applications and learning new technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <Skill key={key} skill={skill} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <Skill key={key} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Joint BS/MS in Computer Science</strong> - University
                  of Chicago (2019 - 2023)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Cloud Computing, ...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Development Engineer II at Amazon (Apr. 2025 -
                    Present)
                  </h4>
                  <p>Worked on the Amazon Private Brands team.</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Development Engineer at Amazon (Sep. 2023 - Apr.
                    2025)
                  </h4>
                  <p>Worked on the Amazon Private Brands team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
