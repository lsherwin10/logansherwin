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
    imgSrc: '/images/amazon.svg',
    title: 'SageMaker Model Deployment Automation',
    tags: ['Amazon Web Services', 'Docker', 'Python', 'TypeScript'],
  },
  {
    imgSrc: '/images/amazon.svg',
    title: 'Recommendation Relevance Monitoring',
    tags: ['Amazon Web Services', 'Scala', 'Python', 'TypeScript'],
  },
  {
    imgSrc: '/images/amazon.svg',
    title: 'Data Pipeline Marketplace Migration',
    tags: ['Amazon Web Services', 'Scala', 'MapReduce', 'TypeScript'],
  },
  {
    imgSrc: '/images/amazon.svg',
    title: 'Data Ingestion Pipeline Optimization',
    tags: ['Amazon Web Services', 'Scala', 'SQL', 'MapReduce'],
  },
  {
    imgSrc: '/images/adrenaline.png',
    title: 'Adrenaline iOS App',
    tags: ['Amazon Web Services', 'Swift', 'React', 'TypeScript'],
    projectLink: 'https://github.com/spencerdearman/adrenaline-app',
  },
  {
    imgSrc: '/images/path_tracing_engine.png',
    title: 'Path Tracing Engine',
    tags: ['C++', 'GPU Acceleration'],
    projectLink: 'https://github.com/lsherwin10/path-tracing-engine',
  },
  {
    imgSrc: '/images/diving_pose_estimation.png',
    title: 'Diving Pose Estimation',
    tags: ['Python', 'Computer Vision'],
    projectLink: 'https://github.com/lsherwin10/diving-cv',
  },
  {
    imgSrc: '/images/zillow_web_scraper.png',
    title: 'Zillow Web Scraper',
    tags: ['Python'],
    projectLink: 'https://github.com/lsherwin10/re-analysis',
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
