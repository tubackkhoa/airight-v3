import { DotLottiePlayer } from '@dotlottie/react-player';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';
import bgTouchLuck1 from 'resources/images/bg-touch-luck1.png';
import bgTouchLuck2 from 'resources/images/bg-touch-luck2.png';
import { AnimationKey } from 'store/animation/useAnimationStore';

const Touch = () => {
  const touchRef = useRef<HTMLDivElement>(null);
  const generateLottieRef = useRef<any>(null);
  const scrollIconRef = useRef<any>(null);

  const { active } = useScrollAnimation(AnimationKey.TOUCH, touchRef, 0, false);

  const [hoverActive, setHoverActive] = useState(false);

  useEffect(() => {
    generateLottieRef.current?.play();
  }, [generateLottieRef]);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  return (
    <div ref={touchRef} className='touch-wrapper'>
      <div className='content'>
        <div className='left'>
          <div className='ingredient'>
            <p className='title'>Ingredient III</p>
            <div className='desc'>
              <p>A touch</p>
              <p> of luck</p>
              <div className='underline'></div>
            </div>
          </div>
          <div className='detail relative inline-flex flex-col items-start gap-12 sm:top-[260px] sm:gap-6'>
            <div className='desc flex flex-col items-start gap-[17px] sm:w-[300px]'>
              <p className='w-full whitespace-pre-line text-20 font-normal md:text-12'>
                With AI, no two creations are ever quite the same. The same prompt, even if used on the same AI model
                but at different times, still most likely yields different outputs.
              </p>
              <p className='w-full whitespace-pre-line text-20 font-normal md:text-12'>
                Iterations are needed in order to find the perfect results. Let' s get started!
              </p>
            </div>
            <div className='next inline-flex items-center gap-3'>
              <p className='text text-[20px] font-light text-orange-500 md:text-12'>View this recipe’s result</p>
              <div className='down-icon'>
                <DotLottiePlayer src='/scrolldown_arrow.lottie' autoplay loop ref={scrollIconRef} />
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <DotLottiePlayer src='/atouchofluck.lottie' autoplay loop ref={generateLottieRef} />
        </div>
      </div>
      <img alt='bgTouchLuck1' src={bgTouchLuck1} className='bgleft  absolute bottom-0 left-0 z-10 w-1/3 lg:hidden' />
      <img alt='bgTouchLuck2' className='bgright absolute right-0 top-0 z-10 w-1/2 sm:w-full' src={bgTouchLuck2} />
    </div>
  );
};

export default Touch;
