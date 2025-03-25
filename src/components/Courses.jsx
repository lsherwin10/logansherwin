/**
 * @copyright 2025 logansherwin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import CourseTile from './CourseTile';

// Example array of courses with full names and course codes
const courses = [
  { courseName: 'Advanced C++', courseCode: 'MPCS 51045' },
  { courseName: 'Computer Vision', courseCode: 'CMSC 25040' },
  { courseName: 'Computer Architecture', courseCode: 'CMSC 22240' },
  { courseName: 'Networks', courseCode: 'CMSC 23320' },
  { courseName: 'Databases', courseCode: 'MPCS 53001' },
  { courseName: 'Ethics & Privacy', courseCode: 'CMSC 25910' },
  { courseName: 'Computer Security', courseCode: 'MPCS 56511' },
  { courseName: 'Object-Oriented Programming', courseCode: 'MPCS 51050' },
];

const Courses = () => {
  useGSAP(() => {
    const section = document.querySelector('#courses'); // Get the section element
    const scrubSlide = document.querySelector('.scrub-slide'); // Get the scrolling container
    const container = document.querySelector('.container'); // Get the container element
    const scrubSlideWidth = scrubSlide.scrollWidth; // Use scrollWidth to account for the full width, including overflow
    const containerWidth = container.offsetWidth; // Get the visible width of the container
    const headerHeight = document.querySelector('header')?.offsetHeight || 0; // Dynamically get the header height

    // Calculate the dynamic padding of the container
    const containerStyles = window.getComputedStyle(container);
    const containerPaddingLeft = parseFloat(containerStyles.paddingLeft) || 0;
    const containerPaddingRight = parseFloat(containerStyles.paddingRight) || 0;

    // Calculate the adjusted scroll distance
    const adjustedScrollDistance =
      scrubSlideWidth -
      (containerWidth - containerPaddingLeft - containerPaddingRight);

    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: section,
        start: `bottom bottom-=${headerHeight * 2}`,
        end: `top top+=${headerHeight}`,
        fastScrollEnd: true,
        scrub: true,
      },
      x: `-${adjustedScrollDistance}`,
    });
  });

  return (
    <section id="courses" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Relevant Coursework</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {courses.map(({ courseName, courseCode }, key) => (
            <CourseTile
              key={key}
              courseName={courseName}
              courseCode={courseCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
