/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          {/* Name */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-2">
            Logan Sherwin
          </h2>

          {/* Subheadings with reduced margins */}
          <p className="headline-sub mb-1">Software Engineer</p>
          <p className="headline-sub mb-1">BS/MS in Computer Science</p>
          <p className="headline-sub mb-6">University of Chicago 2023</p>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a href="/files/Logan Sherwin Resume.pdf" download>
              <ButtonPrimary label="Download Resume" icon="download" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Logan Sherwin"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
