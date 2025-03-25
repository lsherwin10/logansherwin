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
  { courseName: 'Human-Computer Interaction', courseCode: 'CMSC 20300' },
  { courseName: 'Ethics & Privacy', courseCode: 'CMSC 25910' },
  { courseName: 'Computer Security', courseCode: 'MPCS 56511' },
  { courseName: 'Robotics', courseCode: 'CMSC 20600' },
  { courseName: 'Object-Oriented Programming', courseCode: 'MPCS 51050' },
];

const Review = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: 3.5,
      },
      x: '-1000',
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

export default Review;
