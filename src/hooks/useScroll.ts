import { useEffect, useRef, useState } from 'react';

const THRESHOLD = 0;

export const SCROLL_DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
};

const useScrollDirection = (breakpoint?: number) => {
  const [scrollDirection, setScrollDirection] = useState(SCROLL_DIRECTION.UP);
  const [hasPassBreakpoint, setHasPassBreakpoint] = useState(false);

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (breakpoint) {
        setHasPassBreakpoint(scrollY >= breakpoint);
      }

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? SCROLL_DIRECTION.DOWN : SCROLL_DIRECTION.UP;

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  console.log('{ scrollDirection, prevScrollY, hasPassBreakpoint }', { scrollDirection, prevScrollY, hasPassBreakpoint })

  return { scrollDirection, prevScrollY, hasPassBreakpoint };
};

export { useScrollDirection };
