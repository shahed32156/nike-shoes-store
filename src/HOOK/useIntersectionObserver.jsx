import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [options]);

  return [containerRef, isIntersecting];
};

export default useIntersectionObserver;
