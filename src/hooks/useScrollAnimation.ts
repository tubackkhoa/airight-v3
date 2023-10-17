import { useEffect, useState } from 'react';
import { useAnimationActions, useGetAnimationStatusByKey } from 'store/animation/selector';
import { AnimationKey } from 'store/animation/useAnimationStore';

const useScrollAnimation = (
  key: AnimationKey,
  ref: HTMLDivElement | any,
  offset?: null | number,
  onlyInViewPort: boolean = true,
) => {
  const { handleUpdateAnimationStatus } = useAnimationActions();
  const active = useGetAnimationStatusByKey(key);
  // const [active, setActive] = useState(false);

  // console.log('ref.current', ref.current);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const handleScroll = () => {
      const hasElement = ref && ref.current;
      if (!hasElement) return;
      const { top, bottom } = hasElement && ref.current.getBoundingClientRect();
      const isIntersecting =
        top + (offset ? (viewportHeight * offset) / 100 : 0) < viewportHeight && (onlyInViewPort ? bottom > 0 : true);

      // console.log('top, bottom', top, bottom, offset);
      // console.log(
      //   'viewportHeight',
      //   viewportHeight,
      //   top + (offset ? (viewportHeight * offset) / 100 : 0),
      //   isIntersecting,
      // );

      if (isIntersecting) {
        // setActive(true);
        handleUpdateAnimationStatus(true, key);
      } else {
        // setActive(false);
        handleUpdateAnimationStatus(false, key);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  // console.log('active', active)
  return { active };
};

export { useScrollAnimation };
