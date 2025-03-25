/**
 * @copyright 2025 logansherwin
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Adrenaline iOS App',
    tags: [
      'Amazon Web Services',
      'Computer Vision',
      'Swift',
      'React',
      'TypeScript',
    ],
    projectLink: 'https://github.com/spencerdearman/adrenaline-app',
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Path Tracing Engine',
    tags: ['C++', 'GPU Acceleration'],
    projectLink: 'https://github.com/lsherwin10/path-tracing-engine',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work Portfolio</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
