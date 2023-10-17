import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef } from 'react';
import { AnimationKey } from 'store/animation/useAnimationStore';
import bgIncoming from 'resources/images/bgIncoming.png';
import { DotLottiePlayer } from '@dotlottie/react-player';
import PlusIcon from 'resources/svg/PlusIcon';
import EqualIcon from 'resources/svg/EqualIcon';

const Formula = () => {
  const formulaRef = useRef<HTMLDivElement>(null);

  const { active } = useScrollAnimation(AnimationKey.FORMULA, formulaRef, 0, true);

  const scrollIconRef = useRef<any>(null);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  return (
    <div ref={formulaRef} className='formula-wrapper'>
      <div className='content-wrapper'>
        <div className='top'>
          <div className='left'>
            <div className='item flex items-center justify-center gap-2 self-stretch rounded-[64px] border-1 border-solid border-gray-100 bg-white px-8 py-4  aria-expanded:h-[62px]  aria-expanded:w-[236px]  aria-expanded:px-2  aria-expanded:py-1'>
              <p className='item-text text-center text-[32px] font-semibold text-black  aria-expanded:text-20'>
                AI Models
              </p>
            </div>
            <PlusIcon />

            <div className='item flex items-center justify-center gap-2 self-stretch rounded-[64px] border-1 border-solid border-gray-100 bg-white px-8 py-4  aria-expanded:h-[62px]  aria-expanded:w-[236px]  aria-expanded:px-2  aria-expanded:py-1'>
              <p className='item-text text-center text-[32px] font-semibold text-black  aria-expanded:text-20'>
                Creative prompts
              </p>
            </div>
            <PlusIcon />

            <div className='item flex items-center justify-center gap-2 self-stretch rounded-[64px] border-1 border-solid border-gray-100 bg-white px-8 py-4  aria-expanded:h-[62px]  aria-expanded:w-[236px]  aria-expanded:px-2  aria-expanded:py-1'>
              <p className='item-text text-center text-[32px] font-semibold text-black  aria-expanded:text-20'>
                A touch of luck
              </p>
            </div>
          </div>

          <EqualIcon />

          <div className='right'>
            <p className='item-text'>Amazing content</p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p className=''>Incoming Explanation</p>
        <div className='down-icon'>
          <DotLottiePlayer src='/scrolldown_arrow.lottie' autoplay loop ref={scrollIconRef} />
        </div>
      </div>
      <img className='bg-incoming' alt='bgIncoming' src={bgIncoming} />
    </div>
  );
};

export default Formula;
