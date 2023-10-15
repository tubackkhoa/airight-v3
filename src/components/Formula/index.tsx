import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useRef } from 'react';
import { AnimationKey } from 'store/animation/useAnimationStore';
import bgIncoming from 'resources/images/bgIncoming.png';

const Formula = () => {
  const formulaRef = useRef<HTMLDivElement>(null);

  const { active } = useScrollAnimation(AnimationKey.FORMULA, formulaRef, 0, true);

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
            <svg xmlns='http://www.w3.org/2000/svg' width='41' height='41' viewBox='0 0 42 42' fill='none'>
              <path d='M21 0.784668L41.5 21.2847L21 41.7847L0.5 21.2847L21 0.784668Z' fill='white'></path>
              <path
                d='M20.2233 32.7847V9.78467H21.7767V32.7847H20.2233ZM11 22.0002V20.5691H31V22.0002H11Z'
                fill='#DA613A'
              ></path>
            </svg>

            <div className='item flex items-center justify-center gap-2 self-stretch rounded-[64px] border-1 border-solid border-gray-100 bg-white px-8 py-4  aria-expanded:h-[62px]  aria-expanded:w-[236px]  aria-expanded:px-2  aria-expanded:py-1'>
              <p className='item-text text-center text-[32px] font-semibold text-black  aria-expanded:text-20'>
                Creative prompts
              </p>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' width='41' height='41' viewBox='0 0 42 42' fill='none'>
              <path d='M21 0.784668L41.5 21.2847L21 41.7847L0.5 21.2847L21 0.784668Z' fill='white'></path>
              <path
                d='M20.2233 32.7847V9.78467H21.7767V32.7847H20.2233ZM11 22.0002V20.5691H31V22.0002H11Z'
                fill='#DA613A'
              ></path>
            </svg>

            <div className='item flex items-center justify-center gap-2 self-stretch rounded-[64px] border-1 border-solid border-gray-100 bg-white px-8 py-4  aria-expanded:h-[62px]  aria-expanded:w-[236px]  aria-expanded:px-2  aria-expanded:py-1'>
              <p className='item-text text-center text-[32px] font-semibold text-black  aria-expanded:text-20'>
                A touch of luck
              </p>
            </div>
          </div>

          <svg xmlns='http://www.w3.org/2000/svg' width='102' height='102' viewBox='0 0 102 102' fill='none'>
            <g filter='url(#filter0_d_1646_137221)'>
              <path d='M51 22.2847L71.5 42.7847L51 63.2847L30.5 42.7847L51 22.2847Z' fill='white'></path>
              <path
                d='M40.2881 39.1206V37.6646H61.7121V39.1206H40.2881ZM40.2881 47.2845V45.8286H61.7121V47.2845H40.2881Z'
                fill='#DA613A'
              ></path>
            </g>
            <defs>
              <filter
                id='filter0_d_1646_137221'
                x='0.5'
                y='0.284668'
                width='101'
                height='101'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                ></feColorMatrix>
                <feMorphology
                  radius='5'
                  operator='dilate'
                  in='SourceAlpha'
                  result='effect1_dropShadow_1646_137221'
                ></feMorphology>
                <feOffset dy='8'></feOffset>
                <feGaussianBlur stdDeviation='12.5'></feGaussianBlur>
                <feComposite in2='hardAlpha' operator='out'></feComposite>
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.780392 0 0 0 0 0.803922 0 0 0 0 0.905882 0 0 0 0.25 0'
                ></feColorMatrix>
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1646_137221'></feBlend>
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1646_137221' result='shape'></feBlend>
              </filter>
            </defs>
          </svg>

          <div className='right'>
            <p className='item-text'>Amazing content</p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p className=''>Incoming Explanation</p>
      </div>
      <img className='bg-incoming' alt='bgIncoming' src={bgIncoming} />
    </div>
  );
};

export default Formula;
