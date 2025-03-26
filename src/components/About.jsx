/**
 * @copyright 2025 logansherwin
 * @license Apache-2.0
 */

// Gets number of full years since my start date at Amazon (2023-09-11)
const experienceYears =
  new Date().getFullYear() -
  2023 -
  (new Date().getMonth() < 8 ||
  (new Date().getMonth() === 8 && new Date().getDate() < 11)
    ? 1
    : 0);
const aboutItems = [
  {
    label: 'Programming Languages',
    number: 8,
  },
  {
    label: 'Years of Experience',
    number: experienceYears,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Logan Sherwin, a software engineer currently
            working for Amazon Private Brands. I specialize in building scalable
            data processing systems that streamline operations, improve
            efficiency, and enhance product recommendations across large-scale
            retail marketplaces. My core technical interests lie in machine
            learning, natural language processing, and computer vision, and I am
            always looking for new opportunities to innovate in these spaces and
            explore new challenges.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
