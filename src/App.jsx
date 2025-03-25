/**
 * @copyright 2025 logansherwin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
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
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('header').offsetHeight;
    let isScrollingManually = false; // Flag to track manual scrolling

    const handleScroll = () => {
      if (isScrollingManually) return; // Skip handling scroll during manual navigation

      let currentSectionId = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        // Check if the section is in view (below the header and within the viewport)
        if (
          sectionTop <= headerHeight + 10 &&
          sectionTop + section.offsetHeight > headerHeight
        ) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId !== window.location.hash.slice(1)) {
        if (currentSectionId === 'home') {
          // Remove the hash for the "home" section
          history.replaceState(null, '', window.location.pathname);
        } else if (currentSectionId) {
          // Update the URL hash for other sections
          history.replaceState(null, '', `#${currentSectionId}`);
        }
        setActiveSection(currentSectionId);
      }
    };

    const handleClick = (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      isScrollingManually = true; // Set the flag to true during manual navigation

      const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll to the target section, accounting for the header height
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight,
          behavior: 'smooth',
        });

        // Update the active section immediately
        setActiveSection(targetId);

        // Update the URL hash
        if (targetId === 'home') {
          history.replaceState(null, '', window.location.pathname);
        } else {
          history.replaceState(null, '', `#${targetId}`);
        }
      }

      // Reset the manual scrolling flag after a short delay
      setTimeout(() => {
        isScrollingManually = false;
      }, 1000); // Adjust the delay to match the scroll duration
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Attach the click event listener to all navbar links
    const navbarLinks = document.querySelectorAll('a[href^="#"]');
    navbarLinks.forEach((link) => link.addEventListener('click', handleClick));

    return () => {
      // Cleanup event listeners
      window.removeEventListener('scroll', handleScroll);
      navbarLinks.forEach((link) =>
        link.removeEventListener('click', handleClick)
      );
    };
  }, []);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  });

  return (
    <ReactLenis root>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
