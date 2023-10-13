import { useEffect, useState } from 'react';

const useScrollAnimation = (ref: HTMLDivElement | any, offset?: null | number) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const handleScroll = () => {
      const hasElement = ref && ref.current;
      if (!hasElement) return;
      const { top, bottom } = hasElement && ref.current.getBoundingClientRect();
      const isIntersecting = bottom + (offset ? (viewportHeight * offset) / 100 : 0) < viewportHeight && top < 0;

      console.log('top, bottom', top, bottom, offset)
      console.log('viewportHeight', viewportHeight, top + (offset ? (viewportHeight * offset) / 100 : 0), isIntersecting)

      if (isIntersecting) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  console.log('active', active)
  return { active };
};

export { useScrollAnimation };
