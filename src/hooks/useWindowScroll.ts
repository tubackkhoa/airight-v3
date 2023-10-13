import { useEffect, useState } from 'react';
const isClient = typeof window === 'object';
export default function useWindowScroll() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleResize = () => {
    setPosition({
      x: isClient ? window.pageXOffset : 0,
      y: isClient ? window.pageYOffset : 0,
    });
  };
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        document.addEventListener('scroll', handleResize, true);
      }, 1000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('scroll', handleResize, true);
      };
    }
  }, []);

  console.log('position', position)
  return { x: position.x, y: position.y };
}
