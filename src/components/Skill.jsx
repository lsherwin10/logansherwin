/**
 * @copyright 2026 logansherwin
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/typescript.svg',
    label: 'TypeScript',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/scala.svg',
    label: 'Scala',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/cpp.svg',
    label: 'C++',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/swift.svg',
    label: 'Swift',
    desc: 'Programming Language',
  },

  {
    imgSrc: '/images/nim.svg',
    label: 'Nim',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/aws.svg',
    label: 'Amazon Web Services',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: '/images/gcp.svg',
    label: 'Google Cloud Platform',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: '/images/bigquery.svg',
    label: 'BigQuery',
    desc: 'Data Platform',
  },
  {
    imgSrc: '/images/iceberg.svg',
    label: 'Apache Iceberg',
    desc: 'Data Format',
  },
  {
    imgSrc: '/images/sql.svg',
    label: 'SQL',
    desc: 'Database Language',
  },
  {
    imgSrc: '/images/spark.svg',
    label: 'Apache Spark',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/docker.svg',
    label: 'Docker',
    desc: 'Platform',
  },
  {
    imgSrc: '/images/git.svg',
    label: 'Git',
    desc: 'Version Control',
  },
  {
    imgSrc: '/images/mercurial.svg',
    label: 'Mercurial',
    desc: 'Version Control',
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Skills</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          performant and scalable systems.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
