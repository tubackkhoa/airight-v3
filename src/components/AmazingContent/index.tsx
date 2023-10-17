import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';
import { AnimationKey } from 'store/animation/useAnimationStore';
import { IMG_LIST } from './constants';

const AmazingContent = () => {
  const amazingRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<any>(null);

  const { active } = useScrollAnimation(AnimationKey.AMAZING_CONTENT, amazingRef, 0, false);

  const [hoverActive, setHoverActive] = useState(false);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  return (
    <div ref={amazingRef} className='amazing-wrapper'>
      <div className='content'>
        <div className='column start'>
          <div className='top'>
            <div className='title-wrapper'>
              <div className='title'>
                <p className=''>Our simple recipe’s results</p>
              </div>
              <div className='desc'>
                Amazing content
                <div className='underline'></div>
              </div>
            </div>
          </div>
          <div className='bottom'>
            {IMG_LIST.col1.map((e) => (
              <div className={`content-wrapper ${e.className}`} key={e.alt}>
                <div className='img-wrapper'>
                  <img src={e.src} alt={e.alt} />
                </div>
              </div>
            ))}

            <div className='column column2'>
              {IMG_LIST.col2.map((e) => (
                <div className={`content-wrapper ${e.className}`} key={e.alt}>
                  <div className='img-wrapper'>
                    <img src={e.src} alt={e.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='column column3'>
          {IMG_LIST.col3.map((e) => (
            <div className={`content-wrapper ${e.className}`} key={e.alt}>
              <div className='img-wrapper'>
                <img src={e.src} alt={e.alt} />
              </div>
            </div>
          ))}
        </div>
        <div className='column column4'>
          {IMG_LIST.col4.map((e) => (
            <div className={`content-wrapper ${e.className}`} key={e.alt}>
              <div className='img-wrapper'>
                <img src={e.src} alt={e.alt} />
              </div>
            </div>
          ))}
        </div>
        <div className='column column5'>
          {IMG_LIST.col5.map((e) => (
            <div className={`content-wrapper ${e.className}`} key={e.alt}>
              <div className='img-wrapper'>
                <img src={e.src} alt={e.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazingContent;
