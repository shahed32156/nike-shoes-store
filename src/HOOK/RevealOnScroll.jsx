import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
 // Import CSS for styling

const RevealOnScroll = ({ children }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <div
      ref={ref}
      className={`reveal-element ${isIntersecting ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
