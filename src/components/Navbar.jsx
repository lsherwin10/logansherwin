/**
 * @copyright 2025 logansherwin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, activeSection }) => {
  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Work', link: '#work' },
    { label: 'Courses', link: '#courses' },
    { label: 'Contact', link: '#contact' },
  ];

  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + 'px';
      activeBox.current.style.opacity = '1'; // Ensure the active box is visible
    }
  };

  useEffect(() => {
    // Initialize the active box on mount
    initActiveBox();

    // Update the active box on window resize
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  useEffect(() => {
    // Update the active box when the active section changes or when scrolling in mobile mode
    const updateActiveBox = () => {
      const activeLink = document.querySelector(`a[href="#${activeSection}"]`);
      if (activeLink) {
        lastActiveLink.current?.classList.remove('active');
        activeLink.classList.add('active');
        lastActiveLink.current = activeLink;

        if (activeSection === 'contact' && !navOpen) {
          // Hide the active box when "Contact" is active and Navbar is not in mobile mode
          activeBox.current.style.opacity = '0';

          // Set the active box to the section right above "Contact"
          const previousSection = document.querySelector(`a[href="#courses"]`);
          if (previousSection) {
            activeBox.current.style.top = previousSection.offsetTop + 'px';
            activeBox.current.style.left = previousSection.offsetLeft + 'px';
            activeBox.current.style.width = previousSection.offsetWidth + 'px';
            activeBox.current.style.height =
              previousSection.offsetHeight + 'px';
          }
        } else {
          // Update the active box position and make it visible
          activeBox.current.style.top = activeLink.offsetTop + 'px';
          activeBox.current.style.left = activeLink.offsetLeft + 'px';
          activeBox.current.style.width = activeLink.offsetWidth + 'px';
          activeBox.current.style.height = activeLink.offsetHeight + 'px';
          activeBox.current.style.opacity = '1';
        }
      }
    };

    // Call the function initially to update the active box
    updateActiveBox();

    if (navOpen) {
      // Attach the scroll event listener in mobile mode
      window.addEventListener('scroll', updateActiveBox);

      // Cleanup the event listener on unmount or when `navOpen` changes
      return () => window.removeEventListener('scroll', updateActiveBox);
    }
  }, [activeSection, navOpen]);

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link }, key) => (
        <a
          href={link}
          key={key}
          className={`nav-link ${label === 'Contact' ? 'md:hidden' : ''}`}
        >
          {label}
        </a>
      ))}
      <div ref={activeBox} className="active-box"></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Navbar;
